import '../css/chi-tiet-giao-dich.css'
// import { Link } from 'react-router-dom';
// import ErrorIcon from '@mui/icons-material/Error';
import HelpIcon from '@mui/icons-material/Help';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';
export default function ChiTietGiaoDich() {
    return (
        <>
            <div className="thanh-thong-bao">
                <p className="base__Body02-sc-1tvbuqk-23 gymsWw color--darkness">Vui lòng thanh toán trước <strong>14:53 • T6, 13/09</strong>. Vé sẽ bị hủy sau thời gian trên</p>
            </div>
            <div className='body-container'>
                <div className='chi-tiet-giao-dich'>
                    <div className='ctgd-page'>
                        <div className='wrap-left'>
                            <div className="hd-thanh-toan">
                                <h3>Hướng dẫn thanh toán</h3>
                                <div className="cop-text"><p>Bạn hãy nói rằng đã đặt chỗ qua Vexere và thanh toán <strong>120.000đ</strong> cho tài xế khi lên xe.</p></div>
                                <div className="luu-y">
                                    <h5>Lưu ý quan trọng</h5>
                                    <div className="TrustMessage__Container-sc-8xur6b-0 fzgXBM trust-message-content-container trust-message-container warning undefined">
                                        <div className="material-icons-wrapper md-16 info-note-icon ">
                                            <ReportIcon />
                                        </div>
                                        <p className="base__Body02-sc-1tvbuqk-23 gymsWw trust-message-content color--darkness">Hãy hủy vé khi không còn nhu cầu di chuyển. Vexere sẽ yêu cầu bạn thanh toán trước cho những lần sau nếu bạn đặt vé nhưng không đi hoặc huỷ vé quá nhiều lần.</p></div>
                                </div>
                            </div>




                            <div className='cart-thong-tin-chuyen-di'>
                                <div className='cart-item ttcd1'>
                                    <span className='cart-heading'>Thông tin chuyến đi</span>
                                    <Link to='#' className='text-link'>Chuyến đã hủy(1)</Link>
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
                                            <p className='base__Caption01Highlight-sc-1tvbuqk-17 jCbuWT'>
                                                T6, 13/09/2024
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
                                                <p className='base__Caption01-sc-1tvbuqk-16 jPSIDj'>1</p>
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
                                            <div className="section-ticket-license-plate ">
                                                <div className="base__Caption02-sc-1tvbuqk-33 hbMYEr color--dark title-ttcx-bsx">Biển số xe</div>
                                                <div className="section-ticket-license-plate-detail section-ticket-license-plate-detail1">
                                                    <p className="base__Caption01Highlight-sc-1tvbuqk-17  color--darkness">29B-097.88</p>
                                                </div>
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

                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="section-ticket-confirm status--success">
                                                    <div className="section-ticket-confirm-left">
                                                        <img className="IconComponent__SVGIcon-r88lg2-0 jtexIT" src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/confirmed.svg" alt="confirmed" />
                                                        <p className="base__Caption01-sc-1tvbuqk-16 jPSIDj color--dark">Nhà xe đã xác nhận vé</p>
                                                    </div>
                                                    <div className="section-ticket-confirm-right">
                                                        <p className="base__Caption01-sc-1tvbuqk-16 jPSIDj color--dark text-code">Mã đặt chỗ: 5K4SB5H</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className='wrap-right'>
                            <div className='cart-summary'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Thông tin thanh toán</span>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Trạng thái</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>Chưa thanh toán</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Phương thức thanh toán</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>Khi lên xe</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Tổng tiền</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>0đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Giá vé</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>0đ</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Khuyến mãi</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>0đ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='cart-qldh'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Quản lý đơn hàng</span>
                                </div>
                                <div className='qldh-item qldh-item1'>
                                    <div>
                                        <HelpIcon sx={{ color: 'rgb(36, 116, 229)' }} />
                                        <span>Trung tâm hỗ trợ</span>
                                    </div>
                                    <ChevronRightIcon />
                                </div>
                                <div className='qldh-item'>
                                    <div>
                                        <HighlightOffIcon sx={{ color: 'rgb(235, 87, 87)' }} />
                                        <span>Trung tâm hỗ trợ</span>
                                    </div>
                                    <ChevronRightIcon />
                                </div>
                            </div>

                            <div className='cart-khuyen-mai'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Dịch vụ khác dành cho bạn</span>
                                </div>
                                <div className="content-container">
                                    <a href="https://vexere.com/vn/thue-xe/xe-may.vi" className="container-rental container-rental1">
                                        <img className="container-img-background ls-is-cached lazyloaded" data-src="https://229a2c9fe669f7b.cmccloud.com.vn/images/mobile-card1.png" src="https://229a2c9fe669f7b.cmccloud.com.vn/images/mobile-card1.png" alt="motobike-rental" height="64" />
                                        <div className="RecommendSection__Card-sc-7ggvh9-1 jwCKCw">
                                            <div className="header-container">
                                                <div className="header-title">Thuê xe máy đời mới, giao tận khách sạn</div>
                                                <div className="header-content">Đà Lạt, Vũng Tàu, Sa Pa, Hà Giang</div>
                                                <img className="image-motobiker ls-is-cached lazyloaded" data-src="https://229a2c9fe669f7b.cmccloud.com.vn/images/motobiker-rental.png" src="https://229a2c9fe669f7b.cmccloud.com.vn/images/motobiker-rental.png" alt="motobike-rental" width="167" height="120" />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://vexere.com/dich-vu/thue-xe-du-lich/" className="container-rental">
                                        <img className="container-img-background ls-is-cached lazyloaded" data-src="https://229a2c9fe669f7b.cmccloud.com.vn/images/mobile-card2.png" src="https://229a2c9fe669f7b.cmccloud.com.vn/images/mobile-card2.png" alt="bus-rental" height="64" />
                                        <div className="RecommendSection__Card-sc-7ggvh9-1 jwCKCw">
                                            <div className="footer-container-rental">
                                                <img className="image-bus ls-is-cached lazyloaded" data-src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bus-hide.png" src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bus-hide.png" alt="bus-hide" width="128" height="83" />
                                            </div>
                                            <div className="header-container-rental">
                                                <div className="header-title">Thuê xe du lịch giá rẻ</div>
                                                <div className="header-content">Trên toàn quốc, đa dạng loại xe</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}