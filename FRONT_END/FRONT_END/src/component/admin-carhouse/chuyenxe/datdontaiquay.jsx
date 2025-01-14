import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
// import { CallapiGetAllDiemDonByCarHouse, CallapiGetAllDiemTraByCarHouse } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
// import { CallapiGetAllListCarofcarhouseid } from '../../../../redux/adminweb/admin-cartype/cartype-asynthunk';
// import { callApiListTuyenDuongAll } from '../../../../redux/info-bus/infobus-asynThunk';
// import { CallapiPostCxCarHouse } from '../../../../redux/adminweb/admin-cx-carhouse/Asynthunk-cx-carhouse';
// import { CallapiGetAllListnvlxcarhouseid } from '../../../../redux/adminweb/nhanvienlaixe/AsynThunk-nclx';
import { callApiSeatCarTripByCarTripId } from '../../../redux/info-bus/infobus-asynThunk';


export default function DatDonTaiQuayB2() {
        const { id } = useParams();
        const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(CallapiGetAllDiemTraByCarHouse(1))
        // dispatch(CallapiGetAllDiemDonByCarHouse(1))
        // dispatch(CallapiGetAllListCarofcarhouseid(1))
        // dispatch(callApiListTuyenDuongAll())
        // dispatch(CallapiGetAllListnvlxcarhouseid(1))
     
    dispatch(callApiSeatCarTripByCarTripId(id))
    }, [])
    // const alldiemdon = useSelector((state) => state.StoreDiemDonCarHouse?.datadiemdonofcarhouse);
    // const alldiemtra = useSelector((state) => state.StoreDiemTraCarHouse?.datadiemtraofcarhouse);
    // const allCar = useSelector((state) => state.StoreCar?.dataCarofcarhouseid);
    // // console.log("allcarr",allCar);
    // const allTuyenDuong = useSelector((state) => state.InfoofBus?.allTuyenDuong);
    // const isToastOk = useSelector((state) => state.ChuyenxeofCarHouse?.popupXacNhan);
    const infocx = useSelector((state) => state.SeatofCarid?.seatcartripbycartripid);
    console.log("xjfnvln",infocx);
    
 



    // const notify = (event) => {
    //     if (event == true) {
    //         toast.success("Thêm Xe Thành Công!", { theme: "colored" });
    //     } else if (event == false) {
    //         toast.error("Lỗi form nhập!", { theme: "colored" });
    //     }
    // }

    // // phan tao picup piont , drroff point 
    // const [pickupPoints, setPickupPoints] = useState([]);
    // const [dropoffPoints, setDropoffPoints] = useState([]);
    // const [pickup, setPickup] = useState({ id: "", pickup_time: "" });
    // const [dropoff, setDropoff] = useState({ id: "", dropoff_time: "" });
    // const [cartype,setCarType]= useState(0);
    // // const [allNvaray, setAllNv] = useState([]);
    // const handleCarChange = (event) => {
    //     const selectedCarId = event;
    //     console.log("selectedCarId",selectedCarId );
    //     setCarType(selectedCarId);
    // };
    // console.log(">>fvvvvvvvvvfvvvvvvvvv",allCar[cartype]?.car_type?.id);
    // ///phan thao tac form 

    // const { register, handleSubmit } = useForm();
    // const onSubmit = (data) => {
    //     console.log("data",data);
       
    //     const formData = new FormData();
    //     formData.append('car_id', data.car_id);
    //     formData.append('car_route_id', data.car_route_id);
    //     formData.append('departure_date', data.departure_date);
    //     formData.append('arrival_date', data.arrival_date);
    //     formData.append('return_date', data.return_date);
    //     formData.append('price', data.price);
    //     formData.append('status', data.status);
    //     formData.append('car_house_id', 1);
    //     formData.append('car_type_id',allCar[cartype]?.car_type?.id);
    //     pickupPoints.forEach((point, index) => {
    //         formData.append(`pickup_points[${index}][id]`, point.id);
    //         formData.append(`pickup_points[${index}][pickup_time]`, point.pickup_time);
    //     });
        
    //     dropoffPoints.forEach((point, index) => {
    //         formData.append(`dropoff_points[${index}][id]`, point.id);
    //         formData.append(`dropoff_points[${index}][dropoff_time]`, point.dropoff_time);
    //     });
    

    //     for (let pair of formData.entries()) {
    //         console.log(`${pair[0]}: ${pair[1]}`);
    //     }
    //     dispatch(CallapiPostCxCarHouse(formData));
    // };


    // const handlePickupChange = (e) => {
      
    //     e.preventDefault(); 
    //     setPickup({ ...pickup, [e.target.name]: e.target.value });
    // };

    // const handleDropoffChange = (e) => {
    //     e.preventDefault(); 
    //     setDropoff({ ...dropoff, [e.target.name]: e.target.value });
    // };




    // const addPickup = () => {
    //     if (pickup.id && pickup.pickup_time) {
    //         setPickupPoints([...pickupPoints, { id: parseInt(pickup.id), pickup_time: pickup.pickup_time }]);
    //         setPickup({ id: "", pickup_time: "" });
    //         console.log("pickupPoints",pickupPoints);
    //     }
    // };

    // const addDropoff = () => {
    //     if (dropoff.id && dropoff.dropoff_time) {
    //         setDropoffPoints([...dropoffPoints, { id: parseInt(dropoff.id), dropoff_time: dropoff.dropoff_time }]);
    //         setDropoff({ id: "", dropoff_time: "" });
    //     }
    // };
    // if (isToastOk === true) {
    //     notify(true);
    //     setTimeout(() => {
    //         navigate('/admincarhouse/quan-li-chuyen-xe');
    //     }, 2000);
    // }
    // if (isToastError) {
    //     notify(false);
    // }
   
    // onSubmit={handleSubmit(onSubmit)}
    return (
        <>  <ToastContainer />
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>TẠO ĐƠN TẠI QUẦY</h3>
            <div className='page-add-carhouse'>
                <form id='busForm'  encType="multipart/form-data">
                    <label htmlFor='carName'>User id</label>
                    <input type="number" />
                    <label htmlFor='name'>Người đặt </label>
                    <input type="text" />
                    <label htmlFor='phone'>Số điện thoại  </label>
                    <label htmlFor='email'>Email  </label>
                    <label htmlFor='car_trip_id'>Chọn xe</label>
                    <label htmlFor='seat_ids'>Chọn ghế</label>
                    <label htmlFor='car_trip_pickup_point_id'>Chọn điểm đón</label>
                    <label htmlFor='car_trip_dropoff_point_id'>Chọn điểm trả</label>

                    <input type='submit' className='btnsb' value='Thêm Đơn Hàng' />
                </form >
            </div >
        </>
    );
}
