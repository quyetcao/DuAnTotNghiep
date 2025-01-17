// import '../../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { callApidonhangbyid, callApiEditStatusdonhang } from '../../../redux/thanhtoan/AsyncThunk_thanhtoan';

export default function EditStatusDh(){
    const {id}  =useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(callApidonhangbyid(id))
    }, [])

    const dataonedh1 = useSelector((state) => state.StoreThanhToan?.dataonedh);
   console.log("dataonedh1",dataonedh1?.status);
   
    const { register, handleSubmit,setValue } = useForm()
    setValue('status', dataonedh1?.status);
    const onSubmit = (data) => {
      
        dispatch(callApiEditStatusdonhang(id,data))
        navigate('/admincarhouse/show-don-hang');
    }

   
    // if (isToastOk === true) {
    //     notify(true);
    //     setTimeout(() => {
    //         navigate('/adminweb/listEvent');
    //     }, 2000);
    // } 
    // if(isToastError){
    //     notify(false);
    // }
    
    
    
    
    return (
         
        <>
          <ToastContainer/>
        <h3 style={{textAlign:'center'}}>CHỈNH SỬA TRẠNG THÁI ĐƠN HÀNG </h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="status">Trạng Thái</label>
                <select name="status" id="status"  {...register('status')}>
                    <option value="pending">Đang Xử Lý </option>
                    <option value="paid">Hoàn Thành</option>
                    <option value="cancelled">Đã Hủy</option>
                </select>
                <input type="submit" className='btnsb' value='ĐIỀU CHỈNH' />
            </form>
            </div>
        
        </>
    )
}