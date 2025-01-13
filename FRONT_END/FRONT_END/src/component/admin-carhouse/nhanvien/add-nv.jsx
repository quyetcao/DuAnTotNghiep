import { useEffect } from 'react';
import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    CallapiGetAllCarTypenopt,
    CallapiGetAllListCarofcarhouseid,
    CallapiPostCarofCarHouse,
} from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export default function AddNv() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllCarTypenopt());
        dispatch(CallapiGetAllListCarofcarhouseid(1));
    }, []);
  
    const isToastOk = useSelector((state) => state.StoreCar?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreCar?.popupError);
    const listcarbycarhouse = useSelector((state) => state.StoreCar?.dataCarofcarhouseid);
    const notify = (event) => {
        if (event == true) {
            toast.success('Thêm Xe Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    // const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const imageFile = data.images;
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('model', data.model);
        formData.append('license_plate', data.license_plate);
        formData.append('car_type_id', data.car_type_id);
        formData.append('car_house_id', data.car_house_id);
        for (let i = 0; i < imageFile.length; i++) {
            formData.append('images[]', imageFile[i]);
        }
        console.log('form thêm xe', data);
        dispatch(CallapiPostCarofCarHouse(formData));
    };

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/listcar');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            {' '}
            <ToastContainer />
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>THÊM NHÂN VIÊN</h3>
            <div className='page-add-carhouse'>
                <form  onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                    <label htmlFor='Name'>Tên Nhân Viên</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='Name'
                        {...register('name', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Nhập tên nhân viên'
                    />
                    {errors.name && <p className='add-error'>{errors.name.message}</p>}
                    <label htmlFor='phone'>Số điện thoại</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='phone'
                        {...register('phone', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Nhập số điện thoại'
                    />
                     {errors.phone && <p className='add-error'>{errors.phone.message}</p>}
                    <label htmlFor='diachi'>Địa chỉ</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='diachi'
                        {...register('address', { required: 'Vui lòng nhập địa chỉ!' })}
                    />
                    {errors.address && <p className='add-error'>{errors.address.message}</p>}
                    <label htmlFor='role'>Vị trí</label>
                    <select type='number' id='role' {...register('role')} placeholder='Vị trí'>
                        <option value={0}>Tài Xế</option>
                        <option value={1}>Phụ Xe</option>
                    </select>

                    <label htmlFor='car_id'>Xe</label>
                    <select type='number' id='car_id' {...register('car_id')} placeholder='xe'>
                    {listcarbycarhouse && listcarbycarhouse.map((item)=>{
                            return <> <option value={item?.id}>{item.name}</option></>
                            
                        })}
                        
                      
                    </select>
                    <input type='hidden' name='nhà xe' {...register('car_house_id')} value={1} />

                    <input type='submit' className='btnsb' value='Thêm Nhân Viên' />
                </form>
            </div>
        </>
    );
}
