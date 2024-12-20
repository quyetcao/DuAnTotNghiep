import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
// import ErrorIcon from '@mui/icons-material/Error';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import PaidIcon from '@mui/icons-material/Paid';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import WarningIcon from '@mui/icons-material/Warning';
import { useForm } from 'react-hook-form';

import '../css/thanhtoanlan1.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChuyenxebyid } from '../../redux/viewchuyenxe/viewcx-asynThunk';
import { callApiPostDonHang } from '../../redux/thanhtoan/AsyncThunk_thanhtoan';

export default function ThanhToanLanMot() {
    const { car_trip_id } = useParams();
    console.log('car_trip_id', car_trip_id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChuyenxebyid(car_trip_id));
    }, []);

    const data_car_trip = useSelector((state) => state.ViewChuyenXeSearch.datacartriptheoid);
    
    const user  = useSelector((state) => state.LoginLogOutRegister?.infoUser);
    console.log('use',user.id);
    const dalogin = useSelector((state) => state.LoginLogOutRegister?.isAuthentication);
    console.log('data_car_trip', data_car_trip);

    // lay localstorage


    const dataSeat = JSON.parse(localStorage.getItem("dataSeat"));
    const showSeat = localStorage.getItem("showSeat");
    const totalPrice = localStorage.getItem("totalPrice");
    console.log("dataSeat", Array.isArray(dataSeat));
    console.log("showSeat", showSeat);
    console.log("totalPrice", totalPrice);
    const setdiemdon = JSON.parse(localStorage.getItem("setdiemdon"));
    const setdiemtra = JSON.parse(localStorage.getItem("setdiemtra"));
    /// xuwr lys dâta
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}`;
    };
    /// thao tác form
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        formData.append('car_trip_id', car_trip_id);
        formData.append('car_trip_pickup_point_id', setdiemdon );  // Chuyển thành số
        formData.append('car_trip_dropoff_point_id', setdiemtra ); // Chuyển thành số

        dataSeat.forEach((seat) => {
            formData.append('seat_ids[]', seat);
        });

        // const user_id = 24;
        formData.append('user_id', user.id);
        for (let pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }
        dispatch(callApiPostDonHang(formData))
        navigate('/thanhtoan', { state: data });
    }

    const pickupPoint = data_car_trip?.pickup_points?.find(
        (point) => point.id == setdiemtra
    );
    const pickupName = pickupPoint?.name || "Tên không tồn tại";
    const pickupAdress = pickupPoint?.address || "Địa chỉ không tồn tại";
    const pickuptime = pickupPoint?.pivot?.pickup_time || "Giờ không tồn tại";
    
    // Lấy thông tin điểm trả
    const dropoffPoint = data_car_trip?.dropoff_points?.find(
        (point) => point.id == setdiemdon
    );
    const dropoffName = dropoffPoint?.name || "Tên không tồn tại";
    const dropoffAdress = dropoffPoint?.address || "Địa chỉ không tồn tại";
    const dropoffTime = dropoffPoint?.pivot?.dropoff_time || "Giờ không tồn tại";



    return (
        <> 
        { dalogin ? 
            <form className='form-inp-lan1' onSubmit={handleSubmit(onSubmit)}>
                <div className='body-container'>
                    <div className='payment'>
                        <div className='payment-page'>
                            <div className='wrap-top'>
                                <div className='wrap-top1'>
                                    <div className='wrap-top__icon'>
                                        <ArrowBackIcon />
                                    </div>
                                    <div className='wrap-top__left'>
                                        <div className='left-box'>
                                            <div className='left-box__title'>Cửa Ông Limousine</div>
                                            <span className='left-box__text'>
                                                <strong>11:00</strong>
                                                <span className='wrap-top__left-icon'>
                                                    <FiberManualRecordIcon />
                                                </span>
                                                Tue, 02/11/2024
                                            </span>
                                        </div>
                                    </div>
                                    <div className='wrap-top__right'>
                                        <a href=''>Chi tiết</a>
                                    </div>
                                </div>
                                <div className='wrap-top2'>
                                    <div className='wrap-top2__left'>
                                        <div className='wrap-top2__span'>
                                            <CheckCircleOutlineOutlinedIcon />
                                        </div>
                                        <div className='wrap-top2__text'>Xác nhận hành trình</div>
                                    </div>
                                    <div className='wrap-top2__right'>
                                        <div className='wrap-top2__border'></div>
                                        <div className='wrap-top2__circle'>10</div>
                                        <div className='wrap-top2__text'>Thanh toán</div>
                                    </div>
                                </div>
                            </div>
                            <div className='payments-security'>
                                <span className='payments-security__icon'>
                                    <GppGoodOutlinedIcon fontSize='small' />
                                </span>
                                <span className='payments-security__title'>
                                    Nhiều cách thanh toán, bảo mật tuyệt đối
                                </span>
                            </div>
                            <div className='wrap-left'>
                                <div className='payment-method'>
                                    <p className='method-heading'>Thông tin liên hệ</p>
                                    <div className='group-payment'>
                                        <div className='payment-item border-bottom'>
                                            <div className='form-input-thanhtoanlan1'>
                                                <div className='group-inp-lan1'>
                                                    <div className='box-lan1'>
                                                        <input
                                                            type='text'
                                                            placeholder='Tên người đi'
                                                            {...register('name', {
                                                                required: 'Vui lòng nhập thông tin!',
                                                            })}
                                                        />
                                                    </div>
                                                    {errors.name && (
                                                        <p className='message-error'>{errors.name.message}</p>
                                                    )}
                                                    <div className='box-lan1 zzzz'>
                                                        <input
                                                            type='text'
                                                            placeholder='Số điện thoại'
                                                            {...register('phone', {
                                                                required: 'Vui lòng nhập thông tin',
                                                                pattern: {
                                                                    value: /^0\d{9}$/,
                                                                    message:
                                                                        'Vui lòng nhập đúng định dạng số điện thoại (10 số, bắt đầu bằng 0)',
                                                                },
                                                            })}
                                                        />
                                                    </div>
                                                    {errors.phone && (
                                                        <p className='message-error'>{errors.phone.message}</p>
                                                    )}

                                                    <div className='box-lan1 zzzz'>
                                                        <input
                                                            type='email'
                                                            placeholder='Email để nhận thông tin đặt chỗ'
                                                            {...register('email', {
                                                                required: 'Vui lòng nhập email',
                                                                pattern: {
                                                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                                    message: 'Vui lòng nhập đúng định dạng email',
                                                                },
                                                            })}
                                                        />
                                                    </div>
                                                    {errors.email && (
                                                        <p className='message-error'>{errors.email.message}</p>
                                                    )}

                                                    <div className='box-lan1 border-message'>
                                                        <div className='message-content'>
                                                            <span className='message-svg'>
                                                                <GppGoodIcon />
                                                            </span>
                                                            <p className='thanhtoan-heading'>
                                                                Số điện thoại và email được sử dụng để gửi thông tin đơn
                                                                hàng và liên hệ khi cần thiết.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='payment-method bottom__20'>
                                    <p className='method-heading'>Tiện ích</p>
                                    <div className='group-payment'>
                                        <div className='payment-item border-bottom'>
                                            <div className='extension'>
                                                <div className='extension-top'>
                                                    <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/icon_protect_trip.svg' />
                                                    <span className='extension-title'>
                                                        <strong>Bảo hiểm chuyến đi</strong> (+20.000đ/ghế)
                                                    </span>
                                                </div>
                                                <span className='extension-text'>
                                                    Được bồi thường lên đến 400.000.000đ/ghế.
                                                </span>
                                                <div className='extension-text-img'>
                                                    <span className='extension-text'>Cung cấp bởi</span>
                                                    <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/baoviet.svg'></img>
                                                    <span className='khoangcach'>x</span>
                                                    <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/icon_saladin.svg'></img>
                                                </div>
                                            </div>
                                            <div className='baohiem-page'>
                                                <div className='group-baohiem'>
                                                    <div className='item-baohiem mar-4'>
                                                        <h4 className='baohiem-title'>Bảo hiểm tai nạn</h4>
                                                        <span className='baohiem-text'>
                                                            Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai
                                                            nạn.
                                                        </span>
                                                    </div>
                                                    <div className='item-baohiem'>
                                                        <h4 className='baohiem-title'>Bảo hiểm hủy chuyến</h4>
                                                        <span className='baohiem-text'>
                                                            Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lí do
                                                            khách quan hoặc bất khả kháng về sức khỏe.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='footer-baohiem'>
                                                    <span className='ft-baohiem-text'>
                                                        Bồi thường trực tuyến nhanh chóng, dễ dàng
                                                    </span>
                                                    <span>
                                                        <a href='' className='ft-baohiem-link'>
                                                            Chi tiết
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wrap-right'>
                                <div className='cart-summary'>
                                    <div className='cart-item'>
                                        <span className='cart-heading'>Tạm tính</span>
                                        <div className='cart-box'>
                                            <span className='cart-price'>{totalPrice}đ</span>
                                            <img
                                                className='icon-expand-more '
                                                data-src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/expand_more.svg'
                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/expand_more.svg'
                                                alt='icon-expand-more'
                                                width='20'
                                                height='20'
                                            />
                                        </div>
                                    </div>
                                    <div className='cart-item'>
                                        <div className='cart-detail'>
                                            <p className='cart-text'>Giá vé</p>
                                            <div>
                                                {data_car_trip?.seats
                                                    ?.filter((itemseat) => dataSeat?.includes(itemseat.id))
                                                    ?.map((itemseat) => (
                                                        <div
                                                            className='cart-info'
                                                            key={itemseat.id}
                                                            style={{ textAlign: 'right' }}
                                                        >
                                                            <p className='cart-text text-price'>
                                                                {itemseat.price}đ x 1
                                                            </p>
                                                            <p className='cart-text'>
                                                                Mã ghế/giường: {itemseat.seat_number}
                                                            </p>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='cart-thong-tin-chuyen-di'>
                                    <div className='cart-item'>
                                        <span className='cart-heading'>Thông tin chuyến đi</span>
                                    </div>
                                    <div className='cart-tt-detail'>
                                        <div className='section-ticket-header pointer'>
                                            <div className='section-ticket-header-left'>
                                                <img
                                                    className='bus-blue-icon ls-is-cached lazyloaded'
                                                    data-src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/bus_blue_24dp.svg'
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/bus_blue_24dp.svg'
                                                    alt='bus_blue_icon'
                                                    width='16'
                                                    height='16'
                                                />
                                                <p className='section-ticket-header-left__title'>
                                                    {data_car_trip && data_car_trip?.arrival_date}
                                                </p>
                                                <div className='total-ticket'>
                                                    <img
                                                        className='people-icon ls-is-cached lazyloaded'
                                                        data-src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/people_alt_black_24dp.svg'
                                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/people_alt_black_24dp.svg'
                                                        alt='people_alt_black_icon'
                                                        width='16'
                                                        height='16'
                                                    />
                                                    <p className='section-ticket-header-left__title total-ticket__text'>
                                                        {dataSeat?.length}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='base__Button02-sc-1tvbuqk-37 bVQrWf color--vex-blue text--underline'>
                                                    Chi tiết
                                                </p>
                                            </div>
                                        </div>
                                        <div className='section-ticket-content'>
                                            <div className='section-ticket-company-info pointer'>
                                                <div>
                                                    <img
                                                        src='https://static.vexere.com/production/images/1620363223951.jpeg'
                                                        alt='avatar'
                                                        className='BoxReviewInfoTicketRoundTrip__ImageStyled-as8crw-1 beAglg'
                                                    />
                                                </div>
                                                <div className='section-ticket-company-info-name'>
                                                    <p className='base__Headline03-sc-1tvbuqk-15 boemqK'>
                                                        {data_car_trip && data_car_trip?.car?.name}
                                                    </p>
                                                    <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb'>
                                                        {data_car_trip && data_car_trip?.car?.car_type.name}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='BoxReviewInfoTicketRoundTrip__BoxTicketRouteDetailContainer-as8crw-2 evVLoJ'>
                                                <div className='section-route-info'>
                                                    <div className='AreaPointDetailRoundTrip__Container-sc-1wmtowp-0 dlwjtp'>
                                                        <div className='area-point-container pointer'>
                                                            <div className='date-time-container'>
                                                                <div className='date-time-container-pick-up'>
                                                                    <div className='base__Headline01-sc-1tvbuqk-44 kxACTE'>
                                                                        {data_car_trip && data_car_trip?.pickup_points?.[0]?.pivot?.pickup_time.slice(0, 5)}
                                                                        {/* {pickuptime?.slice(0, 5)} */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='icon-container'>
                                                                <div className='icon-container-top'>
                                                                    <img
                                                                        className='pickup-icon ls-is-cached lazyloaded'
                                                                        data-src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg'
                                                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg'
                                                                        alt='pickup-icon'
                                                                        width='12'
                                                                        height='12'
                                                                    />
                                                                </div>
                                                                <div className='icon-container-divider'>
                                                                    <div className='icon-container-divider-border-right'></div>
                                                                    <div className='icon-container-divider-border-left'></div>
                                                                </div>
                                                            </div>
                                                            <div className='section-area'>
                                                                <div className='section-area-picker'>
                                                                    <p className='base__Caption01Highlight-sc-1tvbuqk-17 jCbuWT'>
                                                                        {data_car_trip && data_car_trip?.pickup_points?.[0]?.name}
                                                                        {/* {pickupName} */}
                                                                    </p>
                                                                    <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb color--medium-sub'>
                                                                        {data_car_trip && data_car_trip?.pickup_points?.[0]?.address}
                                                                        {/* {pickupAdress} */}
                                                                    </p>
                                                                </div>
                                                                <div className='button-mobile-change'>
                                                                    <p className='base__Button02-sc-1tvbuqk-37 bVQrWf color--vex-blue text--underline'>
                                                                        Thay đổi
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='AreaPointDetailRoundTrip__Container-sc-1wmtowp-0 dlwjtp'>
                                                        <div className='area-point-container pointer'>
                                                            <div className='date-time-container'>
                                                                <div className='date-time-container-drop-off'>
                                                                    <div className='base__Headline01-sc-1tvbuqk-44 kxACTE'>
                                                                        {data_car_trip && data_car_trip?.dropoff_points?.[0]?.pivot?.dropoff_time.slice(0, 5)}
                                                                        {/* {dropoffTime?.slice(0, 5)} */}
                                                                    </div>
                                                                    <p className='base__SmallCaptionHighlight-sc-1tvbuqk-35 gzSlSc color--medium-sub'>
                                                                        {formatDate(data_car_trip.return_date)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='icon-container'>
                                                                <div className='icon-container-divider'>
                                                                    <div className='icon-container-divider-border-right'></div>
                                                                    <div className='icon-container-divider-border-left'></div>
                                                                </div>
                                                                <div className='icon-container-bottom'>
                                                                    <img
                                                                        className='dropoff-icon ls-is-cached lazyloaded'
                                                                        data-src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_semantic_negative_12dp.svg'
                                                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_semantic_negative_12dp.svg'
                                                                        alt='dropoff-icon'
                                                                        width='12'
                                                                        height='12'
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='section-area'>
                                                                <div className='section-area-picker'>
                                                                    <p className='base__Caption01Highlight-sc-1tvbuqk-17 jCbuWT'>
                                                                        {data_car_trip && data_car_trip?.dropoff_points?.[0]?.name}
                                                                        {/* {dropoffName} */}
                                                                    </p>
                                                                    <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb color--medium-sub'>
                                                                        {data_car_trip && data_car_trip?.dropoff_points?.[0]?.address}
                                                                        {/* {dropoffAdress} */}
                                                                    </p>
                                                                </div>
                                                                <div className='button-mobile-change'>
                                                                    <p className='base__Button02-sc-1tvbuqk-37 bVQrWf color--vex-blue text--underline'>
                                                                        Thay đổi
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='thanhtoanlan1-ft'>
                        <div className='ft1-content'>
                            <div className='box-content-left-ft'>
                                <div className='box-2-btn'>
                                    <div className=''>
                                        <input type="submit" className='ft-content__title thanhtoanlan1-btn' value='Tiếp tục đặt vé một chiều'>
                                        </input>
                                    </div>
                                </div>

                                <span className='dongy-chinhsach'>
                                    Bằng việc tiếp tục, bạn đồng ý với{' '}
                                    <a href='' className='chinhsach-link-lan1'>
                                        Chính sách bảo mật thanh toán
                                    </a>{' '}
                                    và{' '}
                                    <a href='' className='chinhsach-link-lan1'>
                                        Quy chế
                                    </a>
                                </span>
                            </div>
                            <div className='box-content-right-ft'>
                                <div className='xinchao'>
                                    <h4 className='content-right-heading'>Đặt thêm chiều về, giảm ngay 10%!</h4>
                                    <span className='ft-right-text'>
                                        Áp dụng khi đặt cùng nhà xe Long Vân Limousine (dùng mã giảm giá khứ hồi ở bước
                                        thanh toán).
                                    </span>
                                    <div className='chitietlan1'>
                                        <a href='' className='chinhsach-link-lan1 chitiet-link'>
                                            Chi tiết
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        : < >   <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
             <div>Mời Bạn Đăng Nhập</div>
              <Link to='/login'>Vào Trang Đăng Nhập </Link>
              <Link to='/'>Quay Lại Trang Chủ </Link>
              </div></>
                                        }
                                        </>
    );
}
