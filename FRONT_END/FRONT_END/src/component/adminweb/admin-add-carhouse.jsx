import '../css/adminweb/addcarhouse.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { CallapiAddCarHouse } from '../../redux/adminweb/admin-carhouse/carhouse-asynThunk';

export default function AddCarHouse() {

    //thao tac voi form gửi add nhà xe 
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {

        console.log(data)
        dispatch(CallapiAddCarHouse(data))
    }


    // const navigate = useNavigate();


    return (
        <>
            <h3 style={{textAlign:'center'}}>NHẬP THÔNG TIN ĐỐI TÁC NHÀ XE</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                
                <label htmlFor="busName">Tên Nhà Xe</label>
                <input type="text" id="busName"    {...register('name', { required: true })} placeholder="Nhập tên nhà xe..." />

                {/* <label htmlFor="address">Địa Chỉ</label>
                    <input type="text" id="address"    {...register('diachi', { required: true })}  placeholder="Nhập địa chỉ..." /> */}

                <label htmlFor="phone">Số Điện Thoại</label>
                <input type="tel" id="phone"   {...register("phone")} placeholder="Nhập số điện thoại..." pattern="[0-9]{10}" />

                <input type="submit" className='btnsb' value='Thêm nhà xe' />
            </form>
            </div>
        </>

    )
}