import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { CallapiGetAllDiemDonByCarHouse, CallapiGetAllDiemTraByCarHouse } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
import { CallapiGetAllListCarofcarhouseid } from '../../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { callApiListTuyenDuongAll } from '../../../../redux/info-bus/infobus-asynThunk';
import { CallapiGetOneCxCarHouse, CallapiUpdateCxCarHouse } from '../../../../redux/adminweb/admin-cx-carhouse/Asynthunk-cx-carhouse';
import { CallapiGetAllListnvlxcarhouseid } from '../../../../redux/adminweb/nhanvienlaixe/AsynThunk-nclx';


export default function EditChuyenXebyCarHouse() {
      const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetOneCxCarHouse(id));
        dispatch(CallapiGetAllDiemTraByCarHouse(1))
        dispatch(CallapiGetAllDiemDonByCarHouse(1))
        dispatch(CallapiGetAllListCarofcarhouseid(1))
        dispatch(callApiListTuyenDuongAll())
        dispatch(CallapiGetAllListnvlxcarhouseid(1))
    }, [])
    const dataonecx = useSelector((state) => state.ChuyenxeofCarHouse?.dataOneCx);
    console.log("object",dataonecx);
    const alldiemdon = useSelector((state) => state.StoreDiemDonCarHouse?.datadiemdonofcarhouse);
    const alldiemtra = useSelector((state) => state.StoreDiemTraCarHouse?.datadiemtraofcarhouse);
    const allCar = useSelector((state) => state.StoreCar?.dataCarofcarhouseid);
    console.log("allcarr",allCar );
    const allTuyenDuong = useSelector((state) => state.InfoofBus?.allTuyenDuong);
    const allNv= useSelector((state) => state.StorEmmployee?.datanvlxcarhouseid);
    const isToastOk = useSelector((state) => state.ChuyenxeofCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.ChuyenxeofCarHouse?.popupError);
    
 
    // phan tao picup piont , drroff point 
    const [pickupPoints, setPickupPoints] = useState([]);
    const [dropoffPoints, setDropoffPoints] = useState([]);
    const [pickup, setPickup] = useState({ id: "", pickup_time: "" });
    const [dropoff, setDropoff] = useState({ id: "", dropoff_time: "" });
    const [cartype,setCarType]= useState(0);
    // const [allNvaray, setAllNv] = useState([]);
    const handleCarChange = (event) => {
        const selectedCarId = event.target.value;
        setCarType(selectedCarId);
    };
    console.log(">>",dataonecx?.car_id);
    ///phan thao tac form 

    const { register, handleSubmit,setValue } = useForm();
    const onSubmit = (data) => {
        console.log("data",data);
       
        const formData = new FormData();
        formData.append('car_id', data.car_id);
        formData.append('car_route_id', data.car_route_id);
        formData.append('departure_date', data.departure_date);
        formData.append('arrival_date', data.arrival_date);
        formData.append('return_date', data.return_date);
        formData.append('price', data.price);
        formData.append('status', data.status);
        formData.append('car_house_id', data.car_house_id);
        data.employees.forEach((employee, index) => {
            formData.append(`employees[${index}]`, employee);
        });
        formData.append('car_type_id',allCar[cartype]?.car_type?.id);
        pickupPoints.forEach((point, index) => {
            formData.append(`pickup_points[${index}][id]`, point.id);
            formData.append(`pickup_points[${index}][pickup_time]`, point.pickup_time);
        });
        
        dropoffPoints.forEach((point, index) => {
            formData.append(`dropoff_points[${index}][id]`, point.id);
            formData.append(`dropoff_points[${index}][dropoff_time]`, point.dropoff_time);
        });
        dispatch(CallapiUpdateCxCarHouse(dataonecx.id,formData));
    };
    setValue('car_id', dataonecx?.car_id);
    setValue('car_route_id', dataonecx?.car_route_id);
    setValue('departure_date', dataonecx?.departure_date);
    setValue('arrival_date', dataonecx?.arrival_date);
    setValue('return_date', dataonecx?.return_date);
    setValue('price', dataonecx?.price);
    setValue('status', dataonecx?.status);
    setValue('car_house_id', dataonecx?.car_house_id);
    setValue('car_type_id', dataonecx?.car_type_id);

    const handlePickupChange = (e) => {
      
        e.preventDefault(); 
        setPickup({ ...pickup, [e.target.name]: e.target.value });
    };

    const handleDropoffChange = (e) => {
        e.preventDefault(); 
        setDropoff({ ...dropoff, [e.target.name]: e.target.value });
    };




    const addPickup = () => {
        if (pickup.id && pickup.pickup_time) {
            setPickupPoints([...pickupPoints, { id: parseInt(pickup.id), pickup_time: pickup.pickup_time }]);
            setPickup({ id: "", pickup_time: "" });
            console.log("pickupPoints",pickupPoints);
        }
    };

    const addDropoff = () => {
        if (dropoff.id && dropoff.dropoff_time) {
            setDropoffPoints([...dropoffPoints, { id: parseInt(dropoff.id), dropoff_time: dropoff.dropoff_time }]);
            setDropoff({ id: "", dropoff_time: "" });
        }
    };



    

    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Xe Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/quan-li-chuyen-xe');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }
   
    
    return (
        <>  <ToastContainer />
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>CHỈNH SỬA CHUYẾN XE </h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor='carName'>Tên xe</label>
                    <select type='number' id='car_id' {...register('car_id')}  onChange={handleCarChange} placeholder='Tên xe'>
                        {allCar && allCar.map((itemcar) => {
                          return <><option value={itemcar.id}>{itemcar.name}</option></>  
                        })
                        }
                    </select>
                    <label htmlFor='car_route_id'>Tuyến Đường</label>
                    <select type='number' id='car_route_id' {...register('car_route_id')} >
                    {allTuyenDuong && allTuyenDuong.map((itemtd) => {
                          return <><option value={itemtd.id}>{itemtd.city_from}-{itemtd.city_to}</option></>  
                        })
                        }
                    </select>
                    <label htmlFor='ngaydi'>Ngày đi</label>
                    <input
                        className='addcar-input'
                        type='date'
                        id='departure_date'
                        {...register('departure_date', { required: true })}
                        placeholder='ngày đi '
                    />
                    <label htmlFor='ngayve'>Ngày đến</label>
                    <input
                        className='addcar-input'
                        type='date'
                        id='arrival_date'
                        {...register('arrival_date')}
                        placeholder='ngày đến'
                    />

                    <label htmlFor='ngayve'>Ngày về</label>
                    <input
                        className='addcar-input'
                        type='date'
                        id='return_date'
                        {...register('return_date')}
                        placeholder='ngày về '
                    />
                    <label htmlFor='price'>Giá</label>
                    <input className='price' type='number' id='price' {...register('price')} placeholder='Giá' />
                    <label htmlFor='status'>Trạng Thái </label>
                    <select id='status' {...register('status')} >
                        <option value='not_started'>Chưa khởi hành  </option>
                        <option value='running'>Đang chạy </option>
                        <option value='completed'>Hoàn Thành</option>
                    </select>
                    <label htmlFor='employees'>Tài Xế </label>
                    <select id='employees' {...register('employees')}  multiple >
                    {allNv.map((itemnv) => (
                                    <option key={itemnv.id} value={itemnv.id}>
                                        {itemnv.name}
                                    </option>
                                ))}
                       
                    </select>
                    <div>
                        <label htmlFor="status">Điểm đón</label>
                        <div>
                            <select name="id" onClick={handlePickupChange}>
                                {alldiemdon.map((itemdiemdon) => (
                                    <option key={itemdiemdon.id} value={itemdiemdon.id}>
                                        {itemdiemdon.address}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="time"
                                name="pickup_time"
                                value={pickup.pickup_time}
                                onChange={handlePickupChange}
                            />

                            <p onClick={addPickup}>Add Pickup Point</p>
                        </div>
                        <ul>
                            {pickupPoints.map((point, index) => (
                                <li key={index}>
                                    ID: {point.id}, Time: {point.pickup_time}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <label htmlFor='status'>Điểm trả</label>
                        <div>
                            <select name="id" onClick={handleDropoffChange}>
                                {alldiemtra.map((itemdiemtra) => (
                                    <option key={itemdiemtra.id} value={itemdiemtra.id}>
                                        {itemdiemtra.address}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="time"
                                name="dropoff_time"
                                value={dropoff.dropoff_time}
                                onChange={handleDropoffChange}
                            />
                            <p  onClick={addDropoff}>Add Dropoff Point</p>
                        </div>
                        <ul>
                            {dropoffPoints.map((point, index) => (
                                <li key={index}>
                                    ID: {point.id}, Time: {point.dropoff_time}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <input type='hidden' name='nhà xe'  {...register('car_house_id')} value={1} />
                    <input type='hidden' name='loại xe '  {...register('car_type_id')}  />

                    <input type='submit' className='btnsb' value='Xác Nhận' />
                </form >
            </div >
        </>
    );
}