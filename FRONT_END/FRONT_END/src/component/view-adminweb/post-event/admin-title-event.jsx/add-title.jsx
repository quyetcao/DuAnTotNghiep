import '../../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallapiPostEvent } from '../../../../redux/admin-vexere/event-post/event-post-AsyncThunk';


export default function AddEvent(){
    const notify = (event) => {
        if(event == true){
            toast.success("Thêm Thành Công!", { theme: "colored" });
        }else if(event == false){
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log("data form bài viết",data);
        dispatch(CallapiPostEvent(data))
    }
    const isToastOk = useSelector((state) => state.StoreEventPost?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreEventPost?.popupError);
   
    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/adminweb/listEvent');
        }, 2000);
    } 
    if(isToastError){
        notify(false);
    }
    
    
    
    
    return (
         
        <>
          <ToastContainer/>
        <h3 style={{textAlign:'center'}}>THÊM SỰ KIỆN</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Tiêu Đề Sự Kiện</label>
                <input type="text" id="title"    {...register('title', { required: true })} placeholder="Vé Tết 2025..." />
                <label htmlFor="description">Nội dung sự kiện</label>
                <input type="text" id="description"    {...register('description', { required: true })} />
                <label htmlFor="start_date">Ngày Bắt Đầu</label>
                <input type="date" id="start_date"    {...register('start_date')}  />
                <label htmlFor="end_date">Ngày Kết Thúc</label>
                <input type="date" id="end_date"   {...register('end_date')}  />
                <label htmlFor="status">Trạng Thái</label>
                <select name="status" id="status"  {...register('status')}>
                    <option value="active">Hoạt Động</option>
                    <option value="inactive">Nháp</option>
                </select>
                <input type="submit" className='btnsb' value='Thêm Sự Kiện' />
            </form>
            </div>
        
        </>
    )
}