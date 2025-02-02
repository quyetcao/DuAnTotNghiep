// import { Link, Slider } from '@mui/material';
import ScrollableTabsButtonVisible from './tab-ctcx';

// import mui icon
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import ChooseSeat from './tab-clickseat-choselocation.jsx';
// import HorizontalLinearStepper from './tab-clickseat-choselocation.jsx';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callApiGetCar, callApiGetCarHouse, callApiGetCarType, callApiSeatCarTripByCarTripId, callApiTuyenDuong, callAsbydropoffpoint, callAsbypickuppoint } from '../../redux/info-bus/infobus-asynThunk';
import HorizontalLinearStepper from './tab-clickseat-choselocation.jsx';

export default function DanhSachChuyenXe({ index, item, isActive, isActive1, onToggle, onClick }) {

    const infobus = useSelector((state) => state.InfoofBus?.infoBus[item?.car_id]);
    // console.log("infobuss", infobus);
    const infobushouse = useSelector((state) => state.InfoofBusHouse?.infoBusHouse[item?.car_id]);
    // console.log("infobussHouse", infobushouse);
    const carType = useSelector((state) => state.InfoofCarType?.cartype[item?.car_id]);
    // console.log("infocarType", carType);
    const diemdon = useSelector((state) => state.Infopickuppoint?.allpickuppoint[item?.car_id]);
    // console.log("diemdon", diemdon);
    const diemtra = useSelector((state) => state.Infodropoffpoint?.alldropoffpoint[item?.car_id]);
    // console.log("diemtra", diemtra);
    const tuyenduong = useSelector((state) => state.InfoofBus?.infoTuyenDuong.data);
    // console.log("tuyenduong", tuyenduong);

    // const infobus = useSelector((state) => state.InfoofBus?.infoBus); lấy toàn bộ 
    // console.log("infobuss", infobus);Infodropoffpoint,Infopickuppoint


    const dispatch = useDispatch();
    useEffect(() => {
        // call tuyến đường 
        dispatch(callApiTuyenDuong(item?.car_route_id));
    }, [])

    useEffect(() => {
        if (item?.car_id) {
            dispatch(callApiGetCar(item.car_id));
        }
    }, [item?.car_id]);

    useEffect(() => {
        if (infobus && item?.car_id) {
            // Call nhà xe
            dispatch(callApiGetCarHouse(infobus?.car_house_id, item?.car_id));
            // Call loại xe
            dispatch(callApiGetCarType(infobus?.car_type_id, item?.car_id));
            // // Call thời gian điểm đón
            // dispatch(callAsbypickuppoint(item?.id, item?.car_id));
            // // Call thời gian điểm đến
            // dispatch(callAsbydropoffpoint(item?.id, item?.car_id));
        }
    }, [infobus, item?.car_id]);

    function SplitChu(diadiem) {
        if (diadiem) {
            if (diadiem.startsWith('Thành phố')) {
                return diadiem.substring(10);
            } else if (diadiem.startsWith('Tỉnh')) {
                return diadiem.substring(4);
            }
        }
        return diadiem;
    }

    function calculateTimeDifference(startTime, endTime) {
        // Tách giờ, phút và giây từ chuỗi thời gian
        const [startHour, startMinute, startSecond] = startTime.split(':').map(Number);
        const [endHour, endMinute, endSecond] = endTime.split(':').map(Number);

        // Chuyển đổi tất cả thành tổng giây
        const startTotalSeconds = startHour * 3600 + startMinute * 60 + startSecond;
        const endTotalSeconds = endHour * 3600 + endMinute * 60 + endSecond;

        // Tính khoảng cách giây
        let diffSeconds = endTotalSeconds - startTotalSeconds;

        // Trường hợp qua ngày (end nhỏ hơn start)
        if (diffSeconds < 0) {
            diffSeconds += 24 * 3600; // Thêm 24 giờ
        }

        // Chuyển đổi giây thành giờ, phút, giây
        const hours = Math.floor(diffSeconds / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);


        return `${hours}h${minutes}m`;
    }
    ////// thao tác với số ghế tính tổng số ghế còn lại.
    useEffect(() => {
        dispatch(callApiSeatCarTripByCarTripId(28))
    }, [])
    // const seatcartripbycartripid = useSelector((state) => state.SeatofCarid?.seatcartripbycartripid);

    //     const total = seatcartripbycartripid 
    //     ? seatcartripbycartripid?.filter((item) => item.is_available !== 0) // Lọc những item không có is_available === 0
    //         .reduce((sum, item) => sum + item.is_available, 0) // Cộng dồn giá trị is_available
    //     : 0; // Nếu mảng không tồn tại, trả về 0
    

    return (
        <div className='ttcx-container'>
            <div className='ticker'>
                <div className='ticket-header'>
                    <div className='Note__Notification-d5rnha-0 hFIllo ticket-note '>
                        <div className='notification-tag'>
                            <span>Thông báo</span>
                        </div>
                        <div className='link'>CHÍNH SÁCH NHÀ XE</div>
                    </div>
                </div>
                <div className='ticker-container'>
                    <div className='img-dai-dien-cx'>
                        <div className='confim-ticker'>
                            <svg
                                className='TicketPC__ConfirmSVG-sc-1mxgwjh-5 kwcYbw'
                                width='14'
                                height='12'
                                viewBox='0 0 14 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M13.666 2v2.667c-.733 0-1.333.6-1.333 1.333 0 .734.6 1.334 1.333 1.334V10c0 .734-.6 1.334-1.333 1.334H1.666c-.733 0-1.333-.6-1.333-1.334V7.334a1.333 1.333 0 0 0 .006-2.667V2C.34 1.26.933.667 1.666.667h10.667c.733 0 1.333.593 1.333 1.333zM6.391 8.965c-.016.125.07.235.182.235a.18.18 0 0 0 .16-.103l.244-.475c.301-.586.832-1.619 1.595-3.098.07-.167 0-.235-.128-.235H7.322l.287-2.254c.016-.125-.07-.235-.182-.235a.183.183 0 0 0-.16.103l-.972 1.899c-.337.657-.616 1.2-.835 1.632l-.001.002c-.016.025-.173.275.1.275h1.12L6.39 8.965z'
                                    fill='#fff'
                                ></path>
                            </svg>
                            <span>Xác nhận tức thì</span>
                            <div className='point'></div>
                        </div>

                        <div className='img-anh'>
                            <img src='../../images/img_page_viewchuyenxe/1690435601693 (1).jpeg' alt='' />
                        </div>
                        <div className='img-baner'>
                            <img src='../../images/img_page_viewchuyenxe/banner_vi.png' alt='' />
                        </div>
                    </div>

                    <div className='TicketPC__RightBody-sc-1mxgwjh-3 iTDXJa'>
                        <div className='TicketPC__TripInfo-sc-1mxgwjh-6 kERmQy'>
                            <div className='bus-info'>
                                <div>
                                    <div className='bus-name'>{infobushouse?.name}</div>
                                    <button type='button' className='ant-btn bus-rating-button'>
                                        <div className='bus-rating'>
                                            {/* className='anticon anticon-star' */}
                                            <StarOutlinedIcon style={{ fontSize: '16px' }} />
                                            <span>4.6 (824)</span>
                                        </div>
                                    </button>
                                </div>
                                <div className='fare'>
                                    <div>Từ {(item?.price).toLocaleString('de-DE')}đ</div>
                                </div>
                            </div>
                            <div className='seat-type'>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {carType?.name}
                                    <div className='Sponsored__Container-sc-17s1or6-0 iGbCVp'>
                                        <div className='icon'>

                                        </div>
                                        <p className='headline-text'>Tài trợ</p>
                                    </div>
                                </div>
                                <div className='coupon'>
                                    <div className='Coupon__Container-sc-159f9jm-0 kfeBLa'>Giảm 50%</div>
                                </div>
                            </div>
                            <div className='from-to'>
                                <div style={{ display: 'flex' }}>
                                    <svg
                                        className='TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='14'
                                        height='74'
                                        viewBox='0 0 14 74'
                                    >
                                        <path fill='none' stroke='#787878' d='M7 13.5v46'></path>
                                        <g fill='none' stroke='#484848'>
                                            <circle cx='7' cy='7' r='7' stroke='none'></circle>
                                            <circle cx='7' cy='7' r='5.5'></circle>
                                        </g>
                                        <path
                                            d='M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z'
                                            fill='#787878'
                                        ></path>
                                    </svg>
                                    <div className='from-to-content1'>
                                        <div className='content-cx from'>
                                            <div className='hour'>{diemdon?.[0]?.pickup_time.substring(0, 5)}</div>
                                            <div className='place'>•{SplitChu(tuyenduong?.city_from)}</div>
                                        </div>
                                        <div className='duration'>{calculateTimeDifference(item?.pickup_points[0]?.pivot?.pickup_time, item?.dropoff_points[0]?.pivot?.dropoff_time)}</div>
                                        <div className='content-cx to'>
                                            <div className='content-to-info1 '>
                                                <div className='hour'>{diemtra?.[diemtra?.length - 1]?.dropoff_time.substring(0, 5)}</div>
                                                <div className='place'>•{SplitChu(tuyenduong?.city_to)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='TicketPC__DetailAndAction-sc-1mxgwjh-8 TVXtN'>
                                    <div className='info'>
                                        <div className='seat-available '>Còn  ghế</div>
                                    </div>
                                    <div className='action'>
                                        <button
                                            type='button'
                                            onClick={onToggle}
                                            className='ant-btn btn-detail ant-btn-link'
                                            style={{ zIndex: 1 }}
                                        >
                                            {isActive ? <span className='ant-btn-link__link'>Ẩn Thông tin chi tiết</span> : <span className='ant-btn-link__link'> Thông tin chi tiết</span>}
                                            <ArrowDropDownOutlinedIcon className='ArrowDropDownOutlinedIcon' />
                                        </button>
                                        <button
                                            data-tracking-event='selected_route'
                                            type='button'
                                            onClick={onClick}
                                            className='ant-btn btn-booking '
                                        >
                                            {isActive1 ? <span>Ẩn chuyến</span> : <span>Chọn chuyến</span>}

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isActive &&
                <div className='thong-tin-chi-tiet'>
                    <div className='tt-ct-tung-chuyen-xe'>
                        <ScrollableTabsButtonVisible index={index} car_id={item.car_id} itemcx={item} infobus={infobus} />
                    </div>
                </div>
            }
            {isActive1 &&
                <div className='set-chair'>
                    <div className='tt-ct-seat-tung-chuyen-xe'>
                        <HorizontalLinearStepper index={index} car_id={item.car_id} itemallthongtincx={item} />
                    </div>
                </div>
            }
        </div>
    );
}
