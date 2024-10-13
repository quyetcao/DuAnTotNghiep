// import css
import '../css/quanLyDatVeXe.css';

// import mui icon
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';



export default function quanLyDatVeXe() {
    return (
        <>
            <div className='container quanLyDatVeXe'>
                {/* Phần thanh điều hướng dọc */}
                <div className='sidebar'>
                    <a href='#' className='sidebar-icon'>
                        <DashboardOutlinedIcon />
                    </a>
                    <a href='#' className='sidebar-icon'>
                        <ConfirmationNumberOutlinedIcon />
                    </a>
                    <a href='#' className='sidebar-icon'>
                        <SignalCellularAltOutlinedIcon />
                    </a>
                    <a href='#' className='sidebar-icon'>
                        <GroupsOutlinedIcon />
                    </a>
                    <a href='#' className='active sidebar-icon'>
                        <DirectionsBusFilledOutlinedIcon />
                    </a>
                    <a href='#' className='sidebar-icon'>
                        <ForumOutlinedIcon />
                    </a>
                    <a href='#' className='sidebar-icon'>
                        <BuildOutlinedIcon />
                    </a>
                </div>
                {/* Phần dashboard */}
                <div className='dashboard'>
                    {/* phần thanh dashboard ngang */}
                    <div className='dashboard-container'>
                        <div className='wrapper-top m-4'>
                            <div className='form-search'>
                                <div className='search-container'>
                                    <SearchOutlinedIcon style={{ color: '#6e6e6e' }} />
                                    <input type='text' placeholder='Tìm kiếm SĐT, Mã vé, Tên hành khách' />
                                </div>
                            </div>
                            <div className='form-info'>
                                <ul className='info-list'>
                                    <li className='info-item'>
                                        <p className='heading-title'>Phần mền nhà xe</p>
                                        <ExpandMoreOutlinedIcon />
                                    </li>
                                    <li className='info-item border-item'>
                                        <p className='heading-title'>4.5</p>
                                        <StarOutlinedIcon style={{ color: '#FFD43B' }} />
                                    </li>
                                    <li className='info-item'>
                                        <span className='border-right' />
                                    </li>
                                    <li className='info-item'>
                                        <p className='heading-title'>Duy Anh</p>
                                    </li>
                                    <li className='info-item info-item__background'>
                                        <NotificationsIcon fontSize='small' />
                                    </li>
                                    <li className='info-item info-item__background'>
                                        <ArrowDropDownIcon fontSize='small' />
                                    </li>
                                    <li className='info-item info-item__background'>
                                        <LocalPhoneIcon fontSize='small' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* phần lõi */}
                    <div className='dashboard-center'>
                        {/* phần đầu */}
                        <div>

                        </div>
                        {/* Phần giữa */}
                        <div className="trip-info">
                            <div className="trip-header">
                                <span>Thuộc chuyến 09:30 ngày 20/02/2020 tuyến Nghệ An - Hà Nội</span>
                                <a href="#" className="update-info-link">Cập nhật thông tin</a>
                            </div>
                            <div className="trip-content">
                                <div className="trip-details">
                                    <p><strong>Thông tin chuyến</strong></p>
                                    <p>Loại xe: Giường nằm 40 chỗ (Có WC)</p>
                                    <p>Số xe: <a href="#">29B1-123.45</a> (<a href="tel:0987654321">0987.654.321</a>)</p>
                                    <p>Tài xế: Nguyễn Ngọc Duy Anh (<a href="tel:0987654321">0987.654.321</a>)</p>
                                    <p>Phụ xe: Nguyễn Ngọc Duy Anh (<a href="tel:0987654321">0987.654.321</a>)</p>
                                    <p>Ghi chú: Đây là text nhập cho phần ghi chú cho dài thật dài thêm dài thêm dài thêm dài thêm dài dài dài</p>
                                </div>
                                <div className="trip-stats">
                                    <p><strong>Thống kê chuyến</strong></p>
                                    <div className="progress-bar">
                                        <div className="filled" style={{ width: '75%' }}></div>
                                    </div>
                                    <p>30/40 (75%)</p>
                                    <div className="stats-details">
                                        <span>Thanh toán: 20 vé</span>
                                        <span>Đặt chỗ: 10 vé</span>
                                        <span>Trống: 10 vé</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* phần cuối */}
                        <div>

                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}