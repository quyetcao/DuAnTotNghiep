
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallapiPostGiamGia } from '../../../redux/admin-vexere/giam-gia-redux/AsyncThunk-giam-gia';



export default function AddGiamGia() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

  

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const imageFiles = data.image[0];
        const formData = new FormData();
        formData.append('code', data.code); 
        formData.append('description', data.description); 
        formData.append('discount_amount', data.discount_amount); 
        formData.append('discount_type', data.discount_type); 
        formData.append('start_date', data.start_date);
        formData.append('end_date', data.end_date);
        formData.append('usage_limit', data.usage_limit);
        formData.append('is_active', data.is_active);
        formData.append('image', imageFiles);

        dispatch(CallapiPostGiamGia(formData))
    }
    const isToastOk = useSelector((state) => state.StoreGiamGia?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreGiamGia?.popupError);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/adminweb/giam-gia');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }


    return (

        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>THÊM Mã Giảm Giá</h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor="code">Mã giảm giá </label>
                    <input type="text" id="code"    {...register('code', { required: true })} placeholder="GG50FP" />

                    <label htmlFor="description">Mô tả</label>
                    <input name="description" id="description"  {...register('description')} />
                    <label htmlFor="discount_type">Loại Giảm Giá</label>
                    <select type="date" id="discount_type"    {...register('discount_type')}>
                        <option value="fixed">Giảm Cố Định</option>
                        <option value="percentage">Giảm Theo Phần Trăm</option>
                    </select>
                    <label htmlFor="discount_amount">Số tiền giảm (số % giảm)</label>
                    <input type="number" id="discount_amount"    {...register('discount_amount', { required: true })} />

                    <label htmlFor="start_date">Ngày Bắt Đầu</label>
                    <input type="datetime-local" id="start_date"    {...register('start_date', { required: true })} />
                    <label htmlFor="end_date">Ngày Kết Thúc</label>
                    <input type="datetime-local" id="end_date"    {...register('end_date', { required: true })} />
                    <label htmlFor="usage_limit">Giới Hạn</label>
                    <input type="number" id="usage_limit"    {...register('usage_limit', { required: true })} />
                    <label htmlFor="is_active">Trạng Thái</label>
                    <input type="number" id="is_active"    {...register('is_active', { required: true })} />
                    <label htmlFor="image">Ảnh</label>
                    <input type="file" id="image"    {...register('image', { required: true })} />
                        <input type="submit" className='btnsb' value='Thêm Mã giảm' />
                </form>
            </div>

        </>
    )
}