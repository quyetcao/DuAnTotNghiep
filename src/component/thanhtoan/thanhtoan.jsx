import '../css/thanhtoan.css';

export default function ThanhToan() {
    return (
        <>
            <div className="body-container">
                <div className="payment">
                    <div className="payment-page">
                        <div className="wrap-left">
                            <div className="payment-method">
                                <p className="method-heading">Phương thức thanh toán</p>
                                <div className="group-payment">
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img
                                                    src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/transfer_va.svg"
                                                    alt="TRANSFER_VA"
                                                    className="img-icon"
                                                />
                                                <p className="title-base">
                                                    QR chuyển khoản/ Ví điện tử
                                                    <div className="an-toan">
                                                        <img src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/gpp_good.svg" className="icon-payment" alt=""/>
                                                        <p className="text-base">An toàn & tiện lợi</p>
                                                    </div>
        
                                                </p>
                                            </span>
                                        </lable>
                                        <div className="detail-content">
                                            <p className="thanhtoan-title">Không cần nhập thông tin. Xác nhận thanh toán tức thì, nhanh chóng và ít sai sót.</p>
                                            <div className="">
                                                <div className="content-support">
                                                    <div className="ho-tro">
                                                        <p className="text-sp">
                                                            Hỗ trợ nhiều ví điện tử & 42 ngân hàng
                                                        </p>
                                                        <div className="content-img__app">
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-0.png" alt="default-alt" width="24" height="24" />
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-7.png" alt="default-alt" width="24" height="24" />
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-5.png" alt="default-alt" width="24" height="24" />
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Wallet-6.png" alt="default-alt" width="24" height="24" />
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Default-0.png" alt="default-alt" width="36" height="24" />
                                                            <img className='img__app-icon' src="https://229a2c9fe669f7b.cmccloud.com.vn/images/bank_wallet_new/Default-1.png" alt="default-alt" width="36" height="24" />
                                                        </div>
                                                        <p className="text-base">
                                                            <a href="" className="text-link">
                                                                Xem tất cả</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <div className="payment-container">
                                            <div className="payment-content">
                                                <div className="left-content">
                                                    <img className="icon-img" src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/critical_close.svg" alt="info" width={'18px'} height={'18px'} />
                                                    <p className="thanhtoan-heading">Chuyến đi chưa được bảo vệ</p>
                                                </div>
                                                <p className="content-p"><a href="" className="text-link">Thêm bảo hiểm</a></p>
                                            </div>
                                        </div>
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/bus_station.svg" alt="COP" className="img-icon" />
                                                <p className="title-base">
                                                    Thanh toán khi lên xe
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Bạn có thể thanh toán cho tài xế khi lên xe</p>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/credit_card.svg" alt="VISA" className="img-icon" />
                                                <p className="title-base">
                                                    Thẻ thanh toán quốc tế
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Thẻ Visa, MasterCard, JCB</p>
                                        <p className="thanhtoan-heading text-content nhapma">
                                            Nhập mã VXRHDS50 hoặc VXRHDS100 - Giảm 50K cho đơn từ 250K và 100K cho đơn từ 450K khi thanh toán bằng thẻ tín dụng HDSAISON <br/>
                                            <a href="" className="text-link">Điều kiện sử dụng</a>
                                        </p>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/airpay.svg" alt="AIR_PAY" className="img-icon" />
                                                <p className="title-base">
                                                    Ví ShopeePay
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Điện thoại của bạn phải được cài đặt ứng dụng ShopeePay</p>
                                        <p className="thanhtoan-heading text-content nhapma">
                                            Giảm 10K khi nhập mã SPPVEXE09 cho đơn từ 100K - <br/>
                                            <a href="" className="text-link">Điều kiện sử dụng</a>
                                        </p>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/vn_pay.svg" alt="VNPAY_APP" className="img-icon" />
                                                <p className="title-base">
                                                    Thanh toán VNPAY - QR
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Thiết bị cần cài đặt Ứng dụng ngân hàng (Mobile Banking) hoặc Ví VNPAY</p>
                                        <p className="thanhtoan-heading text-content nhapma">
                                            Giảm 10K và giảm 30K khi nhập mã VNPAYVXR10 lần lượt cho đơn từ 250K và 900K - <br/>
                                            <a href="" className="text-link">Điều kiện sử dụng</a>
                                        </p>
                                    </div>
                                    <div className="payment-item border-bottom">    
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/momo.svg" alt="MOMO_PAY_APP" className="img-icon" />
                                                <p className="title-base">
                                                    Ví MoMo
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Điện thoại của bạn phải được cài đặt ứng dụng MoMo</p>
                                        <p className="thanhtoan-heading text-content nhapma">
                                            Giảm 10K khi nhập mã VEXEMOMO cho đơn từ 400K - <br/>
                                            <a href="" className="text-link">Điều kiện sử dụng</a>
                                        </p>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/atm.svg" alt="IB" className="img-icon" /> 
                                                <p className="title-base">
                                                    Thẻ ATM nội địa / Internet Banking
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Tài khoản phải có đăng ký Internet banking</p>
                                    </div>
                                    <div className="payment-item border-bottom">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/viettel_pay.svg" alt="VIETTEL_PAY_APP" className="img-icon" />
                                                <p className="title-base">
                                                    Thanh toán qua Viettel Money
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Bạn cần có tài khoản Viettel Money hoặc có cài đặt ứng dụng Viettel Money</p>
                                    </div>
                                    <div className="payment-item mt-20">
                                        <lable className="list-qr">
                                            <span className="ant-radio">
                                                <input type="radio" className="radio-input" />
                                            </span>
                                            <span className="list-pttt">
                                                <img src="https://229a2c9fe669f7b.cmccloud.com.vn/httpImage/local_convenience_store.svg" alt="CASH_COLLECTION" className="img-icon" />
                                                <p className="title-base">
                                                    Tại cửa hàng tiện lợi hoặc siêu thị
                                                </p>
                                            </span>
                                        </lable>
                                        <p className="thanhtoan-heading text-content">Bạn có thể thanh toán tại các cửa hàng tiện lợi, Viettel post hoặc siêu thị</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-right">
                            <div className="cart-summary">
                                <div className="cart-item">
                                    <span className="cart-heading">Tổng tiền</span>
                                    <div className="cart-box">
                                        <span className="cart-price">600.000đ</span>
                                        <img className="icon-expand-more " data-src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/expand_more.svg" src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/expand_more.svg" alt="icon-expand-more" width="20" height="20"/>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <div className="cart-detail">
                                        <p className="cart-text">Giá vé</p>
                                        <div className="cart-info">
                                            <p className="cart-text text-price">600.000đ x 1</p>
                                            <p className="cart-text">Mã ghế/giường: A9</p>
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
