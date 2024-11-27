import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
// import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import '../css/user/layout-Page-tk.css';

export default function LayoutPageTaiKhoan() {
    return (
        <>
            <div className='layout-page-tk'>
                <div className='slider-bar'>
                    <ul className='tk-list'>
                        <li className='tk-select-item'>
                            <AccountCircleOutlinedIcon />
                            <p>Thông tin tài khoản</p>
                        </li>
                        <li className='tk-select-item'>
                            <LoyaltyOutlinedIcon />
                            <p>Thành viên thường</p>
                        </li>
                        <li className='tk-select-item'>
                            <ConfirmationNumberOutlinedIcon />
                            <p>Đơn hàng của tôi</p>
                        </li>
                        <li className='tk-select-item'>
                            <RedeemIcon />
                            <p>Ưu đãi</p>
                        </li>
                        <li className='tk-select-item'>
                            <PaymentIcon />
                            <p>Quản lý thẻ</p>
                        </li>
                        <li className='tk-select-item'>
                            <RateReviewOutlinedIcon />
                            <p>Nhận xét chuyến đi</p>
                        </li>
                        <li className='tk-select-item'>
                            <LogoutIcon />
                            <p>Đăng xuất</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
