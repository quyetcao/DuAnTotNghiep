import '../css/contentcuatui.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DynamicSlidesContentUDNB() {
    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };
    return (
        <Slider {...settings}>
       
            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/163/img_card.png?v=147'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>Thứ 3 hàng tuần - Flash Sale đến 50%</div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/309/img_card.png?v=6'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Giảm 25% dành cho khách hàng lần đầu đặt dịch vụ của nhà xe tại Vexere
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/161/img_card.png?v=103'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Giảm 20% dành cho khách hàng lần đầu đặt dịch vụ của nhà xe tại Vexere
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='	https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/254/img_card.png?v=37'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Giảm 50% cho đơn hàng dịch vụ xe khách Hải Phòng Travel tại Vexere
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/166/img_card.png?v=4'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Giới thiệu bạn mới - Nhận quà khủng từ Vexere
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='	https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/308/img_card.png?v=6'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Đặt xe khách tại Vexere - Thuê thêm xe máy giảm đến 20%
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/220/img_card.png?v=38'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Nhận ưu đãi x2 khi đặt dịch vụ xe khách khứ hồi
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='	https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/137/img_card.png?v=7'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Tổng hợp chương trình khuyến mãi trong tháng
                    </div>
                </div>
            </div>

            <div className='scroll-list-item-udnb' style={{ width: 300,height:250 }}>
                <img
                    className='item-image'
                    src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/210/img_card.png?v=6'
                    alt='item-img'
                />
                <div className='item-content'>
                    <div className='item-content-title'>
                        Giảm đến 25% cho khách hàng lần đầu tiên đặt dịch vụ tại Vexere
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default DynamicSlidesContentUDNB;
