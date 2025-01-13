// import '../../../css/adminweb/'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { CallapiPostDiemTra } from "../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra";



export default function AddDiemTra(){

    const isToastOk = useSelector((state) => state.StoreDiemTraCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreDiemTraCarHouse?.popupError);
    const listerror = useSelector((state) => state.Errormessage?.error);
    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Điểm Trả Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(CallapiPostDiemTra(data))
    }

    const navigate = useNavigate();
    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/diem-tra');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }

    return (
        <>
         <ToastContainer />
        <h3 style={{textAlign:'center'}}>THÊM ĐIỂM TRẢ CHO CHUYẾN XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="chuyenxe">Tên Điểm Trả</label>
                <input type="text" name="" id=""   {...register('name', { required: true })}/>
                {listerror?.name?.[0] && <p className='add-error'>{listerror?.name?.[0]}</p>}
                <label htmlFor="tuyenduong">Địa Chỉ Điểm Trả</label>
                <input type="text" name="" id="" {...register('address', { required: true })} />
                <label htmlFor="tuyenduong">Địa Chỉ Điểm Trả</label>
                <select name="" id="" {...register('is_public', { required: true })}>
                    <option value={0}>Không Công Khai ( Chỉ Nhà xe mình Sử dụng)</option>
                    <option value={1}>Công Khai (Cho nhà xe khác có thể sử dụng)</option>
                </select>
                <input type="hidden" value={1}  {...register('car_house_id', { required: true })}/>
                <input type="submit" className='btnsb' value='Thêm Điểm Trả' />
            </form>
            </div>
        
        </>
    )
}