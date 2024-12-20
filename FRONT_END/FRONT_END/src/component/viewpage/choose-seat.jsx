import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import '../css/css-view-all-chuyen-xe/choose-seat.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { callApiSeatCarTripByCarTripId } from '../../redux/info-bus/infobus-asynThunk';
import SVG from './svg';


export default function ChooseSeat({ seat_car_id, itemallthongtincx }) {


    const allseatofcarid = useSelector((state) => state.SeatofCarid?.seatcarid);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callApiSeatCarTripByCarTripId(itemallthongtincx?.id))
    }, [])
    const seatcartripbycartripid = useSelector((state) => state.SeatofCarid?.seatcartripbycartripid);


    const [selectedDivs, setSelectedDivs] = useState(() => {
        const savedSeats = localStorage.getItem("dataSeat");
        return savedSeats ? JSON.parse(savedSeats) : [];
    });


    function selectSeat(id) {
        const seatSelect = document.getElementById(id);
        if (selectedDivs.includes(id)) {
            setSelectedDivs(selectedDivs.filter((item) => item !== id));
            if (seatSelect) seatSelect.classList.remove('dLgsTe');
        } else {
            // Nếu chưa chọn, thêm ghế vào danh sách đã chọn và thêm lớp CSS
            setSelectedDivs([...selectedDivs, id]);
            if (seatSelect) seatSelect.classList.add('dLgsTe');
        }
    }

    // Hiển thị ghế đã lưu từ localStorage khi component được mount
    useEffect(() => {
        selectedDivs.forEach((id) => {
            const seatSelect = document.getElementById(id);
            if (seatSelect) {
                seatSelect.classList.add('dLgsTe');
            }
        });
    }, []); // Chỉ chạy khi component mount

    // Lưu trạng thái vào localStorage mỗi khi selectedDivs thay đổi
    useEffect(() => {
        localStorage.setItem("dataSeat", JSON.stringify(selectedDivs));
    }, [selectedDivs]);


    ////////////////////////Hiển thị ghế chọn => tổng giá 
    // const [showSeat, setShowSeat] = useState([]);
    // const [totalprice, setTotalPrice] = useState(0);
    // function showselectseat(name, price) {

    //     if (showSeat.includes(name)) {
    //         setShowSeat(showSeat.filter((indexseat) => indexseat !== name));
    //         const a = totalprice - price
    //         setTotalPrice(a)
    //     } else {
    //         setShowSeat([...showSeat, name]);
    //         const b = totalprice + price
    //         setTotalPrice(b)
    //     }
    // }

    const [showSeat, setShowSeat] = useState(() => {
        const savedSeats = localStorage.getItem("showSeat");
        return savedSeats ? JSON.parse(savedSeats) : [];
    });

    const [totalprice, setTotalPrice] = useState(() => {
        const savedPrice = localStorage.getItem("totalPrice");
        return savedPrice ? JSON.parse(savedPrice) : 0;
    });



    function showselectseat(name, price) {
        if (showSeat.includes(name)) {
            setShowSeat(showSeat.filter((indexseat) => indexseat !== name));
            setTotalPrice((prevPrice) => prevPrice - price);
        } else {
            setShowSeat([...showSeat, name]);
            setTotalPrice((prevPrice) => prevPrice + price);
        }
    }

    // Lưu dữ liệu vào localStorage khi showSeat hoặc totalprice thay đổi
    useEffect(() => {
        localStorage.setItem("showSeat", JSON.stringify(showSeat));
        localStorage.setItem("totalPrice", JSON.stringify(totalprice));
    }, [showSeat, totalprice]);

    // khi thằng thông tin mount vào thì xóa 
    useEffect(() => {
        localStorage.removeItem("dataSeat");
        localStorage.removeItem("showSeat");
        localStorage.removeItem("totalPrice");
    }, []);


    return (
        <>
            <div className="note-go-bus-2">
                <VerifiedUserIcon sx={{ color: '#27AE60' }} />
                <p style={{ frontSize: '12px' }}>Vé xe cam kết giữ đúng chỗ bạn đã chọn.</p>
            </div>
            <div className="ds-giam-gia">
                <div className='coupon-info-route-page-container'>
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                            </div>
                            <div className='price-giam'>Giảm 10%</div>
                            <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                            <div className='hsd'>
                                HSD:<strong>T3, 10/9 14:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coupon-info-route-page-container' >
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                            </div>
                            <div className='price-giam'>Giảm 10%</div>
                            <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                            <div className='hsd'>
                                HSD:<strong>T3, 10/9 14:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coupon-info-route-page-container' >
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                            </div>
                            <div className='price-giam'>Giảm 10%</div>
                            <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                            <div className='hsd'>
                                HSD:<strong>T3, 10/9 14:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coupon-info-route-page-container' >
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                            </div>
                            <div className='price-giam'>Giảm 10%</div>
                            <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                            <div className='hsd'>
                                HSD:<strong>T3, 10/9 14:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coupon-info-route-page-container' >
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                            </div>
                            <div className='price-giam'>Giảm 10%</div>
                            <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                            <div className='hsd'>
                                HSD:<strong>T3, 10/9 14:00</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-choose-seat">
                <div className="seat-groups">
                    <div className="note">Chú thích</div>
                    <div className="seat-info">
                        <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 daMVvn seat-thumbnail" disabled="">
                           <SVG/>
                        </div>
                        <span className="seat-name">Ghế không bán</span>
                    </div>

                    <div className="seat-info">
                        <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 dLgsTe seat-thumbnail">
                        <SVG/>
                        </div>
                        <span className="seat-name">Đang chọn</span>
                    </div>
                    <div className="seat-info">
                        <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 ezApQI seat-thumbnail" color="#6bd600">
                        <SVG/>
                        </div>

                        <div className="seat-group">
                            <span className="seat-name">
                                <div className="seat-name-group">Ghế cuối</div>
                                <div className="seat-original"><strong>230,000đ</strong></div>
                            </span>
                        </div>
                    </div>

                    <div className="seat-info">
                        <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 vvWPx seat-thumbnail" color="#fba442">
                        <SVG/>
                        </div>
                        <div className="seat-group">
                            <span className="seat-name">
                                <div className="seat-name-group">Ghế giữa</div>
                                <div className="seat-original"><strong>250,000đ</strong></div>
                            </span>
                        </div>
                    </div>
                    <div className="seat-info">
                        <div className="SeatThumbnail__SeatContainer-sc-1ooosi9-0 lfCjCF seat-thumbnail" color="#ae70ff">
                        <SVG/>
                        </div>
                        <div className="seat-group">
                            <span className="seat-name">
                                <div className="seat-name-group">Ghế đầu</div>
                                <div className="seat-original"><strong>230,000đ</strong>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="xe-bus">
                    <div className="vo-lang">
                        <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <g>
                                <path d="M305.997,15.492C137.27,15.492,0,152.762,0,321.491c0,113.854,62.614,
                            217.611,163.405,270.782l8.03,4.235h269.128 l8.03-4.235C549.388,539.1,612,
                            435.342,612,321.491C612,152.762,474.728,15.492,305.997,15.492z M422.06,
                            523.185h-56.683 l-12.685-90.79c8.402-1.506,16.92-3.39,25.621-5.717c4.457-1.193,
                            8.147-4.325,10.048-8.531 c28.393-62.849,39.673-121.492,
                            35.5-184.551c-0.434-6.506-4.914-12.034-11.188-13.8c-36.504-10.263-71.395-15.256-106.673-15.256 c-35.275,
                            0-70.166,4.991-106.668,15.256c-6.276,1.766-10.756,7.292-11.19,13.8c-4.173,63.059,7.107,121.702,35.5,
                            184.551 c1.901,4.211,5.592,7.341,10.053,8.531c8.699,2.327,17.214,4.21,25.613,5.713l-12.685,
                            90.793h-56.68 c-50.277-28.956-87.083-74.878-104.794-128.357c30.705-4.391,61.43-7.865,
                            92.167-10.425 c-11.724-35.065-18.387-69.522-20.248-104.762c-30.498,6.999-59.386,
                            17.771-83.604,34.315 c3.993-124.822,106.763-225.14,232.538-225.14c125.788,0,
                            228.57,100.337,232.545,225.177c-2.404-1.649-4.952-3.26-7.66-4.819 c-23.126-13.318-49.007-22.5-75.983-28.826c-1.913,
                            34.98-8.561,69.203-20.201,104.023c30.738,2.552,61.469,6.016,92.177,10.399 C509.169,
                            448.276,472.355,494.221,422.06,523.185z"></path>
                            </g>
                            </g>
                        </svg>
                        {allseatofcarid[seat_car_id]?.filter((itemseat) => itemseat.location_seat == 0).map((itemseat) => {
                            const seatData = seatcartripbycartripid.find(item => item.seat_id === itemseat.id);
                            const isAvailable = seatData && seatData.is_available === 0;

                            return (
                                <div
                                    key={itemseat.id}
                                    className={`SeatThumbnail__SeatContainer-sc-1ooosi9-0 seat-thumbnail  ${isAvailable ? 'daMVvn' : 'lfCjCF'}`}
                                    id={itemseat.id}
                                    onClick={(e) => {  if (e.currentTarget.classList.contains('daMVvn')) {
                                        e.stopPropagation();
                                        return;
                                    } ;
                                    selectSeat(itemseat.id); showselectseat(itemseat.seat_number, itemseat.price) }}
                                    color="#ae70ff"
                                    value={itemseat}
                                >
                                    <Tooltip title={`${itemseat.seat_number}:${itemseat.price}`}>
                                    <SVG/>
                                    </Tooltip>
                                </div>
                            );
                        })}


                    </div>
                    <div className="hang-ghe-giua">
                    {allseatofcarid[seat_car_id]?.filter((itemseat) => itemseat.location_seat == 1).map((itemseat) => {
                            const seatData = seatcartripbycartripid.find(item => item.seat_id === itemseat.id);
                            const isAvailable = seatData && seatData.is_available === 0;

                            return (
                                <div
                                    key={itemseat.id}
                                    className={`SeatThumbnail__SeatContainer-sc-1ooosi9-0 seat-thumbnail  ${isAvailable ? 'daMVvn' : 'vvWPx'}`}
                                    id={itemseat.id}
                                    onClick={(e) => {  if (e.currentTarget.classList.contains('daMVvn')) {
                                        e.stopPropagation();
                                        return;
                                    } ;
                                    selectSeat(itemseat.id); showselectseat(itemseat.seat_number, itemseat.price) }}
                                    color="#ae70ff"
                                    value={itemseat}
                                >
                                    <Tooltip title={`${itemseat.seat_number}:${itemseat.price}`}>
                                    <SVG/>
                                    </Tooltip>
                                </div>
                            );
                        })}
                    </div>
                    <div className="hang-ghe-cuoi">
                    {allseatofcarid[seat_car_id]?.filter((itemseat) => itemseat.location_seat == 2).map((itemseat) => {
                        console.log("kfvbdbfb",itemseat);
                            const seatData = seatcartripbycartripid.find(item => item.seat_id === itemseat.id);
                            const isAvailable = seatData && seatData.is_available === 0;

                            return (
                                <div
                                    key={itemseat.id}
                                    className={`SeatThumbnail__SeatContainer-sc-1ooosi9-0 seat-thumbnail  ${isAvailable ? 'daMVvn' : 'ezApQI'}`}
                                    id={itemseat.id}
                                    onClick={(e) => {  if (e.currentTarget.classList.contains('daMVvn')) {
                                        e.stopPropagation();
                                        return;
                                    } ;
                                    selectSeat(itemseat.id); showselectseat(itemseat.seat_number, itemseat.price) }}
                                    color="#ae70ff"
                                    value={itemseat}
                                >
                                    <Tooltip title={`${itemseat?.seat_number}:${itemseat?.price}`}>
                                    <SVG/>
                                    </Tooltip>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="showghe-gia">
                <div className="show-ghe">
                    <h4>Số Ghế:</h4><div style={{ fontSize: '16px', color: 'rgb(0, 96, 196)', fontWeight: '600' }}>{showSeat.map((item, index) => {

                        if (index == showSeat.length - 1) {
                            return `${item}`
                        } else {
                            return `${item},`
                        }


                    })}</div>
                </div>
                <div className="showgia">
                    <h4>Tổng cộng:</h4> <div style={{ fontSize: '16px', color: 'rgb(0, 96, 196)', fontWeight: '600' }}>{totalprice}</div>
                </div>
            </div>

        </>
    )
}