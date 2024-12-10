import '../../css/adminweb/addchuyenxe.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { CallapiGetAllCarType, CallapiGetOneCarOfCarHouse, CallapiGetOneCarType, CallapiUpdateCarofCarHouse, CallapiUpdateCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function EditCarOfCarHouse() {
    const { id } = useParams();
    console.log("id", id);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneCarOfCarHouse(id))
        dispatch(CallapiGetAllCarType())
    }, [])

    const allcartype = useSelector((state) => state.Storecartype?.dataCarType);
    const dataoneCarofCH = useSelector((state) => state.StoreCar?.dataoneCarofCarHouse);
    console.log("dataonecarofcarhouse", dataoneCarofCH);
    const isToastOk = useSelector((state) => state.StoreCar?.popupXacNhan);
    const isToastError = useSelector((state) => state.StoreCar?.popupError);

    const notify = (event) => {
        if (event == true) {
            toast.success("Sửa Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }


    const delete_images = []
    const imgRef = useRef([]);
    const setImageRef = (el, index) => {
        if (el) {
            imgRef.current[index] = el; 
        }
    };
    function deleteImage(event, id_image) {
        event.preventDefault();
        delete_images.push(id_image);
        imgRef.current[id_image].style.display = 'none';
        console.log("Image Ref:", imgRef.current);
        console.log("delete_images", delete_images);

    }

    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm()
    const onSubmit = (data) => {
        const imageFile = data.images;
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('model', data.model);
        formData.append('license_plate', data.license_plate);
        formData.append('car_type_id', data.car_type_id);
        formData.append('car_house_id', data.car_house_id);
        formData.append('delete_images[]', delete_images);
        console.log(">>>>>>>>>>>>>>>>>>",delete_images);
        for (let i = 0; i < imageFile.length; i++) {
            formData.append('images[]', imageFile[i]);
        }
        dispatch(CallapiUpdateCarofCarHouse(id, formData))
    }
    setValue('car_house_id', dataoneCarofCH?.car_house_id);
    setValue('name', dataoneCarofCH?.name);
    setValue('car_type_id', dataoneCarofCH?.car_type_id);
    setValue('license_plate', dataoneCarofCH?.license_plate);
    setValue('model', dataoneCarofCH?.model);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/listcar');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }




    return (

        <>
            <ToastContainer />
            <h3 style={{ textAlign: 'center' }}>CHỈNH SỬA THÔNG TIN CỦA XE</h3>
            <div className="page-add-carhouse">
                <form id="busForm" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

                    <label htmlFor="tenxe">Tên xe</label>
                    <input type="text" id="tenxe"   {...register('name')} />
                    <label htmlFor="loaixe">Loại Xe</label>
                    <select name="loaixe" id="loaixe"  {...register('car_type_id')}>
                        {allcartype && allcartype.map(item => {
                            return <><option value={item.id}>{item.id} - {item.name}</option></>
                        })
                        }
                    </select>
                    <label htmlFor="license_plate">Biển Số Xe</label>
                    <input type="text" id="license_plate"   {...register('license_plate')} />
                    <label htmlFor="model">Hãng xe</label>
                    <input type="text" id="model"   {...register('model')} />
                    <input type="number" id="car_house_id"   {...register('car_house_id')} />
                    <label htmlFor="model">Ảnh Cũ</label>
                    <td>{dataoneCarofCH.car_images && dataoneCarofCH.car_images.map((itemimg) => {
                        return <><div className="image-item" data-id="1" ref={(el) => setImageRef(el, itemimg.id)} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                            <img src={`http://127.0.0.1:8000/images/cars/${itemimg?.image}`} width="80px" />
                            <button onClick={(event) => deleteImage(event, itemimg?.id)} style={{ background: 'none', border: 'none' }}>Xóa ảnh</button>
                        </div></>
                    })}
                    </td>

                    <input type="file" id="image-upload" {...register('images')} name="images" accept="image/*" multiple />
                    <input type="submit" className='btnsb' value='Sửa' />
                </form>

                <Link to="/adminweb/show-ds-carhouse" className='btn-input-manage'><Button variant="contained">Quản Lý Xe</Button></Link>
                <Link to="/admincarhouse/listcartype"><Button variant="contained">Quản Lý Loại Xe</Button></Link>
            </div>




        </>
    )
}