import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { CallapiPostCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';



export default function AddCarType(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('name', data.name); 
        formData.append('quantity_seat', data.quantity_seat); 
        formData.append('image', imageFile); 
        dispatch(CallapiPostCarType(formData))
            navigate('/admincarhouse/listcartype');
        

    }

    return (
        <>
        
        <h3 style={{textAlign:'center'}}>THÊM THÔNG TIN CỦA XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <label htmlFor="loaixe">Loại xe</label>
                <input type="text" id="loaixe"    {...register('name', { required: true })} placeholder="Limousine 44 chỗ ngồi " />
                <label htmlFor="soghe">Số ghế</label>
                <input type="number" id="soghe"   {...register('quantity_seat')} placeholder="Nhập số ghế" />
                <label htmlFor="imgxe">Ảnh </label>
                <input type="file"  id="imgxe"  {...register('image')} />
                <input type="submit" className='btnsb' value='Thêm Chuyến Xe' />
            </form>
            </div>
        
        </>
    )
}