import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
// import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/user/layout-Page-tk.css';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function LayoutPageTaiKhoan() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Trang chủ
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Tài khoản
        </Link>,
        <Typography key="3" sx={{ color: 'text.primary' }}>
            Thông tin tài khoản
        </Typography>,
    ];
    return (
        <>
        <div className="layout-page-tk">
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
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