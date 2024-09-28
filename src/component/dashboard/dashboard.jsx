import '../css/dashboard.css';

// import chart
import PieChart from './chart_thongke/piechar';
// import BarChart from './chart_thongke/BarChart';

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


export default function Dashboard() {

    // git 
    return (
        <div className="container">
            {/* Phần sidebar */}
            <div className="sidebar">
                <a href="#" className='sidebar-icon'><DashboardOutlinedIcon /></a>
                <a href="#" className='sidebar-icon'><ConfirmationNumberOutlinedIcon /></a>
                <a href="#" className='sidebar-icon'><SignalCellularAltOutlinedIcon /></a>
                <a href="#" className='sidebar-icon'><GroupsOutlinedIcon /></a>
                <a href="#" className="active sidebar-icon"><DirectionsBusFilledOutlinedIcon /></a>
                <a href="#" className='sidebar-icon'><ForumOutlinedIcon /></a>
                <a href="#" className='sidebar-icon'><BuildOutlinedIcon /></a>
            </div>
            {/* Phần dashboard */}
            <div className="dashboard">
                {/*  */}
                <div className="dashboard-container">
                    <div className="wrapper-top m-4">
                        <div className="form-search">
                            <div className="search-container">
                                <SearchOutlinedIcon />
                                <input type="text" placeholder="Tìm kiếm SĐT, Mã vé, Tên hành khách" />
                            </div>
                        </div>
                        <div className="form-info">
                            <ul className="info-list">
                                <li className="info-item">
                                    <p className="heading-title">Phần mền nhà xe</p>
                                    <ExpandMoreOutlinedIcon />
                                </li>
                                <li className="info-item border-item">
                                    <p className="heading-title">4.5</p>
                                    <StarOutlinedIcon style={{ color: '#FFD43B' }} />
                                </li>
                                <li className="info-item">
                                    <span className="border-right" />
                                </li>
                                <li className="info-item">
                                    <p className="heading-title">Duy Anh</p>
                                </li>
                                <li className="info-item info-item__background">
                                    <NotificationsIcon />
                                </li>
                                <li className="info-item info-item__background">
                                    <ArrowDropDownIcon />
                                </li>
                                <li className="info-item info-item__background">
                                    <LocalPhoneIcon />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="dashboard-center">
                    {/* Phần bảng điều khiển trên */}
                    <div className="dashboard-top">
                        <h2 className="heading-text">Dashboard</h2>
                        <div className="dashboard-right">
                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                            <div className="dashboard-group">
                                <div className="group-item">
                                    <CalendarMonthOutlinedIcon className="icon-color-blue" />
                                    <span className="group-title">Tháng này</span>
                                </div>
                                <div className="group-item">
                                    <ExpandMoreOutlinedIcon className="icon-color-blue" />
                                </div>
                            </div>
                            <div className="dashboard-group background-primary">
                                <div className="group-item">
                                    <AddOutlinedIcon />
                                    <span className="group-title">THÊM BẢNG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phần các mục thống kê */}
                    <div className="thongke">
                        <div className="thongke-list"> {/* 4 bảng thống kê hàng - 1 */}
                            {/* thongke-list_1 */}
                            <div className="thongke-item">
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <i className="icon-return fa-solid fa-rotate-right" style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className="thongke-title">Doanh thu vé (VND)</p>
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text__percent ml-icon">-20%</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <span className="thongke-heading">1.234.567</span>
                                    </div>
                                </div>
                            </div>

                            {/* thongke-list_2 */}
                            <div className="thongke-item">
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <i className="icon-return fa-solid fa-rotate-right" style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className="thongke-title">Doanh thu vé (VND)</p>
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text__percent ml-icon">-20%</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <span className="thongke-heading">1.234.567</span>
                                    </div>
                                </div>
                            </div>

                            {/* thongke-list_3 */}
                            <div className="thongke-item">
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <i className="icon-return fa-solid fa-rotate-right" style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className="thongke-title">Doanh thu vé (VND)</p>
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text__percent ml-icon">-20%</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <span className="thongke-heading">1.234.567</span>
                                    </div>
                                </div>
                            </div>

                            {/* thongke-list_4 */}
                            <div className="thongke-item">
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <i className="icon-return fa-solid fa-rotate-right" style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className="thongke-title">Doanh thu vé (VND)</p>
                                <div className="thongke-item-group">
                                    <div className="thongke-item__left">
                                        <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        <span className="thongke-text__percent ml-icon">-20%</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <span className="thongke-heading">1.234.567</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 bảng thống kê hàng - 2 */}
                        <div className='thongke-list top'>
                            {/* Phần doanh thu & số lượng vé theo tuyến đường - Left */}
                            <div className='thongke-item'>
                                <div className='thongke-item-group'>
                                    <div className="thongke-item__left">
                                        <RefreshIcon color="disabled" />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className='thongke-title'>Doanh thu & số lượng vé theo tuyến đường</p>
                                <div className='chart-item'>
                                    {/* <BarChart /> */}
                                </div>
                                <a href="#" className='more-btt'><p>Xem thêm</p></a>
                            </div>
                            {/* Phần số lượng chuyến và tỉ lệ lắp đầy mỗi tuyến đường - Right */}
                            <div className='thongke-item'>
                                <div className='thongke-item-group'>
                                    <div className="thongke-item__left">
                                        <RefreshIcon color="disabled" />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className='thongke-title'>Số lượng chuyến và tỉ lệ lắp đầy mỗi tuyến đường</p>
                                <div className='chart'>


                                </div>
                                <a href="#" className='more-btt'><p>Xem thêm</p></a>
                            </div>
                        </div>

                        {/* 2 bảng thống kê hàng - 3 */}
                        <div className='thongke-list top'>
                            {/* Phần doanh thu theo loại xe - Left*/}
                            <div className='thongke-item'>
                                <div className='thongke-item-group'>
                                    <div className="thongke-item__left">
                                        <RefreshIcon color="disabled" />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className='thongke-title'>Doanh thu theo loại xe</p>
                                <div className='chart'>
                                    <PieChart />
                                </div>
                                <a href="#" className='more-btt'><p>Xem thêm</p></a>
                            </div>

                            {/* phần doanh thu theo văn phòng đại lí - Right*/}
                            <div className='thongke-item'>
                                <div className='thongke-item-group'>
                                    <div className="thongke-item__left">
                                        <RefreshIcon color="disabled" />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className='thongke-title'>Doanh thu theo văn phòng/đại lý (VNĐ)</p>
                                <div className='chart'>

                                </div>
                                <a href="#" className='more-btt'><p>Xem thêm</p></a>
                            </div>
                        </div>

                        {/* 2 bảng thống kê hàng - 4 */}
                        <div className='thongke-list top'>
                            {/* phần 6 bảng thống kê - Left */}
                            <div className='card-left'>
                                {/* thongke-left_1 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />
                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>

                                {/* thongke-left_2 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />

                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>

                                {/* thongke-left_3 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />

                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-right'>
                                {/* thongke-left_4 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />

                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>

                                {/* thongke-left_5 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />

                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>

                                {/* thongke-left_6 */}
                                <div className="thongke-item">
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <RefreshIcon color="disabled" />

                                            <span className="thongke-text ml-icon">5 phút trước</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                        </div>
                                    </div>
                                    <p className="thongke-title">Doanh thu vé (VND)</p>
                                    <div className="thongke-item-group">
                                        <div className="thongke-item__left">
                                            <TrendingUpOutlinedIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                            <span className="thongke-text__percent ml-icon">-20%</span>
                                        </div>
                                        <div className="thongke-item__right">
                                            <span className="thongke-heading">1.234.567</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* phần doanh thu và lượt chạy theo xe - Right */}
                            <div className='thongke-item'>
                                <div className='thongke-item-group'>
                                    <div className="thongke-item__left">
                                        <RefreshIcon color="disabled" />
                                        <span className="thongke-text ml-icon">5 phút trước</span>
                                    </div>
                                    <div className="thongke-item__right">
                                        <MoreVertIcon style={{ color: 'rgb(118, 118, 118)' }} />
                                    </div>
                                </div>
                                <p className='thongke-title'>Doanh thu và lượt chạy theo xe</p>
                                <div className='chart'>

                                </div>
                                <a href="#" className='more-btt'><p>Xem thêm</p></a>
                            </div>
                        </div>
                    </div>


                </div> {/* END - Trang thống kê */}
            </div>
        </div>
    )
} 