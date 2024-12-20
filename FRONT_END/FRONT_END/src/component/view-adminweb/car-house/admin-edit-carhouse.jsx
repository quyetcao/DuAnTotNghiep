import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { CallapiGetOneCar } from '../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import { CallapiGetOneCarHouse } from '../../redux/adminweb/admin-carhouse/carhouse-asynThunk';
import { CallapiEditCarHouse, CallapiGetOneCarHouse } from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';




export default function EditCarHouse() {
    const { id  } = useParams();
    console.log('id', id );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneCarHouse(id));
    }, []);

    const dataoneCarHouse  = useSelector((state) => state.Storecarhouse?.datacarhouseone);
    console.log('dataoneCarHouse', dataoneCarHouse);

    const isToastOk = useSelector((state) => state.Storecarhouse?.showPopupOk);
    const isToastError = useSelector((state) => state.Storecarhouse?.showPopupError);

    const notify = (event) => {
        if (event == true) {
            toast.success('Sửa Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (formData) => {
        console.log("dataaaaaa",formData);
        dispatch(CallapiEditCarHouse(id,formData))
    };
    setValue('name', dataoneCarHouse?.name);
    setValue('phone', dataoneCarHouse?.phone);
    setValue('status', dataoneCarHouse?.status);
    setValue('address', dataoneCarHouse?.address);

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
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>CHỈNH SỬA THÔNG TIN NHÀ XE </h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='carName'>Tên xe</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='name'
                        {...register('name', { required: true })}
                        placeholder='Nhập tên nhà xe'
                    />
                    <label htmlFor='bsx'>Số điện thoại </label>
                    <input
                        className='addcar-input'
                        type='number'
                        id='phone'
                        {...register('phone')}
                        placeholder='Số điện thoại'
                    />
                    <label htmlFor='status'> Trạng Thái </label>
                    <select type='number' id='status' {...register('status')} placeholder='Trạng Thái'>
                        <option value='active'>Hoạt Động </option>
                        {/* <option value='inactive'>Không Hoạt Động </option> */}
                        <option value='paused'>Tạm Dừng </option>
                    </select>
                    <label htmlFor='address'>Address </label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='address'
                        {...register('address')}
                    />

                    <input type='hidden' name='nhà xe' />

                    <input type='submit' className='btnsb' value='OK' />
                </form>

                <div className='group-link-active'>
                    <Link to='/adminweb/show-ds-carhouse'>
                        <Button variant='contained'>Quản Lý Xe</Button>
                    </Link>
                    {/* <Link to='/admincarhouse/listcartype'>
                        <Button variant='contained'>Quản Lý Loại Xe</Button>
                    </Link> */}
                </div>
            </div>
        </>
    );
}
