import '../../css/adminweb/addcarhouse.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiPostBanner } from '../../../redux/admin-vexere/banner/banner-asynThunk';
import { useNavigate, } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddBanner() {
    const notify = (event) => {
        if (event === true) {
            toast.success('Thêm Thành Công!', { theme: 'colored' });
        } else if (event === false) {
            toast.error('Lỗi form nhập!', { theme: 'colored' });
        }
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('image', imageFile);
        console.log(data);
        dispatch(CallapiPostBanner(data));
    };

    const isToastOk = useSelector((state) => state.Storebanner?.popupXacNhan);
    const isToastError = useSelector((state) => state.Storebanner?.popupError);

    // Sử dụng useEffect để xử lý logic điều hướng và hiển thị thông báo
    useEffect(() => {
        if (isToastOk) {
            notify(true);
            setTimeout(() => {
                navigate('/adminweb/listbanner');
            }, 2000);
        }
    }, [isToastOk, navigate]); // Chỉ chạy khi isToastOk hoặc navigate thay đổi

    useEffect(() => {
        if (isToastError) {
            notify(false);
        }
    }, [isToastError]); // Chỉ chạy khi isToastError thay đổi

    return (
        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>THÊM BANNER</h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
                    <label htmlFor='imgbanner'>Thêm Ảnh </label>
                    <input type='file' id='imgbanner' {...register('image')} />
                    <input type='submit' className='btnsb' value='Thêm Banner' />
                </form>
            </div>
        </>
    );
}
