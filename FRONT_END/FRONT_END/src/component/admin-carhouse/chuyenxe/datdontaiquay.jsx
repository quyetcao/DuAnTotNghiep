import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllseatcartripbycarid } from '../../../redux/info-bus/infobus-asynThunk';

import { callApiPostDonHang } from '../../../redux/thanhtoan/AsyncThunk_thanhtoan';
import { updateError } from '../../../redux/error/creaslice_error';


export default function DatDonTaiQuayB2() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllseatcartripbycarid(id))

        return () => {
            dispatch(updateError())
          };
    }, [])


    const listerror = useSelector((state) => state.Errormessage?.error);
    const isToastOk = useSelector((state) => state.MessageOk?.logOk);
    const isToastError  = useSelector((state) => state.MessageOk?.logErr);
    const infocx = useSelector((state) => state.InfoofBus?.dataseatcarid);
    // console.log("xjfnvln", infocx);





    const notify = (event) => {
        if (event == true) {
            toast.success("Thêm Xe Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Lỗi form nhập!", { theme: "colored" });
        }
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('user_id', data.user_id);
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        formData.append('car_trip_id', Number(infocx?.id));
        formData.append('car_trip_pickup_point_id', Number(data.car_trip_pickup_point_id));
        formData.append('car_trip_dropoff_point_id', Number(data.car_trip_dropoff_point_id));
        const seat_id=data.seat_ids;
        for (let i = 0; i < seat_id.length; i++) {
            formData.append('seat_ids[]', Number(seat_id[i]));
        }
      

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
          }
        dispatch(callApiPostDonHang(formData));
    };

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/admincarhouse/show-don-hang');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }
    return (
        <>  <ToastContainer />
            <h3 style={{ textAlign: 'center', marginTop: '40px' }}>TẠO ĐƠN TẠI QUẦY</h3>
            <div className='page-add-carhouse'>
                <form id='busForm' onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <label htmlFor='carName'>User id</label>
                    <input type="number" {...register('user_id')} />
                    {listerror?.message && <p className='add-error'>{listerror?.errors?.user_id?.[0]}</p>}
                    <label htmlFor='name'>Người đặt </label>
                    <input type="text" {...register('name')} />
                  
                    <label htmlFor='phone'>Số điện thoại  </label>
                    <input type="text" {...register('phone')} />
                  
                    <label htmlFor='email'>Email  </label>
                    <input type="email" {...register('email')} />
                
                    <label htmlFor='car_trip_id'>Chọn xe</label>
                    {infocx && infocx?.car?.id ? <input type='number' value={infocx?.id} {...register('car_trip_id')} /> : ''}
                    <label htmlFor='seat_ids'>Chọn ghế</label>
                    <select name="seat_ids" id="" {...register('seat_ids')} multiple>
                        {infocx &&
                            infocx?.seats?.map((item1) => {
                                console.log("<<<", item1);
                                const matchedSeat = infocx?.seat_car_trips?.find((item2) => item1.id === item2.seat_id);
                                if (matchedSeat) {
                                    return (
                                        <option key={item1.id} value={matchedSeat.seat_id}>
                                            {matchedSeat.seat_id} : {matchedSeat.is_available === 0 ? "Đã được đặt" : "Chưa được đặt"}
                                        </option>
                                    );
                                }
                                return null;
                            })}
                    </select>
                    {listerror?.message && <p className='add-error'>{listerror?.errors?.seat_ids?.[0]}</p>}

                    <label htmlFor='car_trip_pickup_point_id'>Chọn điểm đón</label>
                    <select name="" id="" {...register('car_trip_pickup_point_id')}>
                        {infocx && infocx?.pickup_points?.map((diemdon) => {
                            return <><option value={diemdon?.pivot?.id}>{diemdon?.address}</option></>
                        })}
                    </select>
                    {listerror?.message && <p className='add-error'>{listerror?.errors?.car_trip_pickup_point_id?.[0]}</p>}

                    <label htmlFor='car_trip_dropoff_point_id'>Chọn điểm trả</label>
                    <select name="" id="" {...register('car_trip_dropoff_point_id')}>
                        {infocx && infocx?.dropoff_points?.map((diemtra) => {
                            return <><option value={diemtra?.pivot?.id}>{diemtra?.address}</option></>
                        })}
                    </select>
                    {listerror?.message && <p className='add-error'>{listerror?.errors?.car_trip_dropoff_point_id?.[0]}</p>}

                    <input type='submit' className='btnsb' value='Thêm Đơn Hàng' />
                </form >
            </div >
        </>
    );
}
