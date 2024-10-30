import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import DiscountIcon from '@mui/icons-material/Discount';
import ErrorIcon from '@mui/icons-material/Error';
import Avatar from '@mui/material/Avatar';
import '../css/viewcxresponsive.css'
export default function DanhSachChuyenXeResponsive() {

    return (
        <>
            <div className="chuyen-xe-responsive">
                <div className="ticker-res">
                    <div className="icon-sale">
                    </div>
                    <div className="ticker-thoi-gian">
                        <div className="show-time">
                            <div className="time-di cx-tg-font">17:00</div>
                            <div className="tong-thoi-gian">2 giờ 40 phút</div>
                            <div className="time-den cx-tg-font">19:40</div>
                        </div>
                        <div className="dia-diem-don-tra-khach">
                            <div className="location-go">
                                <p>Văn Phòng 61 Trần Đăng Ninh</p>
                            </div>
                            <div className="location-to">
                                <p>Văn Phòng 97 Hùng Vương</p>
                            </div>
                        </div>
                    </div>
                    <div className="ticker-info-nha-xe">
                        <div className="imga-cx">
                            <Avatar alt="Remy Sharp" src="../../images/img_page_viewchuyenxe/hinh-nen-gai-xinh-viet-nam-mac-vay-hoa.jpg" sx={{ width: 50, height: 50 }} />
                            <div className="name-nhaxe">
                                <div className='bus-name'>Hải Phòng Travel (Đất Cảng)</div>
                                <div className="sl-ghe-of-xe">
                                    Ghế ngồi 16 chỗ
                                </div>
                            </div>
                        </div>
                        <div className='bus-rating'>
                            <StarOutlinedIcon style={{ fontSize: '16px' }} />
                            <span> 824 Đánh giá</span>
                        </div>
                    </div>
                    <div className="ticker-info-price">
                        <div className="ticker-info-price-right">
                            <div className="price-old">150.000đ</div>
                            <div className="ticker-info-price-center">
                                <div className="sl-ghe-con">
                                    còn 11 chỗ trống
                                </div>
                                <div className="price-now">120.000đ</div>
                            </div>
                            <div className="title-pay">KHÔNG CẦN THANH TOÁN TRƯỚC</div>
                        </div>
                    </div>
                    <div className="tiker-bottom">
                        <div className="icon-info-ticker">
                            <DiscountIcon />
                            Thông Báo
                        </div>
                        <div className="title-info-ticker">
                            Đón trả tận nơi tại Hải Phòng
                            <ErrorIcon />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
