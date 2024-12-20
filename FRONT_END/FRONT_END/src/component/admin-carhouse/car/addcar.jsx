import { useEffect } from 'react';
import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
    // CallapiGetAllCarType,
    CallapiGetAllCarTypenopt,
    CallapiPostCarofCarHouse,
} from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function AddCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllCarTypenopt());
    }, []);
    const dataCarTypenopt = useSelector((state) => state.Storecartype?.dataCarTypenopt);
    const isToastOk = useSelector((state) => state.StoreCar?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreCar?.popupError);

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
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>THÊM XE </h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                    <label htmlFor='carName'>Tên xe</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='carName'
                        {...register('name', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Nhập tên xe'
                    />
                    {errors.name && <p className='add-error'>{errors.name.message}</p>}

                    <label htmlFor='bsx'>Biển số xe </label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='bsx'
                        {...register('license_plate', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Biển số xe'
                    />
                    {errors.license_plate && <p className='add-error'>{errors.license_plate.message}</p>}
                    <label htmlFor='model'> Hãng xe </label>
                    <select type='number' id='model' {...register('model')} placeholder='Hãng xe'>
                        <option value='HonDa'>HonDa</option>
                        <option value='ThaCo'>ThaCo</option>
                        <option value='Mitsubishi'>VinFast</option>
                        <option value='Hyundai'>Hyundai</option>
                        <option value='Nissan'>Nissan</option>
                        <option value='Nissan'>Audi</option>
                        <option value='Volvo Buses'>Volvo Buses</option>
                        <option value=''>Mecerdes</option>
                        <option value=''>Tesla</option>
                        <option value='Suzuki'>Suzuki</option>
                        <option value=''>Mitsubishi</option>
                    </select>
                    <label htmlFor='loaixe'>Loại Xe</label>
                    <select name='loaixe' id='loaixe' {...register('car_type_id')}>
                        {dataCarTypenopt &&
                            dataCarTypenopt?.map((item) => {
                                return (
                                    <>
                                        <option value={item.id}>
                                            {item.id} - {item.name}
                                        </option>
                                    </>
                                );
                            })}
                    </select>
                    <label htmlFor='image-upload'>Chọn ảnh:</label>
                    <input
                        type='file'
                        id='image-upload'
                        {...register('images')}
                        name='images'
                        accept='image/*'
                        multiple
                    />

                    <input type='hidden' name='nhà xe' {...register('car_house_id')} value={1} />

                    <input type='submit' className='btnsb' value='Thêm Xe' />
                </form>
            </div>
        </>
    );
}
