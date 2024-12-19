import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiPostCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddCarType() {
    const notify = (event) => {
        if (event == true) {
            toast.success('Thêm Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('quantity_seat', data.quantity_seat);
        formData.append('image', imageFile);
        dispatch(CallapiPostCarType(formData));
    };
    const isToastOk = useSelector((state) => state.Storecartype?.popupXacNhan);
    const isToastError = useSelector((state) => state.Storecartype?.popupError);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/listcartype');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }

    return (
        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>THÊM THÔNG TIN CỦA XE</h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                    <label htmlFor='loaixe'>Loại xe</label>
                    <input
                        type='text'
                        id='loaixe'
                        {...register('name', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Limousine 44 chỗ ngồi '
                    />
                    {errors.name && <p className='add-error'>{errors.name.message}</p>}

                    <label htmlFor='soghe'>Số ghế</label>
                    <input
                        type='number'
                        id='soghe'
                        {...register('quantity_seat', { required: 'Vui lòng nhập thông tin!' })}
                        placeholder='Nhập số ghế'
                    />
                    {errors.quantity_seat && <p className='add-error'>{errors.quantity_seat.message}</p>}
                    <label htmlFor='imgxe'>Ảnh </label>
                    <input type='file' id='imgxe' {...register('image')} />
                    <input type='submit' className='btnsb' value='Thêm Chuyến Xe' />
                </form>
            </div>
        </>
    );
}
