import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
// import { CallapiGetOneCarType, CallapiUpdateCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CallapiGetOneBanner } from '../../../redux/admin-vexere/banner/banner-asynThunk';
export default function EditCarType(){
    const { id } = useParams();
    console.log("id",id);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneBanner(id))
    }, [])

    const dataoneBanner = useSelector((state) => state.Storebanner?.dataOneBanner);
    console.log("dataonecartype",dataonBanner);
    
    const isToastOk = useSelector((state) => state.Storebanner?.popupXacNhan);
    const isToastError = useSelector((state) => state.Storebanner?.popupError);

    const notify = (event) => {
        if(event == true){
            toast.success("Sửa Thành Công!", { theme: "colored" });
        }else if(event == false){
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }
   
    const navigate = useNavigate();
    const { register, handleSubmit,setValue  } = useForm()
    const onSubmit = (data) => {
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('image', imageFile); 
        // formData.append('name', data.name); 
        // formData.append('quantity_seat', data.quantity_seat); 
        // dispatch(CallapiUpdateCarType(id,formData))
    }
    // setValue('name', dataoneBanner?.name);
    // setValue('quantity_seat', dataoneBanner?.quantity_seat);
    setValue('image', dataoneBanner?.image);
   
    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/adminweb/listbanner');
        }, 2000);
    } 
    if(isToastError){
        notify(false);
    }
    
    
    
    
    return (
         
        <>
          <ToastContainer/>
        <h3 style={{textAlign:'center'}}>CHỈNH SỬA BANNER</h3>
            <div className="page-add-carhouse">
            <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                {/* <label htmlFor="loaixe">Loại xe</label>
                <input type="text" id="loaixe"    {...register('name', { required: true })} placeholder="Limousine 44 chỗ ngồi "  />
                <label htmlFor="soghe">Số ghế</label>
                <input type="number" id="soghe"   {...register('quantity_seat')} placeholder="Nhập số ghế" /> */}
                <label htmlFor="imgxe">Ảnh </label>
              
                <input type="file"  id="imgxe"  {...register('image')} />
                 
                <input type="submit" className='btnsb' value='Sửa' />
            </form>

            <Link to="/adminweb/show-ds-carhouse" className='btn-input-manage'><Button variant="contained">Quản Lý Xe</Button></Link> 
            <Link to="/adminweb/listbanner"><Button variant="contained">Quản Lý Loại Xe</Button></Link>
            <Link to="/admincarhouse/listcartype"><Button variant="contained">Quản Lý Loại Xe</Button></Link>
            </div>



        
        </>
    )
}