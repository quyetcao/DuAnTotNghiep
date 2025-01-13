
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {  CallapiGetOneDiemTra, CallapiUpdateDiemTra } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
export default function EditDiemTra() {
    const { id } = useParams();
    console.log("id", id);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneDiemTra(id))
    }, [])

    const dataoneDiemTra = useSelector((state) => state.StoreDiemTraCarHouse?.dataoneDiemTra);
    // console.log("data>>>>>>",dataoneDiemTra);
    const isToastOk = useSelector((state) => state.StoreDiemTraCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreDiemTraCarHouse?.popupError);
    const listerror = useSelector((state) => state.Errormessage?.error);
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
        dispatch(CallapiUpdateDiemTra(id, data))
    }
    setValue('name', dataoneDiemTra?.name);
    setValue('address', dataoneDiemTra?.address);
    setValue('car_house_id', dataoneDiemTra?.car_house_id);
    setValue('is_public', dataoneDiemTra?.is_public);


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
            <h3 style={{ textAlign: 'center' }}>CHỈNH SỬA THÔNG TIN ĐIỂM TRẢ</h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <label htmlFor="chuyenxe">Tên Điểm Trả</label>
                    <input type="text" name="" id=""   {...register('name', { required: true })} />
                    {listerror?.name?.[0] && <p className='add-error'>{listerror?.name?.[0]}</p>}
                    <label htmlFor="tuyenduong">Địa Chỉ Điểm Trả</label>
                    <input type="text" name="" id="" {...register('address', { required: true })} />
                    <label htmlFor="tuyenduong">Địa Chỉ Điểm Trả</label>
                    <select name="" id="" {...register('is_public', { required: true })}>
                        <option value={0}>Không Công Khai ( Chỉ Nhà xe mình Sử dụng)</option>
                        <option value={1}>Công Khai (Cho nhà xe khác có thể sử dụng)</option>
                    </select>
                    {listerror?.is_public?.[0] && <p className='add-error'>{listerror?.is_public?.[0]}</p>}
                    <input type="hidden"   {...register('car_house_id', { required: true })} />

                    <input type="submit" className='btnsb' value='Sửa' />
                </form>
            </div>




        </>
    )
}