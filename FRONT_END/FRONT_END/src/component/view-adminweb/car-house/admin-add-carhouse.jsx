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
    const isToastOk = useSelector((state) => state.Storecarhouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.Storecarhouse?.popupError);

    const notify = (event) => {
        if (event == true) {
            toast.success('Thêm Nhà Xe Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
                        {...register('name', { required: 'Vui lòng nhập thông tin' })}
                        placeholder='Nhập tên nhà xe...'
                    />
                    {errors.name && <p className='add-error'>{errors.name.message}</p>}

                    {/* <label htmlFor="address">Địa Chỉ</label>
                        <input type="text" id="address"    {...register('diachi', { required: true })}  placeholder="Nhập địa chỉ..." /> */}

                    <label htmlFor='phone'>Số Điện Thoại</label>
                    <input
                        type='tel'
                        id='phone'
                        {...register('phone', {
                            required: 'Vui lòng nhập thông tin',
                            pattern: {
                                value: /^0\d{9}$/,
                                message: 'Vui lòng nhập đúng định dạng số điện thoại (10 số, bắt đầu bằng 0)',
                            },
                        })}
                    />
                    {errors.phone && <p className='add-error'>{errors.phone.message}</p>}
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
                    {errors.phone && <p className='add-error'>{errors.phone.message}</p>}

                    <input type='submit' className='btnsb' value='Thêm nhà xe' />
                </form>
            </div>
        </>
    );
}
