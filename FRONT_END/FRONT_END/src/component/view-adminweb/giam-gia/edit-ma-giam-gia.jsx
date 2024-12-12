import '../../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallapiGetAllTitleEvent, CallapiGetOneArticles, CallapiUpdateArticles, CallapiUpdateEvent } from '../../../../redux/admin-vexere/event-post/event-post-AsyncThunk';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CallapiGetOneEvent } from '../../../redux/admin-vexere/giam-gia-redux/AsyncThunk-giam-gia';

export default function EditGiamGia() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(CallapiGetAllTitleEvent())
        dispatch(CallapiGetOneEvent(id))
    }, [])
    const dataAllEvent = useSelector((state) => state.StoreGiamGia?.dataTitleEvent);
    const dataoneArticles = useSelector((state) => state.StoreGiamGia?.dataoneArticles);
    const isToastOk = useSelector((state) => state.StoreGiamGia?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreGiamGia?.popupError);
    const notify = (event) => {
        if (event == true) {
            toast.success("Sửa Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    const { register, handleSubmit, setValue } = useForm()
    setValue('event_id', dataoneArticles?.event_id);
    setValue('title', dataoneArticles?.title);
    setValue('content', dataoneArticles?.content);
    setValue('publication_date', dataoneArticles?.publication_date);
    setValue('images', dataoneArticles?.images);
    setValue('status', dataoneArticles?.status);
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
        dispatch(CallapiUpdateArticles(id, formData))
    }


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
            <h3 style={{ textAlign: 'center' }}>CHỈNH SỬA MÃ GIẢM GIÁ </h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor="title">Tiêu Đề Sự Kiện</label>
                    <select name="" id="" {...register('event_id', { required: true })}>
                        {dataAllEvent && dataAllEvent.map((item) => {
                            return <><option value={item?.id}>{item?.title}</option></>
                        })
                        }
                    </select>
                    <label htmlFor="description">Tên Bài Viết</label>
                    <input type="text" id="description"    {...register('title', { required: true })} />
                    <label htmlFor="content">Nội dung bài viết</label>
                    <input type="text" id="content"    {...register('content', { required: true })} />
                    <label htmlFor="publication_date">Ngày Bắt Đầu</label>
                    <input type="date" id="publication_date"    {...register('publication_date')} />
                    <label htmlFor="image-upload">Chọn ảnh:</label>
                    <input type="file" id="image-upload" {...register('images')} name="images" accept="image/*" multiple />
                    <label htmlFor="status">Trạng Thái</label>
                    <select name="status" id="status"  {...register('status')}>
                        <option value="published">Hoạt Động</option>
                        <option value="draft">Nháp</option>
                    </select>
                    <input type="submit" className='btnsb' value='ĐIỀU CHỈNH' />
                </form>
            </div>

        </>
    )
}