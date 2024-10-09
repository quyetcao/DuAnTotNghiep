import '../css/contentcuatui.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PauseOnHoverContent3() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='scroll-list-item-udnb' style={{ width: 300, height: 250 }}>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/217/img_card.png?v=6'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>Vexere chính thức ra mắt dịch vụ đặt vé tàu hỏa</div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/200/img_card.png?v=18'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>“Bảo hiểm chuyến đi” chính thức ra mắt tại Vexere</div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/300/img_card.png?v=8'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>
                            Bồi thường đến 1.000.000 VNĐ với bảo hiểm trễ, huỷ chuyến bay tại Vexere
                        </div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/282/img_card.png?v=2'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>
                            Thuê xe 4 chỗ, 7 chỗ từ Sân bay Nội Bài đi Nội thành Hà Nội
                        </div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/178/img_card.png?v=6'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>Thuê xe máy giá rẻ, chất lượng tại Vexere</div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/42/img_card.png?v=5'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>
                            Thuê xe du lịch: limousine, ghế ngồi, cabin, giường nằm tại Vexere
                        </div>
                    </div>
                </div>

                <div className='scroll-list-item-udnb'>
                    <img
                        className='item-image'
                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/175/img_card.png?v=6'
                        alt='item-img'
                    />
                    <div className='item-content'>
                        <div className='item-content-title'>Xe buýt Hop On Hop Off ở Thành phố Hồ Chí Minh</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default PauseOnHoverContent3;
