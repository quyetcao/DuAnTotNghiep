import '../../css/adminweb/addcarhouse.css';
// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiAddCarHouse } from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';
import { toast, ToastContainer } from 'react-toastify';

export default function AddCarHouse() {
    //thao tac voi form gửi add nhà xe
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(CallapiGetAllCarHouse());
    // }, []);
    
    // const addcarhouse = useSelector((state) => state.StoreCarHouse?.dataCarHouse);
    const isToastOk = useSelector((state) => state.StoreCarHouse?.popupXacNhan2);
    const isToastError = useSelector((state) => state.StoreCarHouse?.popupError2);

    const notify = (event) => {
        if (event == true) {
            toast.success('Thêm Nhà Xe Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('status', data.status);
        formData.append('address', data.address);
        
        console.log('form thêm nhà xe', data);
        dispatch(CallapiAddCarHouse(formData));
    };

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/adminweb/show-ds-carhouse');
            console.log('hien thi o day: ', isToastOk);
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }

    return (
        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>NHẬP THÔNG TIN ĐỐI TÁC NHÀ XE</h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                    <label htmlFor='busName'>Tên Nhà Xe</label>
                    <input
                        type='text'
                        id='busName'
                        {...register('name', { required: true })}
                        placeholder='Nhập tên nhà xe...'
                    />

                    {/* <label htmlFor="address">Địa Chỉ</label>
                        <input type="text" id="address"    {...register('diachi', { required: true })}  placeholder="Nhập địa chỉ..." /> */}

                    <label htmlFor='phone'>Số Điện Thoại</label>
                    <input
                        type='tel'
                        id='phone'
                        {...register('phone')}
                        placeholder='Nhập số điện thoại...'
                        // pattern='[0-9]{10}'
                    />
                    <label htmlFor='status'>Trạng Thái</label>
                    <select type='number' id='status' {...register('status')} placeholder='Trạng Thái'>
                        <option value='active'>Hoạt Động </option>
                        <option value='paused'>Tạm Dừng </option>
                    </select>
                    {/* <input
                        type='text'
                        id='status'
                        {...register('status')}
                        placeholder='active or paused'
                    /> */}
                    <label htmlFor='phone'>Địa Chỉ</label>
                    <input type='text' id='address' {...register('address')} placeholder='Nhập địa chỉ...' />

                    <input type='submit' className='btnsb' value='Thêm nhà xe' />
                </form>
            </div>
        </>
    );
}
