import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';



export default function AddChuyenXebyCarHouse(){
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        console.log(data)
        // dispatch(CallapiAddCarHouse(data))
    }

    return (
        <>
        
        <h3 style={{textAlign:'center'}}>THÊM CHUYẾN XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="busName">Nhà Xe</label>
                <input type="text" id="busName"    {...register('name', { required: true })} placeholder="Nhập tên nhà xe" />
                <label htmlFor="price"> Giá Trung Bình </label>
                <input type="number" id="price"   {...register("price")} placeholder="Nhập giá" />
                <label htmlFor="loaixe"> Chọn loại xe </label>
                <select type="number" id="loaixe"   {...register("loaixe")} placeholder="Nhập loại xe" >
                <option value="">Loại Xe 1 </option>
                <option value="">Loại Xe 2 </option>
                <option value="">Loại Xe 3 </option>
                <option value="">Loại Xe 4 </option>
                <option value="">Loại Xe 5 </option>
                </select>
                <label htmlFor="tuyenduong"> Chọn Tuyến Đường </label>
                <select type="number" id="tuyenduong"   {...register("tuyenduong")} placeholder="Nhập loại xe" >
                <option value="">Tuyến Đường 1 </option>
                <option value="">Tuyến Đường 2</option>
                <option value="">Tuyến Đường 3</option>
                <option value="">Tuyến Đường 4</option>
                <option value="">Tuyến Đường 5</option>
                </select>
                <label htmlFor="tuyenduong"> Ngày  Bắt Đầu </label>
                <input type="date" name="" id="" />
                <label htmlFor="tuyenduong"> Ngày Về </label>
                <input type="date" name="" id="" />
                <input type="submit" className='btnsb' value='Thêm Chuyến Xe' />
            </form>
            </div>
        
        </>
    )
}