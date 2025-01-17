import '../../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallapiGetAllTitleEvent, CallapiPostArticles } from '../../../../redux/admin-vexere/event-post/event-post-AsyncThunk';
import { useEffect } from 'react';


export default function AddEArticles() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    useEffect(() => {
        dispatch(CallapiGetAllTitleEvent())
    }, [])
    const dataTitleEvent = useSelector((state) => state.StoreEventPost?.dataTitleEvent);
    const listerror = useSelector((state) => state.Errormessage?.error);
    // console.log("list ê",listerror?.publication_date[0]);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log("data form bài viết", data);
        const imageFiles = data.images;
        const formData = new FormData();
        formData.append('title', data.title); 
        formData.append('event_id', data.event_id); 
        formData.append('content', data.content); 
        formData.append('publication_date', data.publication_date); 
        formData.append('status', data.status);
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('images[]', imageFiles[i]);
        }
        dispatch(CallapiPostArticles(formData))
    }
    const isToastOk = useSelector((state) => state.StoreArticles?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreArticles?.popupError);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/adminweb/listArticles');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }




    return (

        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>THÊM BÀI VIẾT</h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor="title">Tên Bài Viết </label>
                    <input type="text" id="title"    {...register('title', { required: true })} placeholder="Vé Tết 2025..." />

                    <label htmlFor="title">Nhóm Sự Kiện </label>
                    <select name="event_id" id="event_id"  {...register('event_id')}>
                        {dataTitleEvent && dataTitleEvent.map((item) => {
                            return <>
                                <option value={item.id}>{item.title}</option>
                            </>
                        })}

                    </select>
                    <label htmlFor="content">Nội dung bài viết</label>
                    <input type="text" id="content"    {...register('content', { required: true })} />
                    <label htmlFor="publication_date">Ngày Bắt Đầu</label>
                    <input type="date" id="publication_date"    {...register('publication_date')} />
                    {listerror && <p className='add-error'>{listerror?.publication_date?.[0]}</p>}
                    <label htmlFor="status">Trạng Thái</label>
                    <select name="status" id="status"  {...register('status')}>
                        <option value="published">Hoạt Động</option>
                        <option value="draft">Nháp</option>
                    </select>
                    <label htmlFor="image-upload">Chọn ảnh:</label>
                    <input type="file" id="image-upload" {...register('images')} name="images" accept="image/*" multiple />
                        <input type="submit" className='btnsb' value='Thêm Sự Kiện' />
                </form>
            </div>

        </>
    )
}