import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
// import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import '../css/user/layout-Page-tk.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dangxuattaikhoan } from '../../redux/admin-vexere/user/asynThunk-user';

export default function LayoutPageTaiKhoan() {

    const dispath = useDispatch();
    const navigate=useNavigate();

    const token =localStorage.getItem('access_token');
    function logout() {
        const a = confirm('Bạn thật sự có muốn đăng xuất?');
        if (a) {
            dispath(dangxuattaikhoan(token))
            navigate('/')
            window.location.reload();
            
        }else{
            return a;
        }

    }

    return (
        <>
            <div className='layout-page-tk'>
                <div className='slider-bar'>
                    <ul className='tk-list'>
                        <li className='tk-select-item'>
                            <AccountCircleOutlinedIcon />
                            <p>Thông tin tài khoản</p>
                        </li>
                        <Link to=''>
                            <li className='tk-select-item'>
                                <LoyaltyOutlinedIcon />
                                <p>Thành viên thường</p>
                            </li>
                        </Link>
                        <Link to='/taikhoan/don-hang-cua-toi/'>
                            <li className='tk-select-item'>
                                <ConfirmationNumberOutlinedIcon />
                                <p>Đơn hàng của tôi</p>
                            </li>
                        </Link>
                        <Link to=''>
                            <li className='tk-select-item'>
                                <RedeemIcon />
                                <p>Ưu đãi</p>
                            </li>
                        </Link>
                        <Link to=''>
                            <li className='tk-select-item'>
                                <PaymentIcon />
                                <p>Quản lý thẻ</p>
                            </li>
                        </Link>
                        <Link to=''>
                            <li className='tk-select-item'>
                                <RateReviewOutlinedIcon />
                                <p>Nhận xét chuyến đi</p>
                            </li>
                        </Link>
                        <li className='tk-select-item' onClick={logout}>
                            <LogoutIcon />
                            <p>Đăng xuất</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
