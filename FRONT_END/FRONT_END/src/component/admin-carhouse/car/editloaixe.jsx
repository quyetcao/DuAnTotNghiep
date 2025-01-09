import '../../css/adminweb/addchuyenxe.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiGetOneCarType, CallapiUpdateCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function EditCarType() {
    const { id } = useParams();
    console.log('id', id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneCarType(id));
    }, []);

    const dataoneCarType = useSelector((state) => state.Storecartype?.dataOneCarType);
    console.log('dataonecartype', dataoneCarType);

    const isToastOk = useSelector((state) => state.Storecartype?.popupXacNhan);
    const isToastError = useSelector((state) => state.Storecartype?.popupError);

    const notify = (event) => {
        if (event == true) {
            toast.success('Sửa Thành Công!', { theme: 'colored' });
        } else if (event == false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        const imageFile = data.image[0];
        formData.append('name', data.name);
        formData.append('quantity_seat', data.quantity_seat);
        formData.append('image', imageFile);
        formData.append('_method', 'PUT');
        console.log("kiểm tra số",typeof(data.quantity_seat));
        dispatch(CallapiUpdateCarType(id,formData));

    };
    useEffect(() => {
        if (dataoneCarType) {
            setValue('name', dataoneCarType.name || ''); // Thiết lập giá trị ban đầu cho "name"
            setValue('quantity_seat', dataoneCarType.quantity_seat || ''); // Giá trị ban đầu cho "quantity_seat"
            setValue('image', null); // Không set giá trị file hình ảnh (file input không lưu giá trị)
        }
    }, [dataoneCarType, setValue]);
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
            <h3 style={{ textAlign: 'center' }}>CHỈNH SỬA THÔNG TIN CỦA XE</h3>
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

                    <input type='submit' className='btnsb' value='Sửa' />
                </form>
                <div className='group-link-active'>
                    <Link to='/admincarhouse/listcartype'>
                        <Button variant='contained'>Quản Lý Loại Xe</Button>
                    </Link>
                    <Link to='/admincarhouse/listcar'>
                        <Button variant='contained'>Quản Lý Xe</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
