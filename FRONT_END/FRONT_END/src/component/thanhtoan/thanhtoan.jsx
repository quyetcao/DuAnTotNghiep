import { Link } from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';
// import WarningIcon from '@mui/icons-material/Warning';
import '../css/thanhtoan.css';

export default function ThanhToan() {
    return (
        <>
            <div className='body-container'>
                <div className='payment'>
                    <div className='payment-page'>
                        <div className='wrap-left'>
                            <div className='payment-method'>
                                <p className='method-heading'>Phương thức thanh toán</p>
                                <div className='group-payment'>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/transfer_va.svg'
                                                    alt='TRANSFER_VA'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>
                                                    QR chuyển khoản/ Ví điện tử
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
                                                        </div>
                                                        <p className='text-base'>
                                                            <a href='' className='text-link'>
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
                                                <input type='radio' name='kieu-tt' className='radio-input' />
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
                                                <input type='radio' name='kieu-tt' className='radio-input' />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/credit_card.svg'
                                                    alt='VISA'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Thẻ thanh toán quốc tế</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>Thẻ Visa, MasterCard, JCB</p>
                                        <p className='thanhtoan-heading text-content nhapma'>
                                            Nhập mã VXRHDS50 hoặc VXRHDS100 - Giảm 50K cho đơn từ 250K và 100K cho đơn
                                            từ 450K khi thanh toán bằng thẻ tín dụng HDSAISON <br />
                                            <a href='' className='text-link'>
                                                Điều kiện sử dụng
                                            </a>
                                        </p>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/airpay.svg'
                                                    alt='AIR_PAY'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Ví ShopeePay</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Điện thoại của bạn phải được cài đặt ứng dụng ShopeePay
                                        </p>
                                        <p className='thanhtoan-heading text-content nhapma'>
                                            Giảm 10K khi nhập mã SPPVEXE09 cho đơn từ 100K - <br />
                                            <a href='' className='text-link'>
                                                Điều kiện sử dụng
                                            </a>
                                        </p>

                                        <div className='ant-collapse-content-box'>
                                            <span className='PaymentMethods__LabelStyle-sc-6pvdqp-2 PaymentMethods__PaymentGuide-sc-6pvdqp-3 hUFPSU iIqzBs'>
                                                Hướng dẫn thanh toán
                                            </span>
                                            <div className='PaymentMethods__GuildContainer-sc-6pvdqp-5 jCaFku'>
                                                <p>
                                                    1. Bạn sẽ được chuyển đến ứng dụng ShopeePay
                                                    <br />
                                                    2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua ví
                                                    ShopeePay/thẻ đã liên kết với ví ShopeePay
                                                    <br />
                                                    3. Chọn `Thanh toán`` để tiến thành thanh toán vé
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/vn_pay.svg'
                                                    alt='VNPAY_APP'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Thanh toán VNPAY - QR</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Thiết bị cần cài đặt Ứng dụng ngân hàng (Mobile Banking) hoặc Ví VNPAY
                                        </p>
                                        <p className='thanhtoan-heading text-content nhapma'>
                                            Giảm 10K và giảm 30K khi nhập mã VNPAYVXR10 lần lượt cho đơn từ 250K và 900K
                                            - <br />
                                            <a href='' className='text-link'>
                                                Điều kiện sử dụng
                                            </a>
                                        </p>

                                        <div className='ant-collapse-content-box'>
                                            <span className='PaymentMethods__LabelStyle-sc-6pvdqp-2 PaymentMethods__PaymentGuide-sc-6pvdqp-3 hUFPSU iIqzBs'>
                                                Hướng dẫn thanh toán
                                            </span>
                                            <div className='PaymentMethods__GuildContainer-sc-6pvdqp-5 jCaFku'>
                                                <p>
                                                    1. Đăng nhập Ứng dụng ngân hàng hoặc Ví VNPAY
                                                    <br />
                                                    2. Quét mã VNPAY-QR để thanh toán
                                                    <br />
                                                    3. Nhập số tiền thanh toán &amp; mã giảm giá (nếu có), xác minh giao
                                                    dịch để đặt vé{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' />
                                            </span>
                                            <span className='list-pttt'>
                                                <img
                                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/momo.svg'
                                                    alt='MOMO_PAY_APP'
                                                    className='img-icon'
                                                />
                                                <p className='title-base'>Ví MoMo</p>
                                            </span>
                                        </lable>
                                        <p className='thanhtoan-heading text-content'>
                                            Điện thoại của bạn phải được cài đặt ứng dụng MoMo
                                        </p>
                                        <p className='thanhtoan-heading text-content nhapma'>
                                            Giảm 10K khi nhập mã VEXEMOMO cho đơn từ 400K - <br />
                                            <a href='' className='text-link'>
                                                Điều kiện sử dụng
                                            </a>
                                        </p>
                                        <div className='ant-collapse-content ant-collapse-content-active'>
                                            <div className='ant-collapse-content-box'>
                                                <span className='PaymentMethods__LabelStyle-sc-6pvdqp-2 PaymentMethods__PaymentGuide-sc-6pvdqp-3 hUFPSU iIqzBs'>
                                                    Hướng dẫn thanh toán
                                                </span>
                                                <div className='PaymentMethods__GuildContainer-sc-6pvdqp-5 jCaFku'>
                                                    <p>
                                                        1. Bạn sẽ được chuyển đến ứng dụng Momo
                                                        <br />
                                                        2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua ví
                                                        Momo/thẻ đã liên kết với ví Momo
                                                        <br />
                                                        3. Chọn `thanh toán` để tiến thành thanh toán vé
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='payment-item border-bottom'>
                                        <lable className='list-qr'>
                                            <span className='ant-radio'>
                                                <input type='radio' name='kieu-tt' className='radio-input' />
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
                                                <input type='radio' name='kieu-tt' className='radio-input' />
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
                                                <input type='radio' name='kieu-tt' className='radio-input' />
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
                            </div>

                            <div className='cart-khuyen-mai'>
                                <div className='cart-item'>
                                    <span className='cart-heading'>Mã giảm giá</span>
                                    <div className='cart-box'>
                                        <Link href='#' color='#2474E5' className='cart-box-link'>
                                            Chọn hoặc nhập mã
                                        </Link>
                                    </div>
                                </div>
                                <div className='cart-kk-detail'>
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
                                            <p className='cart-text text-price'>Alo chào em</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Số điện thoại</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>0952541541</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-item'>
                                    <div className='cart-detail'>
                                        <p className='cart-text'>Email</p>
                                        <div className='cart-info'>
                                            <p className='cart-text text-price'>Alo@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
