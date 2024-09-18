
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
// import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/user/layout-Page-tk.css';


export default function LayoutPageTaiKhoan() {
   
    return (
        <>
        <div className="layout-page-tk">
           
            <div className="slider-bar">
                <ul>
                    <li><AccountCircleIcon/>
                    <p>Thông tin tài khoản</p>
                    </li>
                    <li><LoyaltyIcon/>
                    <p>Thành viên thường</p>
                    
                    </li>
                    <li><ConfirmationNumberIcon/>
                    <p>Đơn hàng của tôi</p>
                    </li>
                    <li><RedeemIcon/>
                    <p>Ưu đãi</p>
                    </li>
                    <li><PaymentIcon/>
                    <p>Quản lý thẻ</p>
                    </li>
                    <li><RateReviewIcon/>
                    <p>Nhận xét chuyến đi</p>
                    </li>
                    <li><LogoutIcon/>
                    <p>Đăng xuất</p>
                    </li>
                </ul>
            </div>
            </div>



        </>
    )
}