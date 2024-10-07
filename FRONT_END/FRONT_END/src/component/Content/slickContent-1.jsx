import '../css/contentcuatui.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DynamicSlidesContentTDPB() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        // <div className="slider-container">
            <Slider {...settings}>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/24/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Hà Nội-Hải Phòng</p>
                                <p className='cart-content-fare'>Từ 100.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/3/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Đà Lạt</p>
                                <p className='cart-content-fare'>Từ 199.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Nha Trang</p>
                                <p className='cart-content-fare'>Từ 200.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/25/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Phan Rang</p>
                                <p className='cart-content-fare'>Từ 180.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/24/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Hà Nội-Hải Phòng</p>
                                <p className='cart-content-fare'>Từ 100.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/3/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Đà Lạt</p>
                                <p className='cart-content-fare'>Từ 199.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/5/img_hero.png?v1'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Nha Trang</p>
                                <p className='cart-content-fare'>Từ 200.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='slick-active'>
                    <div className='div-item'>
                        <a href='#'>
                            <div className='img-content'>
                                <img
                                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/destination/images/25/img_hero.png'
                                    alt=''
                                    width='233'
                                    height='116px'
                                />
                            </div>
                            <div className='cart-content'>
                                <p className='cart-content-title'>Sài Gòn-Phan Rang</p>
                                <p className='cart-content-fare'>Từ 180.000đ</p>
                            </div>
                        </a>
                    </div>
                </div>

            </Slider>
        // </div>
    );
}

export default DynamicSlidesContentTDPB;
