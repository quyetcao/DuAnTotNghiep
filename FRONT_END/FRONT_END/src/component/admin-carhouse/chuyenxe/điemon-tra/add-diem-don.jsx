import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';



export default function AddDiemDon(){
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        console.log(data)
        // dispatch(CallapiAddCarHouse(data))
    }

    return (
        <>
        
        <h3 style={{textAlign:'center'}}>THÊM ĐIỂM ĐÓN CHO CHUYẾN XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="chuyenxe">Chọn Chuyến Xe</label>
                <select type="number" id="chuyenxe"   {...register("chuyenxe")} placeholder="Chọn Chuyến xe" >
                <option value="">c Xe 1 </option>
                <option value="">c Xe 2 </option>
                <option value="">c Xe 3 </option>
                <option value="">c Xe 4 </option>
                <option value="">c Xe 5 </option>
                </select>
                <label htmlFor="tuyenduong"> Giờ Đón</label>
                <input type="time" name="" id="" />
                <label htmlFor="diadiemdon">Địa điểm đón  </label>
                {/* địa điểm trả lấy từ bảng pickup point  */}
                <select type="number" id="diadiemdon"   {...register("diadiemdon")} placeholder="Chọn địa điểm đón" >
                <option value="">Loại Xe 1 </option>
                <option value="">Loại Xe 2 </option>
                <option value="">Loại Xe 3 </option>
                <option value="">Loại Xe 4 </option>
                <option value="">Loại Xe 5 </option>
                </select>

             
               
                <input type="submit" className='btnsb' value='Thêm Chuyến Xe' />
            </form>
            </div>
        
        </>
    )
}