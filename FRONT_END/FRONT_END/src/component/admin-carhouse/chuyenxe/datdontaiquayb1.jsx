// import css
import '../../css/quanLyDatVeXe.css';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { getSearchChuyenxecarhouseid } from '../../../redux/viewchuyenxe/viewcx-asynThunk';
import { callApiListTuyenDuongAll } from '../../../redux/info-bus/infobus-asynThunk';
// import { CallapiGetOneCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function DatDonTaiQuayB1() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callApiListTuyenDuongAll())
    }, []);
    const router = useSelector((state) => state.InfoofBus?.allTuyenDuong)

    const { register, handleSubmit, } = useForm();
    function onSubmit(data) {
        // console.log('datainform them cphn', data);
        dispatch(getSearchChuyenxecarhouseid(data));
    }
    const datacartriptheocarhouseid = useSelector((state) => state.ViewChuyenXeSearch?.datacartriptheocarhouseid)
    // console.log("datacartriptheocarhouseidgbbbbbbbbbbbb ", datacartriptheocarhouseid);
    const loaixe = useSelector((state) => state.Storecartype?.dataOneCarType)
    // console.log(loaixe);
    const seatcartripdata = useSelector((state) => state.SeatofCarid?.seatcartripbycartripid)
    // console.log("seatcartripdata", seatcartripdata);
   function datdontaiquay(id){
    navigate(`/admincarhouse/dat-don-tai-quay-b2/${id}`);
   }
    return (
        <>
            <div className='container quanLyDatVeXe'>
                {/* phần lõi */}
                <div className='dashboard-center'>
                    {/* phần đầu */}

                    <div className='qlnx'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='qlnx-group'>
                                <div className='qlnx-group__list'>
                                    <div className='qlnx-group__item'>
                                        <p className='qlnx-item__heading'>CHỌN CHUYẾN XE </p>

                                        <select name="" id=""  {...register('car_route_id')}>
                                            {Array.isArray(router) && router.length > 0 ? (
                                                router?.map((item) => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.city_from + '--' + item.city_to}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="">Không có thành phố </option> // Hiển thị nếu không có dữ liệu
                                            )}
                                        </select>
                                    </div>

                                    <div className='qlnx-group__item'>
                                        <p className='qlnx-item__heading'>Ngày khởi hành</p>

                                        <input type="date"  {...register('departure_date')} />

                                    </div>
                                    <input type='submit' value='Hiển Thị'></input>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='time-group'>
                        <div className='time-group__list'>
                            {datacartriptheocarhouseid?.map((item) => {
                                console.log("hello ");
                                return <>
                                    <div className='time-group__item' key={item.id}
                                        style={{ cursor: 'pointer' }}
                                        onClick={()=>{
                                            datdontaiquay(item.id);
                                        }}
                                        >
                                        <div className='time-group__heading'>{item?.pickup_points?.[0]?.pivot?.pickup_time.slice(0, 5)}</div>
                                        <div className='time-group__title'>123.45 - 10/10</div>
                                        <div className='time-group__progress-bar'>
                                            <div className='time-group__progress'></div>
                                        </div>
                                    </div>
                                </>
                            })}
                            </div>
                            </div>
                    </div>
                </div>
        </>
    );
}
