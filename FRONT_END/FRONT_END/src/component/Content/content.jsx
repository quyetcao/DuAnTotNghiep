import '../css/contentcuatui.css';
import DynamicSlidesContentTDPB from './slickContent-1';
import DynamicSlidesContentUDNB from './slickContent-2';
import PauseOnHoverContent3 from './slickContent-3';

export default function Content() {
    return (
        <div className='content'>
            <div className='tuyen-duong'>
                <h1 className='content-heading__text'>Tuyến đường phổ biến</h1>
                  <DynamicSlidesContentTDPB />
            </div>
          
            {/* ưu đãi nổi bật */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Ưu đãi nổi bật</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                {/* <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/163/img_card.png?v=147'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thứ 3 hàng tuần - Flash Sale đến 50%</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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
                                </div> */}

                            </div>
                        </div>
                    </div>

                    <DynamicSlidesContentUDNB />
                </div>
            </div>

            {/* Ưu đãi từ đối tác của Vexere */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Ưu đãi từ đối tác của Vexere</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/163/img_card.png?v=147'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Giảm thêm đến 60K khi thanh toán bằng ví MoMo trong khung giờ Flash Sale
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/294/img_card.png?v=4'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Giảm đến 100K khi thanh toán dịch vụ xe khách bằng Thẻ Tín dụng HDSAISON
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/160/img_card.png?v=26'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Nhận ưu đãi dịch vụ xe khách 500K khi mở thẻ tín dụng VIB tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/156/img_card.png?v=46'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Giảm 10K khi thanh toán đơn hàng Vexere từ 100K bằng ví ShopeePay
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/208/img_card.png?v=52'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Giảm đến 30K khi thanh toán dịch vụ Vexere bằng ví VNPAY
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/306/img_card.png?v=2'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Nhận ưu đãi di chuyển Grab đến 50K khi đặt dịch vụ xe khách tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/305/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Giảm 20% khi mua SIM/eSIM du lịch Gohub dành riêng cho khách hàng của Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/295/img_card.png?v=7'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Mừng sinh nhật Vexere - Tặng ưu đãi mua trang sức PNJ giảm đến 800K
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vexere có gì mới? */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Vexere có gì mới?</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                {/* <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/217/img_card.png?v=6'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Vexere chính thức ra mắt dịch vụ đặt vé tàu hỏa
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/200/img_card.png?v=18'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            “Bảo hiểm chuyến đi” chính thức ra mắt tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/178/img_card.png?v=6'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Thuê xe máy giá rẻ, chất lượng tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
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

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/175/img_card.png?v=6'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Xe buýt Hop On Hop Off ở Thành phố Hồ Chí Minh
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <PauseOnHoverContent3/>
                </div>
            </div>

            {/* Tính năng mới */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Tính năng mới</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/198/img_card.png?v=17'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Chủ động và an tâm hơn trong mọi hành trình với tính năng GPS định vị xe
                                            khách
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/289/img_card.png?v=10'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Cách sử dụng tính năng GPS xem vị trí xe khách
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/288/img_card.png?v=7'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Các tuyến đường/nhà xe có hỗ trợ tính năng xem vị trí xe
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/290/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Bí kíp chọn xe khách chất lượng cao tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/302/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Tìm xe theo nhu cầu dựa trên các tiêu chí phổ biến
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/301/img_card.png?v=4'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Cách chọn điểm đón xe gần bạn nhất</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thuê xe máy */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Thuê xe máy</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/244/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Đà Lạt</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/248/img_card.png?v=4'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Nha Trang</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/245/img_card.png?v=4'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Vũng Tàu</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/209/img_card.png?v=23'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Phan Thiết - Mũi Né</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/238/img_card.png?v=7'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Sapa</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/240/img_card.png?v=10'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Hà Giang</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/285/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Điện Biên</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/283/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Quy Nhơn</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/250/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Đà Nẵng</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/251/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe máy tại Huế</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thuê xe du lịch */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Thuê xe du lịch</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/256/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Vũng Tàu</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/259/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Mũi Né</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/255/img_card.png?v=6'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Đà Lạt</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/260/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Hồ Tràm</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/261/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Tây Ninh</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/262/img_card.png?v=2'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Long Hải</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/263/img_card.png?v=2'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Thuê xe Sài Gòn đi Đồng Nai</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tin tức */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Tin tức</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/307/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Hướng dẫn tạo yêu cầu bồi thường bảo hiểm khi xảy ra thiên tai, bão lũ
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/292/img_card.png?v=16'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Vexere kỷ niệm 11 năm đồng hành cùng hàng triệu khách hàng, 2000+ nhà xe và
                                            5000+ đại lý toàn quốc
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/212/img_card.png?v=26'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Chương trình tích điểm đổi quà tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/194/img_card.png?v=1'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            [Phóng sự HTV9] Vexere và công cuộc cách mạng hoá ngành vận tải hành khách
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/176/img_card.png?v=4'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            [Phóng sự VTV9] Đặt dịch vụ xe khách nhanh chóng, tiện lợi, nhiều ưu đãi tại
                                            Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/172/img_card.png?v=2'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Bộ Thông tin - Truyền thông công nhận Vexere là Nền tảng số phục vụ người
                                            dân 2022
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/291/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Bí kíp săn deal xe khách giá hời khi đặt dịch vụ tại Vexere
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dành cho đối tác của Vexere */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Dành cho đối tác của Vexere</p>
                    <div className='category-content-container'>
                        <div className='scroll-list-container'>
                            <div className='scroll-list'>
                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/157/img_card.png?v=12'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Đăng ký mở bán tại Vexere</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/213/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Phần mềm Quản lý đặt dịch vụ Vexere</div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/214/img_card.png?v=3'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Phần mềm Quản lý hàng hoá xe khách Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/215/img_card.png?v=8'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Nhận ngay tiền thường khi giới thiệu Phần mềm Nhà xe Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/159/img_card.png?v=9'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Lợi ích khi sử dụng hoá đơn điện tử cung cấp bởi Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/195/img_card.png?v=6'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>
                                            Đăng ký treo banner quảng cáo tại Vexere
                                        </div>
                                    </div>
                                </div>

                                <div className='scroll-list-item'>
                                    <img
                                        className='item-image'
                                        src='https://f1e425bd6cd9ac6.cmccloud.com.vn/cms-tool/post/images/123/img_card.png?v=5'
                                        alt='item-img'
                                    />
                                    <div className='item-content'>
                                        <div className='item-content-title'>Ứng dụng Quản lý nhà xe của Vexere</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Feedback*/}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Khách hàng nói gì về Vexere</p>
                    <div className='feedback'>
                        <div className='feedback-container'>
                            <div className='feedback-body'>
                                <div className='feedback-author'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/images/testimonial-quynh.jpg'
                                        alt=''
                                    />
                                    <div className='feedback-text'>
                                        <p className='feedback-text__name'>Anh Nguyễn Tuấn Quỳnh</p>
                                        <p className='feedback-text__content'>CEO Saigon Books</p>
                                    </div>
                                </div>
                                <div className='feedback-content'>
                                    <p className='content-author'>
                                        Lần trước tôi có việc gấp phải đi công tác, lên mạng tìm đặt vé xe thì tình cờ
                                        tìm thấy Vexere. Sau khi tham khảo, tôi quyết định đặt vé và thanh toán. Công
                                        nhận rất tiện và nhanh chóng. Chỉ một lúc sau, nhà xe liên hệ xác nhận vé ngay
                                        và thông báo thời gian xe dự kiến đón để tôi chuẩn bị. Tôi khá bất ngờ vì nhà xe
                                        có thông tin của mình nhanh đến vậy. Chuyến đi hôm đó rất tuyệt. Tôi nhất định
                                        sẽ tiếp tục ủng hộ Vexere.
                                    </p>
                                </div>
                            </div>

                            <div className='feedback-body'>
                                <div className='feedback-author feedback-author__2'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/images/testimonial-phi.jpg'
                                        alt=''
                                    />
                                    <div className='feedback-text'>
                                        <p className='feedback-text__name'>Shark Phi</p>
                                        <p className='feedback-text__content'>Giám đốc BSSC</p>
                                    </div>
                                </div>
                                <div className='feedback-content'>
                                    <p className='content-author'>
                                        Các đối tác của Vexere đều là những hãng xe lớn, có uy tín nên tôi hoàn toàn yên
                                        tâm khi lựa chọn đặt vé cho bản thân và gia đình. Nhờ hiển thị rõ nhà xe và vị
                                        trí chỗ trống trên xe, tôi rất dễ dàng tìm chuyến mình muốn và chỗ mình muốn
                                        ngồi. Còn hình thức thanh toán có cả thẻ, ví, tại nhà xe và tốc độ thanh toán
                                        thì siêu nhanh, tiết kiệm cho tôi rất nhiều thời gian.
                                    </p>
                                </div>
                            </div>

                            <div className='feedback-body'>
                                <div className='feedback-author'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/images/testimonial-tu-ngo.jpg'
                                        alt=''
                                    />
                                    <div className='feedback-text'>
                                        <p className='feedback-text__name'>Chị Tú Ngô</p>
                                        <p className='feedback-text__content'>YOLA Co-Founder</p>
                                    </div>
                                </div>
                                <div className='feedback-content'>
                                    <p className='content-author'>
                                        Vexere là ứng dụng đầu tiên tôi nghĩ tới khi cần đặt vé xe. Vì không những
                                        Vexere có nhiều ưu đãi lớn mà còn có nhiều hãng xe chất lượng, tôi được tuỳ chọn
                                        chỗ yêu thích nên tôi rất hài lòng.
                                    </p>
                                </div>
                            </div>

                            <div className='feedback-body'>
                                <div className='feedback-author'>
                                    <img
                                        src='https://229a2c9fe669f7b.cmccloud.com.vn/images/testimonial-buuvivu.jpg'
                                        alt=''
                                    />
                                    <div className='feedback-text'>
                                        <p className='feedback-text__name'>Bữu Vi Vu</p>
                                        <p className='feedback-text__content'>Travel tiktoker</p>
                                    </div>
                                </div>
                                <div className='feedback-content'>
                                    <p className='content-author'>
                                        Tôi thường chọn đặt vé tại Vexere mỗi khi du lịch cùng người thân, bạn bè. Bên
                                        cạnh việc đặt vé nhanh chóng, thuận tiện, Vexere còn có các đợt Flashsale định
                                        kỳ lên đến 50%. Săn vé thành công vào các dịp này giúp tôi tiết kiệm đáng kể chi
                                        phí đi lại cho mỗi chuyến đi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className='slick-dot'>
                        <li>
                            <button data-index='0' className='slick-dot-select'></button>
                        </li>
                        <li>
                            <button data-index='1'></button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Nền tảng kết nối người dùng và nhà xe */}
            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Nền tảng kết nối người dùng và nhà xe</p>
                    <div className='cart-connect'>
                        <div className='connect-item'>
                            <div className='icon-connect'>
                                <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/bus-car-icon.svg' alt='' />
                            </div>
                            <div className='connect-body'>
                                <p className='connect-body__title'>2000+ nhà xe chất lượng cao</p>
                                <p className='connect-body__text'>
                                    5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.
                                </p>
                            </div>
                        </div>
                        <div className='connect-item'>
                            <div className='icon-connect'>
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/yellow-ticket-icon.svg'
                                    alt=''
                                />
                            </div>
                            <div className='connect-body'>
                                <p className='connect-body__title'>Đặt vé dễ dàng</p>
                                <p className='connect-body__text'>
                                    Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.
                                </p>
                            </div>
                        </div>
                        <div className='connect-item'>
                            <div className='icon-connect'>
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/completement-icon.svg'
                                    alt=''
                                />
                            </div>
                            <div className='connect-body'>
                                <p className='connect-body__title'>Chắc chắn có chỗ</p>
                                <p className='connect-body__text'>
                                    Hoàn ngay 150% nếu nhà xe không cung cấp dịch vụ vận chuyển, mang đến hành trình
                                    trọn vẹn.
                                </p>
                            </div>
                        </div>
                        <div className='connect-item'>
                            <div className='icon-connect'>
                                <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/coupon-icon.svg' alt='' />
                            </div>
                            <div className='connect-body'>
                                <p className='connect-body__title'>Nhiều ưu đãi</p>
                                <p className='connect-body__text'>Hàng ngàn ưu đãi cực chất độc quyền tại Vexere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box'>
                <div className='category-container img-container'>
                    <p className='content-heading__text'>Vexere đã được nhắc đến trên</p>
                    <div className='group-img'>
                        <div className='img-list'>
                            <a
                                href='https://vnexpress.net/vexere-ho-tro-5-000-ve-tet-2021-cho-sinh-vien-4211920.html'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-vne.png'
                                    alt='express'
                                />
                            </a>
                            <a href='https://www.youtube.com/watch?v=du_TpvYVNg0' target='_blank' rel='noreferrer'>
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-vtv.png'
                                    alt='vtv'
                                />
                            </a>
                            <a
                                href='http://cesti.gov.vn/chi-tiet/3403/doi-moi-sang-tao/khoi-nghiep-voi-he-thong-ban-ve-xe-truc-tuyen'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-cesti.png'
                                    alt='cesti'
                                />
                            </a>
                            <a
                                href='https://dantri.com.vn/kinh-doanh/cong-ty-co-phan-ve-xe-re-goi-von-thanh-cong-tu-cac-nha-dau-tu-uy-tin-20191225100127703.htm'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-dantri.png'
                                    alt='dan-tri'
                                />
                            </a>
                            <a
                                href='https://tuoitre.vn/blog/quy-dau-tu-nhat-va-singapore-tiep-suc-vexerecom-767367.htm'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-tuoitre.png'
                                    alt='tuoi-tre'
                                />
                            </a>
                            <a href='https://www.youtube.com/watch?v=qT30wzsFKGw' target='_blank' rel='noreferrer'>
                                <img
                                    src='https://229a2c9fe669f7b.cmccloud.com.vn/images/logo-baochi/logo-fbnc.png'
                                    alt='fbnc'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='box'>
                <div className='category-container'>
                    <p className='content-heading__text'>Bến xe khách</p>
                    <div className='bus-home'>
                        <div className='list-bus'>
                            <div className='overlay'></div>
                            <img
                                className='img-list-bus'
                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bx-mien-dong.jpg'
                                alt='Bến xe Miền Đông'
                            />
                            <p className='text-overlay'>Bến xe Miền Đông</p>
                        </div>
                        <div className='list-bus'>
                            <div className='overlay'></div>
                            <img
                                className='img-list-bus'
                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bx-gia-lam.jpg'
                                alt='Bến xe Gia Lâm'
                            />
                            <p className='text-overlay'>Bến xe Gia Lâm</p>
                        </div>
                        <div className='list-bus'>
                            <div className='overlay'></div>
                            <img
                                className='img-list-bus'
                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bx-nuoc-ngam.jpg'
                                alt='Bến xe Nước Ngầm'
                            />
                            <p className='text-overlay'>Bến xe Nước Ngầm</p>
                        </div>
                        <div className='list-bus'>
                            <div className='overlay'></div>
                            <img
                                className='img-list-bus'
                                src='https://229a2c9fe669f7b.cmccloud.com.vn/images/bx-my-dinh.jpg'
                                alt='Bến xe Mỹ Đình'
                            />
                            <p className='text-overlay'>Bến xe Mỹ Đình</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
