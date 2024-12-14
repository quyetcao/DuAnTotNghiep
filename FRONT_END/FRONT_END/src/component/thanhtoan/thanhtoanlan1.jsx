import { Link } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import WarningIcon from '@mui/icons-material/Warning';
import '../css/thanhtoanlan1.css';

export default function ThanhToanLanMot() {
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
                        <div className='wrap-left'>
                            <div className='payment-method'>
                                <p className='method-heading'>Thông tin liên hệ</p>
                                <div className='group-payment'>
                                    <div className='payment-item border-bottom'>
                                        <form className='form-inp-lan1'>
                                            <div className='form-input-thanhtoanlan1'>
                                                <div className='group-inp-lan1'>
                                                    <div className='box-lan1'>
                                                        <input type='text' placeholder='Tên người đi' />
                                                    </div>
                                                    <div className='box-lan1 zzzz'>
                                                        <input type='text' placeholder='Số điện thoại' />
                                                    </div>
                                                    <div className='box-lan1 zzzz'>
                                                        <input
                                                            type='email'
                                                            placeholder='Email để nhận thông tin đặt chỗ'
                                                        />
                                                    </div>
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
                                        </form>
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
                                                        Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn.
                                                    </span>
                                                </div>
                                                <div className='item-baohiem'>
                                                    <h4 className='baohiem-title'>Bảo hiểm hủy chuyến</h4>
                                                    <span className='baohiem-text'>
                                                        Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lí do khách
                                                        quan hoặc bất khả kháng về sức khỏe.
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
                                    <div className='payment-item'>
                                        <div className='thuexe'>
                                            <div className='thuexe-header'>
                                                <div className='thuexe-left'>
                                                    <div className='thuexe-oday'>
                                                        <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/rental.svg' />
                                                        <div className='cho-thuexe'>
                                                            <span className='thuexe-title'>
                                                                Thuê xe máy tại Nha Trang
                                                            </span>
                                                            <div className='thuexe-hot'>
                                                                <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/hot.svg' />
                                                                <span className='thuexe-text'>
                                                                    71 lượt thuê xe máy trong 24h qua
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='chinhsach-thuexe'>
                                                        <button className='thuexe-btn'>Chính sách thuê xe máy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='box-list-icon'>
                                            <div className='box-item-icon'>
                                                <VerifiedIcon />
                                                <span className='thuexe-text'>Tiện lợi</span>
                                            </div>
                                            <div className='box-item-icon'>
                                                <PaidIcon />
                                                <span className='thuexe-text'>Giá tốttốt</span>
                                            </div>
                                            <div className='box-item-icon'>
                                                <AccountBalanceWalletIcon />
                                                <span className='thuexe-text'>Không cần thanh toán trước</span>
                                            </div>
                                        </div>
                                        <div className='group-xe'>
                                            <div className='thuexe-listxe'>
                                                <div className='thuexe-itemxe'>
                                                    <h5 className='itemxe-heading'>Giao xe tận nơi</h5>
                                                    <div className='itemxe-loaixe'>
                                                        <p className='ten-loaixe'>Xe số 110cc</p>
                                                        <p className='gia-loaixe'>100.000đ/ngày</p>
                                                        <span className='mota-loaixe'>
                                                            Yamaha Sirius, Honda Wave RSX (ngẫu nhiên)
                                                        </span>
                                                    </div>
                                                    <div className='img-actions'>
                                                        <img src='https://229a2c9fe669f7b.cmccloud.com.vn/images/thuexe/Xe_so_110cc_-_Yamaha_Sirius.jpg' />
                                                        <div className='bike-actions'>
                                                            <button className='btn-bike-action'>
                                                                <span className='border-icon-bike'>
                                                                    <RemoveIcon />
                                                                </span>
                                                                <p>0</p>
                                                                <span className='border-icon-bike dddd'>
                                                                    <AddIcon />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='thuexe-itemxe'>
                                                    <h5 className='itemxe-heading'>Giao xe tận nơi</h5>
                                                    <div className='itemxe-loaixe'>
                                                        <p className='ten-loaixe'>Xe số 110cc</p>
                                                        <p className='gia-loaixe'>100.000đ/ngày</p>
                                                        <span className='mota-loaixe'>
                                                            Yamaha Sirius, Honda Wave RSX (ngẫu nhiên)
                                                        </span>
                                                    </div>
                                                    <div className='img-actions'>
                                                        <img src='https://229a2c9fe669f7b.cmccloud.com.vn/images/thuexe/Xe_so_110cc_-_Yamaha_Sirius.jpg' />
                                                        <div className='bike-actions'>
                                                            <button className='btn-bike-action'>
                                                                <span className='border-icon-bike'>
                                                                    <RemoveIcon />
                                                                </span>
                                                                <p>0</p>
                                                                <span className='border-icon-bike dddd'>
                                                                    <AddIcon />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='info-thuexe'>
                                            <div className='info-thuexe_header'>
                                                <p className='info-thuexe-heading'>Nhập thông tin thuê xe máy</p>
                                            </div>
                                            <div className='info-thongbao'>
                                                <ErrorIcon />
                                                <span className='info-note-title'>
                                                    Bạn có thể chọn thời gian, địa điểm thuê xe theo nhu cầu và linh
                                                    động thay đổi sau khi đặt dịch vụ.
                                                </span>
                                            </div>
                                            <div className='info-nhanxe'>
                                                <form>
                                                    <div className='diem-nhanxe giongnhau'>
                                                        <label>Điểm nhận xe (tùy chọn)</label>
                                                        <input
                                                            type='text'
                                                            value='110 Tôn Đức Thắng, Hòa Khánh, Đà Nẵng'
                                                        />
                                                    </div>
                                                    <span className='form-info_title'>
                                                        Nhận và trả xe cùng địa điểm
                                                    </span>
                                                    <div className='diem-nhanxe giongnhau'>
                                                        <label>Ngày giờ nhận xe</label>
                                                        <input type='text' value='06:45 • CN, 15/12/2024' />
                                                    </div>
                                                    <div className='diem-nhanxe giongnhau'>
                                                        <label>Ngày giờ trả xe</label>
                                                        <input type='text' value='06:45 • T2, 16/12/2024' />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='gia-thuexe'>
                                            <div className='box-left-giathue'>
                                                <span className='gia-thuela'>Giá thuê xe máy (dự kiến)</span>
                                                <InfoOutlinedIcon />
                                            </div>
                                            <div className='box-giatien-thue'>
                                                <p className='giatienla'>100.000đ</p>
                                                <span className='mota-songaythue'>
                                                    1 Xe số 110cc, 1 ngày (15/12-16/12)
                                                </span>
                                                <p className='thanhtoan-nhanxe'>Thanh toán khi nhận xe</p>
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
                                        <span className='cart-price'>600.000đ</span>
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
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>600.000đ x 1</p>
                                            <p className='cart-text'>Mã ghế/giường: A9</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Khuyến mãi</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>-20.000đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Giá thuê xe máy dự kiến</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-giatien'>100.000đ</p>
                                            <p className='thanhtoan-nhanxe'>Thanh toán khi nhận xe</p>
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
                        </div>
                    </div>
                </div>
                {/* phan thanh toan */}
                <div className='thanhtoanlan1-ft'>
                    <div className='ft1-content'>
                        <div className='box-content-left-ft'>
                            <div className='box-2-btn'>
                                <div className='ft-content-no-select ft-content-btn'>
                                    <span className='ft-content__title'>Tiếp tục đặt vé một chiều</span>
                                </div>
                                <div className='ft-content-select ft-content-btn'>
                                    <span className='ft-content__title'>Đặt thêm chiều về</span>
                                </div>
                            </div>
                            <span className='dongy-chinhsach'>Bằng việc tiếp tục, bạn đồng ý với <a href='' className='chinhsach-link-lan1'>Chính sách bảo mật thanh toán</a> và <a href='' className='chinhsach-link-lan1'>Quy chế</a></span>
                        </div>
                        <div className='box-content-right-ft'>
                            <div className='xinchao'>
                                <h4 className='content-right-heading'>Đặt thêm chiều về, giảm ngay 10%!</h4>
                                <span className='ft-right-text'>
                                    Áp dụng khi đặt cùng nhà xe Long Vân Limousine (dùng mã giảm giá khứ hồi ở bước thanh
                                    toán).
                                </span>
                                <a href='' className='chinhsach-link-lan1'>Chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='payment-footer kkk'>
                    <div className='payment-ft__body'>
                        <div className='payment-footer__left thanhtoan-btn'>
                            <div className='thanhtoan-lan1 '>
                                <div><span className='ft-content__title'>Tiếp tục đặt vé một chiều</span></div>
                                <div><span className='ft-content__title'>Đặt thêm chiều về</span></div>
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
                </div> */}
            </div>
        </>
    );
}
