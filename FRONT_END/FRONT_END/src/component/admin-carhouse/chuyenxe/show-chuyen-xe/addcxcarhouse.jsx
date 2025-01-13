import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CallapiGetAllDiemDonByCarHouse, CallapiGetAllDiemTraByCarHouse } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
import { CallapiGetAllListCarofcarhouseid } from '../../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { callApiListTuyenDuongAll } from '../../../../redux/info-bus/infobus-asynThunk';
import { CallapiPostCxCarHouse } from '../../../../redux/adminweb/admin-cx-carhouse/Asynthunk-cx-carhouse';
import { CallapiGetAllListnvlxcarhouseid } from '../../../../redux/adminweb/nhanvienlaixe/AsynThunk-nclx';


export default function AddChuyenXebyCarHouse() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllDiemTraByCarHouse(1))
        dispatch(CallapiGetAllDiemDonByCarHouse(1))
        dispatch(CallapiGetAllListCarofcarhouseid(1))
        dispatch(callApiListTuyenDuongAll())
        dispatch(CallapiGetAllListnvlxcarhouseid(1))
    }, [])
    const alldiemdon = useSelector((state) => state.StoreDiemDonCarHouse?.datadiemdonofcarhouse);
    const alldiemtra = useSelector((state) => state.StoreDiemTraCarHouse?.datadiemtraofcarhouse);
    const allCar = useSelector((state) => state.StoreCar?.dataCarofcarhouseid);
    // console.log("allcarr",allCar);
    const allTuyenDuong = useSelector((state) => state.InfoofBus?.allTuyenDuong);
    const isToastOk = useSelector((state) => state.ChuyenxeofCarHouse?.popupXacNhan);
    const isToastError = useSelector((state) => state.ChuyenxeofCarHouse?.popupError);
    
 



    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Xe Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    // phan tao picup piont , drroff point 
    const [pickupPoints, setPickupPoints] = useState([]);
    const [dropoffPoints, setDropoffPoints] = useState([]);
    const [pickup, setPickup] = useState({ id: "", pickup_time: "" });
    const [dropoff, setDropoff] = useState({ id: "", dropoff_time: "" });
    const [cartype,setCarType]= useState(0);
    // const [allNvaray, setAllNv] = useState([]);
    const handleCarChange = (event) => {
        const selectedCarId = event;
        console.log("selectedCarId",selectedCarId );
        setCarType(selectedCarId);
    };
    console.log(">>fvvvvvvvvvfvvvvvvvvv",allCar[cartype]?.car_type?.id);
    ///phan thao tac form 

    const { register, handleSubmit } = useForm();
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
        formData.append('car_house_id', 1);
        formData.append('car_type_id',allCar[cartype]?.car_type?.id);
        pickupPoints.forEach((point, index) => {
            formData.append(`pickup_points[${index}][id]`, point.id);
            formData.append(`pickup_points[${index}][pickup_time]`, point.pickup_time);
        });
        
        dropoffPoints.forEach((point, index) => {
            formData.append(`dropoff_points[${index}][id]`, point.id);
            formData.append(`dropoff_points[${index}][dropoff_time]`, point.dropoff_time);
        });
    

        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
        dispatch(CallapiPostCxCarHouse(formData));
    };


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
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>THÊM CHUYẾN XE </h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor='carName'>Tên xe</label>
                    <select type='number' id='car_id' {...register('car_id')}   onChange={(event) => handleCarChange(event.target.selectedIndex)} placeholder='Tên xe'>
                        {allCar && allCar.map((itemcar) => {
                          return <><option value={itemcar.id}>{itemcar.name}</option></>  
                        })
                        }
                    </select>
                    <label htmlFor='car_route_id'>Tuyến Đường</label>
                    <select type='number' id='car_route_id' {...register('car_route_id')} >
                    {allTuyenDuong && allTuyenDuong?.data?.map((itemtd) => {
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
                    <div>
                        <label htmlFor="status">Điểm đón</label>
                        <div>
                            <select name="id" onClick={handlePickupChange}>
                                {alldiemdon?.data?.map((itemdiemdon) => (
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
                                {alldiemtra?.data?.map((itemdiemtra) => (
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

                    <input type='submit' className='btnsb' value='Thêm Xe' />
                </form >
            </div >
        </>
    );
}
