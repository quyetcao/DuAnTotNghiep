
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { CallapiGetOneDiemDon, CallapiUpdateDiemDon } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
export default function EditDiemDon() {
    const { id } = useParams();
    console.log("id", id);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneDiemDon(id))
    }, [])

    const dataoneDiemDon = useSelector((state) => state.StoreDiemDonCarHouse?.dataoneDiemDon);
    console.log("data>>>>>>",dataoneDiemDon);
    const isToastOk = useSelector((state) => state.StoreDiemDonCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreDiemDonCarHouse?.popupError);

    const notify = (event) => {
        if (event == true) {
            toast.success("Sửa Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm()
    const onSubmit = (data) => {
        dispatch(CallapiUpdateDiemDon(id, data))
    }
    setValue('name', dataoneDiemDon?.name);
    setValue('address', dataoneDiemDon?.address);
    setValue('car_house_id', dataoneDiemDon?.car_house_id);
    setValue('is_public', dataoneDiemDon?.is_public);


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
            <h3 style={{ textAlign: 'center' }}>CHỈNH SỬA THÔNG TIN ĐIỂM ĐÓN</h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <label htmlFor="chuyenxe">Tên Điểm Đón</label>
                    <input type="text" name="" id=""   {...register('name', { required: true })} />
                    <label htmlFor="tuyenduong">Địa Chỉ Điểm Đón</label>
                    <input type="text" name="" id="" {...register('address', { required: true })} />
                    <label htmlFor="tuyenduong">Địa Chỉ Điểm Đón</label>
                    <select name="" id="" {...register('is_public', { required: true })}>
                        <option value={0}>Không Công Khai ( Chỉ Nhà xe mình Sử dụng)</option>
                        <option value={1}>Công Khai (Cho nhà xe khác có thể sử dụng)</option>
                    </select>
                    <input type="hidden"   {...register('car_house_id', { required: true })} />

                    <input type="submit" className='btnsb' value='Sửa' />
                </form>
            </div>




        </>
    )
}