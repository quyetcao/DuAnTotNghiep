import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';



export default function AddCarType(){
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        console.log(data)
        // dispatch(CallapiAddCarHouse(data))
    }

    return (
        <>
        
        <h3 style={{textAlign:'center'}}>THÊM THÔNG TIN CỦA XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="loaixe">Loại xe</label>
                <input type="text" id="loaixe"    {...register('loaixe', { required: true })} placeholder="Limousine 44 chỗ ngồi " />
                <label htmlFor="soghe">Số ghế</label>
                <input type="number" id="soghe"   {...register("soghe")} placeholder="Nhập giá" />
                <label htmlFor="imgxe">Ảnh </label>
                <input type="file" name="imgxe" id="" />
                <input type="submit" className='btnsb' value='Thêm Chuyến Xe' />
            </form>
            </div>
        
        </>
    )
}