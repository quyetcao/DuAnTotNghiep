// import '../../../css/adminweb/'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { CallapiPostDiemDon } from "../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";



export default function AddDiemDon(){

    const isToastOk = useSelector((state) => state.StoreDiemDonCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreDiemDonCarHouse?.popupError);

    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Điểm Đón Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        dispatch(CallapiPostDiemDon(data))
    }

    const navigate = useNavigate();
    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/diem-don');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }

    return (
        <>
         <ToastContainer />
        <h3 style={{textAlign:'center'}}>THÊM ĐIỂM ĐÓN CHO CHUYẾN XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="chuyenxe">Tên Điểm Đón</label>
                <input type="text" name="" id=""   {...register('name', { required: true })}/>
                <label htmlFor="tuyenduong">Địa Chỉ Điểm Đón</label>
                <input type="text" name="" id="" {...register('address', { required: true })} />
                <label htmlFor="tuyenduong">Địa Chỉ Điểm Đón</label>
                <select name="" id="" {...register('is_public', { required: true })}>
                    <option value={0}>Không Công Khai ( Chỉ Nhà xe mình Sử dụng)</option>
                    <option value={1}>Công Khai (Cho nhà xe khác có thể sử dụng)</option>
                </select>
                <input type="hidden" value={1}  {...register('car_house_id', { required: true })}/>
                <input type="submit" className='btnsb' value='Thêm Điểm Đón' />
            </form>
            </div>
        
        </>
    )
}