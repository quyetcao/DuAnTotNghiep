import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { CallapiGetOneCar } from '../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import { CallapiGetOneCarHouse } from '../../redux/adminweb/admin-carhouse/carhouse-asynThunk';
import { CallapiGetOneCarHouse } from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';




export default function EditCarHouse() {
    const { id  } = useParams();
    console.log('id', id );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneCarHouse(id));
    }, []);

    const dataoneCarHouse  = useSelector((state) => state.Storecarhouse?.datacarhouseone);
    console.log('dataoneCarHouse', dataoneCarHouse);

    // const isToastOk = useSelector((state) => state.StoreCar?.popupXacNhan);
    // const isToastError = useSelector((state) => state.StoreCar?.popupError);

    // const notify = (event) => {
    //     if (event == true) {
    //         toast.success('Sửa Thành Công!', { theme: 'colored' });
    //     } else if (event == false) {
    //         toast.error('Lỗi form nhập!', { theme: 'colored' });
    //     }
    // };

    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('license_plate', data.license_plate);
        formData.append('model', data.model);
        // dispatch(CallapiUpdateCarType(id,formData))
    };
    setValue('name', dataoneCarHouse?.name);
    setValue('phone', dataoneCarHouse?.phone);
    setValue('status', dataoneCarHouse?.status);
    setValue('address', dataoneCarHouse?.address);

    // if (isToastOk === true) {
    //     notify(true);
    //     setTimeout(() => {
    //         navigate('/admincarhouse/listcar');
    //     }, 2000);
    // }
    // if (isToastError) {
    //     notify(false);
    // }

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
                    <label htmlFor='status'> Status </label>
                    <input
                        className='addcar-input'
                        type='number'
                        id='status'
                        {...register('status')}
                    />
                    {/* <select type='number' id='status' {...register('status')} placeholder='Hãng xe'>
                        <option value=''>HonDa </option>
                        <option value=''>ThaCo </option>
                        <option value=''>Mẹc </option>
                        <option value=''>Alo</option>
                    </select> */}
                    <label htmlFor='address'>Address </label>
                    <input
                        className='addcar-input'
                        type='number'
                        id='address'
                        {...register('address')}
                    />
                    {/* <select type='number' id='address' {...register('address')} placeholder='Chọn loại xe'>
                        <option value=''>HonDa </option>
                        <option value=''>ThaCo </option>
                        <option value=''>Mẹc </option>
                        <option value=''>Alo</option>
                    </select> */}

                    <input type='hidden' name='nhà xe' />

                    <input type='submit' className='btnsb' value='OK' />
                </form>

                <Link to='/adminweb/show-ds-carhouse' className='btn-input-manage'>
                    <Button variant='contained'>Quản Lý Xe</Button>
                </Link>
                <Link to='/admincarhouse/listcartype'>
                    <Button variant='contained'>Quản Lý Loại Xe</Button>
                </Link>
            </div>
        </>
    );
}