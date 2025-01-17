// import css
import '../../css/quanLyDatVeXe.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { getSearchChuyenxecarhouseid } from '../../../redux/viewchuyenxe/viewcx-asynThunk';
import { callApiListTuyenDuongAll, callApiSeatCarTripByCarTripId } from '../../../redux/info-bus/infobus-asynThunk';
import { CallapiGetOneCarType } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
// import { useNavigate } from 'react-router-dom';

export default function QuanLyDatVeXe() {

    const [selectedTrip, setSelectedTrip] = useState(1);
    const [idloaixe, setidloaixe] = useState(0);
    const [seatcartrip, setseatcartrip] = useState(null);
    console.log("selectedTrip", selectedTrip);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callApiListTuyenDuongAll())
    }, []);
    const router = useSelector((state) => state.InfoofBus?.allTuyenDuong)

    const { register, handleSubmit, } = useForm();
    // const handleSubmitSearch = () => {
    //     handleSubmit(onSubmit)();
    // };

    function onSubmit(data) {
        console.log('datainform them cphn', data);
        dispatch(getSearchChuyenxecarhouseid(data));
    }


    const datacartriptheocarhouseid = useSelector((state) => state.ViewChuyenXeSearch?.datacartriptheocarhouseid)
    console.log("datacartriptheocarhouseidgbbbbbbbbbbbb ", datacartriptheocarhouseid);


    // tìm loại xe 
    useEffect(() => {
        dispatch(CallapiGetOneCarType(idloaixe))
    }, [idloaixe])

    const loaixe = useSelector((state) => state.Storecartype?.dataOneCarType)
    console.log(loaixe);

    // lấy ghế theo chuyến xe 
    useEffect(() => {
        dispatch(callApiSeatCarTripByCarTripId(seatcartrip))
    }, [seatcartrip])
    const seatcartripdata = useSelector((state) => state.SeatofCarid?.seatcartripbycartripid)
    console.log("seatcartripdata", seatcartripdata);

    let ghedat = 0;
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
                                        <p className='qlnx-item__heading'>Tuyến Đường </p>

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
                            {datacartriptheocarhouseid?.map((item, index) => {
                                return <>
                                    <div className='time-group__item' key={item.id}
                                        onClick={() => {
                                            setSelectedTrip(index);
                                            setidloaixe(item.car.car_type_id);
                                            setseatcartrip(item.id)
                                        }}
                                        style={{ cursor: 'pointer' }}>
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


                    {/* Phần giữa */}
                    <div className='trip-info'>
                        <div className='trip-header'>
                            {selectedTrip !== undefined && selectedTrip !== null && (
                                <span>
                                    Thuộc chuyến <strong>{datacartriptheocarhouseid[selectedTrip]?.pickup_points?.[0]?.pivot?.pickup_time.slice(0, 5)}</strong> ngày <strong>{datacartriptheocarhouseid[selectedTrip]?.departure_date}</strong> tuyến{' '}
                                    <strong>{datacartriptheocarhouseid[selectedTrip]?.car_route?.city_from + ' đến ' + datacartriptheocarhouseid[selectedTrip]?.car_route?.city_to}</strong>
                                </span>

                            )}
                        </div>
                        <div className='trip-content'>
                            <div className='trip-details'>
                                <div className='info-header'>
                                    <strong>Thông tin chuyến</strong>
                                    <a href='#' className='update-info-link'>
                                        Cập nhật thông tin
                                    </a>
                                </div>
                                {selectedTrip !== undefined && selectedTrip !== null && (
                                    <span>
                                        <div className='trip-info__row'>
                                            <div className='trip-info__item'>
                                                <span className='info-label'>Loại xe:</span>
                                                <span>{loaixe?.name}</span>
                                            </div>
                                            <div className='trip-info__item'>
                                                <span className='info-label'>Tài xế:</span>
                                                <div className='info-value'>
                                                    {datacartriptheocarhouseid[selectedTrip]?.employees?.map((itemtx) => {
                                                        return <>
                                                            <span>
                                                                {itemtx?.name}(<a>{itemtx.phone}</a>)
                                                            </span>  <br />
                                                        </>
                                                    })
                                                    }
                                                </div>
                                            </div>
                                            <div className='trip-info__item'>
                                                <span className='info-label'>Phụ xe:</span>
                                                <div className='info-value'>
                                                    <span>
                                                        Không có
                                                    </span>
                                                    <br />
                                                    <span>
                                                        Không có
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </span>

                                )}

                                <div className='trip-info__row'>
                                    {selectedTrip !== undefined && selectedTrip !== null && (

                                        <div className='trip-info__item'>
                                            <div>
                                                <span className='info-label'>Biển Số xe:</span>
                                                <span href='#' className='vehicle-link'>
                                                    <strong>{datacartriptheocarhouseid[selectedTrip]?.car?.license_plate}</strong>{' '}
                                                </span>
                                            </div>
                                            <br />

                                            <p className='' style={{ margin: 'left' }}>
                                                Tên xe: {datacartriptheocarhouseid[selectedTrip]?.car?.name}
                                            </p>

                                        </div>
                                    )}

                                </div>
                                <div className='trip-info__item'>
                                    <span className='info-label'>Ghi chú:</span>
                                    <span>
                                        Đây là text nhập cho phần ghi chú, nhập thêm ghi chú cho dài thật dài thêm dài
                                        thêm dài thêm dài thêm dài thêm dài dài dài
                                    </span>
                                </div>
                            </div>
                            <div className='trip-stats'>
                                <div className='stats-header'>
                                    <strong>Thống kê chuyến</strong>
                                    <a href='#' className='stats-link'>
                                        <NavigateNextIcon />
                                    </a>
                                </div>
                                <div className='stats-progress'>
                                    <div className='progress-bar'>
                                        <div className='paid' style={{ width: '50%' }}></div>
                                        <div className='reserved' style={{ width: '25%' }}></div>
                                    </div>
                                    <div className='stats-info'>
                                        <span>
                                            <strong>30</strong>/40 (<strong>75%</strong>)
                                        </span>
                                    </div>
                                </div>
                                <div className='stats-details'>
                                    {selectedTrip !== undefined && selectedTrip !== null && (
                                        <div className='trip-info__item'>
                                            <div>
                                                <span className='label stats-details__pay'>Số Chỗ:</span>{' '}
                                                <strong>{datacartriptheocarhouseid[selectedTrip]?.seats.length}</strong> vé
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <span className='label stats-details__datcho'>Đặt chỗ:</span>{' '}
                                        <strong> {ghedat}</strong> vé 
                                    </div>
                                    <div>
                                        <span className='label stats-details__trong'>Trống:</span> <strong>{datacartriptheocarhouseid[selectedTrip]?.seats.length - ghedat}</strong>{' '}
                                        vé
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='button-group'>
                            <div className='button-group__left'>
                                <div className='group-left-list'>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>In phơi</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>Làm mới</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>Đón - trả</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>T/chuyển</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button
                                            className='group-item__btn group-left-item__btn'
                                            style={{ color: '#f66' }}
                                        >
                                            Xuất bến
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-group__right'>
                                <div className='group-left-list'>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Thống kê</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Thống kê mới</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Vé không đi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* phần cuối */}
                    {/* <div className='group-center'>
                        <div className='admin'>
                            <div className='admin-list'>
                                <div className='admin-item admin-item-bg1'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item admin-item-bg2'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
