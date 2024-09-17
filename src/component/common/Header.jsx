
// import icon
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';

import '../css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                    <img
                        src='https://storage.googleapis.com/fe-production/svgIcon/icon_vxr_full_2.svg'
                        alt='Vexere Logo'
                    />
                </div>
                <a
                    href='https://vexere.com/vi-VN/nhung-cau-hoi-thuong-gap.html'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='header-title rtb'
                >
                    Cam kết hoàn 150% nếu nhà xe không cung cấp dịch vụ vận chuyển
                    <span>
                        <InfoOutlinedIcon fontSize='small' />
                    </span>
                </a>
            </div>
            <div className='header-right'>
                <div className='menu'>
                    <li>
                        <a href='#'>Đơn hàng của tôi</a>
                    </li>
                    <li>
                        <a href='#'>Mở bán vé trên Vexere</a>
                    </li>
                    <li>
                        <a href='#' className='menu-item'>
                            Trở thành đối tác
                            <div className='material-icon'>
                                <ArrowDropDownIcon fontSize='small' />
                                {/* <span className='material-symbols-outlined'>arrow_drop_down</span> */}
                            </div>
                        </a>
                    </li>
                    <div className='language'>
                        <img src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/en-flag.svg' alt='English Flag' />
                    </div>
                    <div className='hotline btn-menu'>
                        <PhoneIcon fontSize='small' />
                        Hotline 24/7
                    </div>
                    <Link to='/login'>
                        <div className='login btn-menu'>Đăng nhập</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
