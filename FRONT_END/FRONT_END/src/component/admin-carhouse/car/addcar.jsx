import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiAddCarHouse } from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';

export default function AddCar() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(CallapiAddCarHouse(data))
    };

    return (
        <>
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>THÊM XE </h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='carName'>Tên xe</label>
                    <input
                        className='addcar-input'
                        type='text'
                        id='carName'
                        {...register('carName', { required: true })}
                        placeholder='Nhập tên nhà xe'
                    />
                    <label htmlFor='bsx'>Biển số xe </label>
                    <input className='addcar-input' type='number' id='bsx' {...register('bsx')} placeholder='Biển số xe' />
                    <label htmlFor='model'> Hãng xe </label>
                    <select type='number' id='model' {...register('model')} placeholder='Hãng xe'>
                        <option value=''>HonDa </option>
                        <option value=''>ThaCo </option>
                        <option value=''>Mẹc </option>
                        <option value=''>Alo</option>
                    </select>
                    <label htmlFor='loaixe'>Chọn Lại xe </label>
                    <select type='number' id='loaixe' {...register('loaixe')} placeholder='Chọn loại xe'>
                        <option value=''>HonDa </option>
                        <option value=''>ThaCo </option>
                        <option value=''>Mẹc </option>
                        <option value=''>Alo</option>
                    </select>

                    <input type='hidden' name='nhà xe' />

                    <input type='submit' className='btnsb' value='Thêm Xe' />
                </form>
            </div>
        </>
    );
}
