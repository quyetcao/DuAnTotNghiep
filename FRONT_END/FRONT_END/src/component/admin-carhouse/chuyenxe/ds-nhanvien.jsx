import '../../css/ds-nhanvien.css';

// import mui icon
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect, useRef } from 'react';

export default function DSNhanVien() {
    // code logic
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    // Tạo ref để tham chiếu đến div chứa menu
    const menuRef = useRef(null);
    // Hàm ẩn menu khi click ra ngoài vùng menu
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };
    useEffect(() => {
        // Lắng nghe sự kiện click trên toàn document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener khi component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='ds-nhanvien'>
            {/* <div className='sidebar sidebar-border__right '>
                <a href='#'>
                    <NotesOutlinedIcon />
                </a>

                <a href='#'>
                    <DashboardOutlinedIcon />
                </a>

                <a href='#'>
                    <BadgeOutlinedIcon />
                </a>

                <a href='#'>
                    <DirectionsBusFilledOutlinedIcon />
                </a>

                <a href='#' className='active'>
                    <PersonIcon />
                </a>

                <a href='#'>
                    <ReviewsIcon />
                </a>

                <a href='#'>
                    <SettingsIcon />
                </a>
            </div> */}

            <div className='header-staff'>
                <div className='header-container'>
                    {/* <div className='wrapper-top m-4'>
                        <div className='form-search'>
                            <div className='search-container'>
                                <SearchIcon style={{ color: '#6e6e6e' }} />
                                <input type='text' placeholder='Tìm kiếm Số điện thoại, Mã vé' />
                            </div>
                        </div>
                        <div className='form-info'>
                            <ul className='info-list'>
                                <li className='info-item'>
                                    <p className='heading-title'>Phần mền nhà xe</p>
                                    <KeyboardArrowDownIcon />
                                </li>
                                <li className='info-item'>
                                    <p className='heading-title'>VIPBUS</p>
                                    <KeyboardArrowDownIcon />
                                </li>

                                <li className='info-item border-item'>
                                    <p className='heading-title heading-title__bold'>4.5</p>
                                    <StarIcon style={{ color: '#FFD43B' }} />
                                </li>

                                <li className='info-item'>
                                    <span className='border-right'></span>
                                </li>
                                <li className='info-item'>
                                    <p className='heading-title'>Duy Anh</p>
                                </li>
                                <li className='info-item info-item__background'>
                                    <NotificationsIcon fontSize='small' style={{ color: '#202020' }} />
                                    <span className='info-item__notification'></span>
                                </li>
                                <li className='info-item info-item__background-select'>
                                    <ArrowDropDownIcon fontSize='small' style={{ color: '#202020' }} />
                                </li>
                                <li className='info-item info-item__background'>
                                    <PhoneIcon fontSize='small' style={{ color: '#202020' }} />
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className='employee-list'>
                        <h2 className='empolyee-title'>Danh sách nhân viên</h2>
                        <div className='add-employee employee-background'>
                            <AddIcon style={{ fontSize: '20px', color: '#fff' }} />
                            <span className='employee-text'>Thêm nhân viên</span>
                        </div>
                    </div>
                    <div className='active'>
                        <div className='active-list'>
                            <p className='active-heading active-select'>Tất cả</p>
                            <p className='active-heading'>Nhân viên</p>
                            <p className='active-heading'>Tài xế</p>
                            <p className='active-heading'>Phụ xe</p>
                            <p className='active-heading'>Hướng dẫn viên</p>
                        </div>
                    </div>
                    <div className='input-search'>
                        <div className='search-form'>
                            <SearchIcon style={{ color: '#6e6e6e' }} />
                            <input type='text' placeholder='Tìm kiếm tên, số điện thoại' />
                        </div>
                    </div>
                    <div className='table-group'>
                        <table>
                            <tr className='table-list__heading'>
                                <th className='table-heading'>Tên</th>
                                <th className='table-heading'>Tài khoản</th>
                                <th className='table-heading'>Thông tin liên hệ</th>
                                <th className='table-heading'>Thông tin cá nhân</th>
                                <th className='table-heading'>Chi nhánh</th>
                                <th className='table-heading'>Trạng thái</th>
                                <th className='table-heading'></th>
                            </tr>
                            <tr className='table-tr__td'>
                                <td className='table-tr__td-name'>Nguyễn Văn A</td>
                                <td>nguyen.xyz</td>
                                <td>0987765432</td>
                                <td>Nam</td>
                                <td>Văn phòng A</td>
                                <td rowSpan='2'>
                                    <span className='item-table__select'>Đang làm việc</span>
                                    {/* <span className="item-table__disable">Đã nghỉ việc</span> */}
                                </td>
                                <td rowSpan='2'>
                                    <span className='item-active' onClick={toggleMenu}>
                                        <MoreVertIcon className='item-active__icon-active' fontSize='small' />
                                    </span>
                                    {isMenuVisible && (
                                        <div className='account-management' ref={menuRef}>
                                            <ul>
                                                <li className='border-bottom__account'>Chỉnh sửa</li>
                                                <li className='border-bottom__account'>Khóa tài khoản</li>
                                                <li className='border-bottom__account'>Đặt lại mật khẩu</li>
                                                <li>Xóa nhân viên</li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr className='table-tr__td'>
                                <td>Nhân viên</td>
                                <td>Admin</td>
                                <td>nguyenvana@gmail.com</td>
                                <td>12/12/2000</td>
                                <td>Văn phòng A + 2 khác</td>
                            </tr>
                        </table>
                    </div>

                    <div className='page-button'>
                        <div className='page-list nothing'>
                            <div className='page-list__item'>
                                <ChevronLeftIcon style={{ color: '#6e6e6e' }} />
                            </div>
                            <div className='page-list__item'>1</div>
                            <div className='page-list__item'>2</div>
                            <div className='page-list__item'>3</div>
                            <div className='page-list__item'>...</div>
                            <div className='page-list__item'>9</div>
                            <div className='page-list__item'>10</div>
                            <div className='page-list__item'>
                                <ChevronRightIcon style={{ color: '#6e6e6e' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
