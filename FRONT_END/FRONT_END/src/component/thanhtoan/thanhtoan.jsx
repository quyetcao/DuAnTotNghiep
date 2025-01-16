import { Link, useNavigate } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
// import WarningIcon from '@mui/icons-material/Warning';
import '../css/thanhtoan.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Apdunggiamgia, CallapiGetAllGiamGia } from '../../redux/admin-vexere/giam-gia-redux/AsyncThunk-giam-gia';
import { useForm } from 'react-hook-form';
import { callApigetAlldonhangtheouser, postthanhtoan, postthanhtoanbynganhang } from '../../redux/donhang/Asyncthunkdh';

export default function ThanhToan() {
    const location = useLocation();
    const formData = location.state;
    const [pttt,setpttt]=useState(0);

    function selectpttt(pt){
        if(pt == 0){
            setpttt(0)
        }else if(pt== 1){
            setpttt(1)
        }
    }
    console.log('formData', formData);

    const dispatch = useDispatch();
 
    const dataAllgiamgia = useSelector((state) => state.StoreGiamGia?.dataAllgiamgia);
//    const  dagiamgia= useSelector((state) => state.StoreGiamGia?.dataAllgiamgia);
   
   const  donhangtheouser= useSelector((state) => state.Donhang?.donhangtheouser);
   console.log("donhangtheouser",donhangtheouser[donhangtheouser.length -1 ]);
    // console.log('all list giamgia', dataAllgiamgia);
    // const isload = useSelector((state) => state.StoreGiamGia?.isloading);
    // const dataSeat = JSON.parse(localStorage.getItem("dataSeat"));
    // const showSeat = localStorage.getItem("showSeat");
    const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    const user  = useSelector((state) => state.LoginLogOutRegister?.infoUser);
    useEffect(() => {
        dispatch(CallapiGetAllGiamGia());
        dispatch( callApigetAlldonhangtheouser(user.id))
    }, [user.id]);
    console.log('use',user.id);
    const { register: registerForm1, handleSubmit: handleSubmitForm1 } = useForm();
 
    const onSubmit1 = (data)=>{
        data.order_total=totalPrice;
        dispatch(Apdunggiamgia(data));
    }
    const navigate = useNavigate();
    const { register: registerForm, handleSubmit: handleSubmitForm } = useForm();
    const onSubmit = (data) => {
        if(pttt == 0){
        console.log(data);
        const formData = new FormData();
        data.payment_method = 'cash';
        data.order_id = donhangtheouser[donhangtheouser.length -1 ]?.id;
    

        formData.append('order_id', data.order_id);
        formData.append('amount', totalPrice);
        formData.append('payment_method','cash');
        formData.append('discount_code', '');
        formData.append('user_id', user.id);
        dispatch(postthanhtoan(formData))
        }else if(pttt == 1){
            const formData = new FormData();
            data.order_id = donhangtheouser[donhangtheouser.length -1 ]?.id;
            formData.append('order_id', data.order_id);
            formData.append('amount', totalPrice);
            formData.append('user_id', user.id);
            dispatch(postthanhtoanbynganhang(formData))
        }
    }
      

    return (
        <>
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
                            <span className='payments-security__title'>Nhiều cách thanh toán, bảo mật tuyệt đối</span>
                        </div>
                        <div className='wrap-left bottom__20'>
                            <div className='payment-method'>
                                <p className='method-heading'>Phương thức thanh toán</p>
                                <div className='method-heading2'>Chọn phương thức thanh toán</div>
                                <div className='group-payment'>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' disabled />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/transfer_va.svg'
                                                    alt='TRANSFER_VA'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>
                                                    <span className='hehehe'> QR chuyển khoản/ Ví điện tử</span>
                                                    <div className='an-toan'>
                                                        <img
                                                            src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/gpp_good.svg'
                                                            className='icon-payment'
                                                            alt=''
                                                        />
                                                        <p className='text-base'>An toàn & tiện lợi</p>
                                                    </div>
                                                </p>
                                            </span>
                                        </lable>
                                        <div className='detail-content'>
                                            <p className='thanhtoan-title'>
                                                Không cần nhập thông tin. Xác nhận thanh toán tức thì, nhanh chóng và ít
                                                sai sót.
                                            </p>
                                            <div className=''>
                                                <div className='content-support'>
                                                    <div className='ho-tro'>
                                                        <p className='text-sp'>
                                                            Hỗ trợ nhiều ví điện tử & 42 ngân hàng
                                                        </p>
                                                        <div className='content-img__app'>
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-0.png'
                                                                alt='default-alt'
                                                                width='24'
                                                                height='24'
                                                            />
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-7.png'
                                                                alt='default-alt'
                                                                width='24'
                                                                height='24'
                                                            />
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-5.png'
                                                                alt='default-alt'
                                                                width='24'
                                                                height='24'
                                                            />
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-6.png'
                                                                alt='default-alt'
                                                                width='24'
                                                                height='24'
                                                            />
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Default-0.png'
                                                                alt='default-alt'
                                                                width='36'
                                                                height='24'
                                                            />
                                                            <img
                                                                className='img__app-icon'
                                                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Default-1.png'
                                                                alt='default-alt'
                                                                width='36'
                                                                height='24'
                                                            />
                                                            <div className='plus-img'>+ 40</div>
                                                        </div>
                                                        <p className='text-base'>
                                                            <a href='' className='text-link text-link1'>
                                                                Xem tất cả
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <div className='payment-container'>
                                            <div className='payment-content'>
                                                <div className='left-content'>
                                                    <img
                                                        className='icon-img'
                                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/critical_close.svg'
                                                        alt='info'
                                                        width={'18px'}
                                                        height={'18px'}
                                                    />
                                                    <p className='thanhtoan-heading'>Chuyến đi chưa được bảo vệ</p>
                                                </div>
                                                <p className='content-p'>
                                                    <a href='' className='text-link'>
                                                        Thêm bảo hiểm
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' onClick={()=>{selectpttt(0)}}  />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/bus_station.svg'
                                                    alt='COP'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Thanh toán khi lên xe</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Bạn có thể thanh toán cho tài xế khi lên xe
                                        </p>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' onClick={()=>{selectpttt(1)}}  />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/atm.svg'
                                                    alt='IB'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Thẻ ATM nội địa / Internet Banking</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Tài khoản phải có đăng ký Internet banking
                                        </p>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' disabled />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/viettel_pay.svg'
                                                    alt='VIETTEL_PAY_APP'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Thanh toán qua Viettel Money</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Bạn cần có tài khoản Viettel Money hoặc có cài đặt ứng dụng Viettel Money
                                        </p>
                                    </div>
                                    <div className='payment-item mt-20'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' disabled />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/local_convenience_store.svg'
                                                    alt='CASH_COLLECTION'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Tại cửa hàng tiện lợi hoặc siêu thị</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Bạn có thể thanh toán tại các cửa hàng tiện lợi, Viettel post hoặc siêu thị
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='wrap-right'>
                            <div className='cart-summary'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Tổng tiền</span>
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
                                        <p className='cart-text'>Khuyến mãi</p>
                                    </div>
                                </div>
                            </div>

                            <div className='cart-khuyen-mai'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Mã giảm giá</span>
                                    <div className='cart-box'>
                                        <form action=""  onSubmit={handleSubmitForm1(onSubmit1)} >
                                        <input href='#' color='#2474E5' className='cart-box-link' {...registerForm1('code')} ></input>
                                        <input href='#' type="hidden" color='#2474E5' className='cart-box-link' {...registerForm1('toorder_total')} ></input>
                                        <input type="submit" />
                                        </form>
                                    </div>
                                </div>

                                <div className='cart-kk-detail'>
                                    {dataAllgiamgia &&
                                        dataAllgiamgia.map((item) => {
                                            return (
                                                <>
                                                    <div className='coupon-info-route-page-container'>
                                                        <div className='giamgia' key={item.id}>
                                                            <img
                                                                src={`http://127.0.0.1:8000/images/discount_codes/${item?.image}`}
                                                                alt=''
                                                            />
                                                            <div className='thong-tin-ve-giam'>
                                                                <div className='title-giam-gia'>
                                                                    Bạn Mới (Vexere){' '}
                                                                    <ErrorIcon style={{ fontSize: '14px' }} />
                                                                </div>
                                                                <div className='price-giam'>{item.description}</div>
                                                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                                                <div className='hsd'>
                                                                    HSD:<strong>{item.end_date}</strong>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    <div className='coupon-info-route-page-container'>
                                        <div className='giamgia'>
                                            <img
                                                src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png'
                                                alt=''
                                            />
                                            <div className='thong-tin-ve-giam'>
                                                <div className='title-giam-gia'>
                                                    Bạn Mới (Vexere) <ErrorIcon fontSize='small' />
                                                </div>
                                                <div className='price-giam'>Giảm 10%</div>
                                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                                <div className='hsd'>
                                                    HSD:<strong>T3, 10/9 14:00</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='coupon-info-route-page-container'>
                                        <div className='giamgia'>
                                            <img
                                                src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png'
                                                alt=''
                                            />
                                            <div className='thong-tin-ve-giam'>
                                                <div className='title-giam-gia'>
                                                    Bạn Mới (Vexere) <ErrorIcon fontSize='small' />
                                                </div>
                                                <div className='price-giam'>Giảm 10%</div>
                                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                                <div className='hsd'>
                                                    HSD:<strong>T3, 10/9 14:00</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='coupon-info-route-page-container'>
                                        <div className='giamgia'>
                                            <img
                                                src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png'
                                                alt=''
                                            />
                                            <div className='thong-tin-ve-giam'>
                                                <div className='title-giam-gia'>
                                                    Bạn Mới (Vexere) <ErrorIcon fontSize='small' />
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
                                            <p className='section-ticket-header-left__title'>T6, 13/09/2024</p>
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
                                                    1
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
                                                <p className='base__Headline03-sc-1tvbuqk-15 boemqK'>Nam Quỳnh Anh</p>
                                                <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb'>
                                                    Limousine giường phòng 34 chỗ (mới)
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
                                                                    23:40
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
                                                                    Bến xe Nước Ngầm
                                                                </p>
                                                                <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb color--medium-sub'>
                                                                    Số 1 Ngọc Hồi
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
                                                                    06:25
                                                                </div>
                                                                <p className='base__SmallCaptionHighlight-sc-1tvbuqk-35 gzSlSc color--medium-sub'>
                                                                    (14/09)
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
                                                                    Bến Xe Bắc Vinh
                                                                </p>
                                                                <p className='base__SmallCaption-sc-1tvbuqk-32 eSKsXb color--medium-sub'>
                                                                    xã Nghi Kim
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

                            <div className='cart-thong-tin-kh'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Thông tin liên hệ</span>
                                    <div className='cart-box'>
                                        <Link href='#' className='cart-box-link' color='#2474E5'>
                                            Chỉnh sửa
                                        </Link>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Hành khách</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>{donhangtheouser[donhangtheouser.length -1 ]?.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Số điện thoại</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>{donhangtheouser[donhangtheouser.length -1 ]?.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Email</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>{donhangtheouser[donhangtheouser.length -1 ]?.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* phan thanh toan */}
                <div className='payment-footer kkk'>
                    <div className='payment-ft__body'>
                        <div className='payment-footer__left thanhtoan-btn'>
                            <div className='payment-ft-content '>
                                <img
                                    className='payment-ft-content__img'
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/shield_lock.svg'
                                />
                                <form action="" onSubmit={handleSubmitForm(onSubmit)}>
                                
                                <input type="hidden"  {...registerForm('discount_code')} ></input>
                                <input type="hidden"  {...registerForm('order_id')} ></input>
                                <input type="hidden"  {...registerForm('payment_method')} ></input>
                                <input type="submit" className='payment-ft-content__title' value="Thanh Toán "></input>
                                </form>
                            </div>
                        </div>
                        <div className='payment-footer__right'>
                            <span className='payment-ft__right-title'>
                                Bạn sẽ sớm nhận được biển số xe, số điện thoại tài xế và dễ dàng thay đổi điểm đón trả
                                sau khi đặt.
                            </span>
                        </div>
                    </div>
                    <div className='hmm'>
                        <span className='chinhsach-baomat'>
                            Bằng việc nhấn nút Thanh toán, bạn đồng ý với{' '}
                            <a href='' className='chinhsach-baomat__link'>
                                Chính sách bảo mật thanh toán
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
