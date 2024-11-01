import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import '../../css/responsive-css/selectSeatResponsive.css'
export default function SelectSeatResponsive() {
    return (
        <>
            <div className="header-responsive-pay-step1">
                <div className="header-rs-pay-left">
                    <KeyboardBackspaceIcon />
                    <div className="thong-tin-chuyen-xe-responsive">
                        <div className="name-cx-res">
                            Anh Huy Travel
                        </div>
                        <div className="thoi-gian-res">
                            16:30 &#8901; T4,30/10/2024
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-responsive-select-seat">
                <div className='coupon-info-route-page-container'>
                    <div className='giamgia'>
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
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
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
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
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
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
                        <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                        <div className='thong-tin-ve-giam'>
                            <div className='title-giam-gia'>
                                Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
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

            <div className="view-select-seat">

            </div>
            <div className="view-call-select-seat"></div>
            <div className="view-select-quantity-ticker">
                <div className="title-select-quantity">
                    <p>Chuyến này không hỗ trợ chọn chỗ.</p>
                    <p>Quý khách vui lòng chọn số lượng vé.</p>
                </div>
                <div className="view-chon-slg">
                    <div className="slg-left">
                        <p>Ghế Thường:</p>
                        <p>120.000đ/ghế</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}