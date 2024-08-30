import React from 'react';

// import css
import '../css/footer.css'


export default function Footer() {
    return (
        <div className='footer-top'>
            <div className='footer-center'>
                <div className='footer-content'>
                    <div className='footer-col'>
                        <p className='footer-heading footer-p'>Hỗ trợ</p>
                        <ul className='footer-list'>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Hướng dẫn thanh toán
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Quy chế Vexere.com
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Chính sách bảo mật thông tin
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Chính sách bảo mật thanh toán
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Chính sách và quy trình giải quyết tranh chấp, khiếu nại
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                            <li className='footer-item'>
                                <a href='' className='footer-link link-text'>
                                    Tra cứu đơn hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-col flex-col'>
                        <div className='footer-intro'>
                            <p className='footer-heading footer-p'>Về chúng tôi</p>
                            <ul className='footer-list'>
                                <li className='footer-item'>
                                    <a href='' className='footer-link link-text'>
                                        Phần mềm đại lý
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href='' className='footer-link link-text'>
                                        Giới Thiệu Vexere.com
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href='' className='footer-link link-text'>
                                        Tuyển dụng
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href='' className='footer-link link-text'>
                                        Tin tức
                                    </a>
                                </li>
                                <li className='footer-item'>
                                    <a href='' className='footer-link link-text'>
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                            <div className='footer-channel'>
                                <a href='https://www.facebook.com/VexereOfficial' target='_blank' rel='noreferrer'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/footer-social-facebook.svg'
                                        alt='footer-social-facebook'
                                    />
                                </a>
                                <a
                                    href='https://www.youtube.com/channel/UCpAkiqkvMD4TtksSiCZTM0g'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/footer-social-youtube.svg'
                                        alt='footer-social-youtube'
                                    />
                                </a>
                                <a href='https://www.tiktok.com/@vexere.official' target='_blank' rel='noreferrer'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/footer-social-tiktok.svg'
                                        alt='footer-social-tiktok'
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='footer-certification'>
                            <p className='footer-heading footer-p'>Chứng nhận</p>
                            <div className='certification-container'>
                                <img
                                    className='passenger-icon'
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/Desktop_Cert_1.png'
                                    alt='passenger-icon'
                                    width='200'
                                    height='auto'
                                />
                                <div className='logo-certs'>
                                    <a href='http://online.gov.vn/Home/AppDetails/462'>
                                        <img
                                            className='passenger-icon'
                                            src='https://229a2c9fe669f7b.cmccloud.com.vn/images/Desktop_Cert_2.png'
                                            alt='passenger-icon'
                                            width='100'
                                            height='auto'
                                        />
                                    </a>
                                    <a href='http://online.gov.vn/Home/WebDetails/70277'>
                                        <img
                                            className='passenger-icon'
                                            src='https://229a2c9fe669f7b.cmccloud.com.vn/images/Desktop_Cert_2.png'
                                            alt='passenger-icon'
                                            width='100'
                                            height='auto'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-col'>
                        <p className='footer-heading footer-p'>Đối tác thanh toán</p>
                        <img
                            className='passenger-icon'
                            src='https://229a2c9fe669f7b.cmccloud.com.vn/images/payment_partner_desktop.png'
                            alt='passenger-icon'
                            width='202'
                            height='344'
                        />
                    </div>
                    <div className='footer-col'>
                        <p className='footer-heading footer-p'>Tải ứng dụng Vexere</p>
                        <div className='download-app__qr'>
                            <img
                                className='ImageComponentV2__ImageStyled-otccva-0 ddSMNv qr'
                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/landingpagetet2023/download_app_qr.png'
                                alt='landingpagetet2023/download_app_qr'
                                height='164'
                            />
                            <a
                                className='download-app-store-button'
                                href='https://itunes.apple.com/vn/app/vexere/id1183279479'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    className='lazyloaded'
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/download-app-store.png'
                                    alt='download-app-store-img'
                                    width='164'
                                    height='48'
                                />
                            </a>
                            <a
                                className='download-gg-play-button'
                                href='https://play.google.com/store/apps/details?id=com.vexere.vexere'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    className='lazyloaded'
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/download-gg-play.png'
                                    alt='download-gg-play-img'
                                    width='164'
                                    height='48'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-end'>
                <div className='footer-end-center'>
                    <p className='ft-end__heading'>Công ty TNHH Thương Mại Dịch Vụ Vexere</p>
                    <div className='link-description'>
                        <p className='link-title'>
                            Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành Phố Hồ Chí Minh,
                            Việt Nam
                        </p>
                    </div>
                    <div className='footer-link-text'>
                        <span>
                            Địa chỉ:
                            <a
                                href='https://www.google.com/maps/place/CirCO+Coworking+Space/@10.7603287,106.6965187,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f13392ff913:0x1802e764b3059cae!8m2!3d10.7603234!4d106.6990936!16s%2Fg%2F11c1xf__g9?hl=en-US&amp;entry=ttu'
                                rel='nofollow noopener noreferrer'
                                title='Xem bản đồ'
                                target='_blank'
                                className='no-title'
                            >
                                <span itemProp='address' itemType='http://schema.org/PostalAddress'>
                                    <span itemProp='streetAddress' className='end-title'>
                                        Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6, Quận 4, Tp. Hồ Chí
                                        Minh, Việt Nam
                                    </span>
                                </span>
                            </a>
                            <br />
                            <a
                                href='https://www.google.com/search?kgmid=/g/11pphhw0d_&amp;hl=vi-VN&amp;q=V%C4%83n+ph%C3%B2ng+%C4%91%E1%BA%A1i+di%E1%BB%87n+t%E1%BA%A1i+H%C3%A0+N%E1%BB%99i+-+C%C3%B4ng+ty+TNHH+Th%C6%B0%C6%A1ng+m%E1%BA%A1i+d%E1%BB%8Bch+v%E1%BB%A5+VEXERE&amp;kgs=f1aa79a4fe01a36a&amp;shndl=30&amp;shem=bsc&amp;source=sh/x/loc/osrp/m5/1'
                                rel='nofollow noopener noreferrer'
                                title='Xem bản đồ'
                                target='_blank'
                                className='no-title'
                            >
                                <span itemProp='address' itemType='http://schema.org/PostalAddress'>
                                    <span itemProp='streetAddress' className='end-title'>
                                        Tầng 3, Toà nhà 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội, Việt Nam
                                    </span>
                                </span>
                            </a>
                            <br />
                            <span className='end-title'>
                                Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu ngày
                                27/6/2018
                            </span>
                            <div>Bản quyền © 2024 thuộc về Vexere.com</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
