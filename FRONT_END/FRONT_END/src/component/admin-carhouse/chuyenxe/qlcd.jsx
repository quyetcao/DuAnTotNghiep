import '../../css/quan-li-chien-dich.css';

// import mui icon
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
// import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
// import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
// import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
// import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Quanlychiendich() {
    return (
        <>
            <div className='container'>
                {/* <div className='sidebar'>
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
                </div> */}
                <div className='dashboard'>
                    <div className='dashboard-container'>
                        {/* <div className='wrapper-top m-4'>
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
                                        <span className='border-right'></span>
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
                        </div> */}
                        <div className='dashboard-body'>
                            <div className='body-content'>
                                <div className='body-content-top'>
                                    <h3 className='content-top-heading'>Quản lý chiến dịch</h3>
                                    <button className='content-top-btn'>Tạo mới</button>
                                </div>
                                <div className='content-handle'>
                                    <div className='qlcd-search'>
                                        {/* <SearchOutlinedIcon style={{ color: '#6e6e6e' }} /> */}
                                        <input type='text' placeholder='Tìm kiếm tên chiến dịch' />
                                    </div>
                                    <div className='handle-btn'>
                                        <p className='handle-btn__text handle-btn__active handle-btn-borr1'>Tất cả</p>
                                        <p className='handle-btn__text'>Active</p>
                                        <p className='handle-btn__text handle-btn-borr2'>Inactive</p>
                                    </div>
                                </div>
                                <div className='content-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên chiến dịch</th>
                                                <th>Tiền tố</th>
                                                <th>Kênh áp dụng</th>
                                                <th>Loại coupon</th>
                                                <th>Người tạo</th>
                                                <th>Trạng thái</th>
                                                <th>Sửa đổi lần cuối</th>
                                                <th>Tác vụ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Tên chiến dịch 01</td>
                                                <td>TIENTO01</td>
                                                <td>Tất cả</td>
                                                <td>Giảm giá</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-active'>Active</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>Tên chiến dịch 02</td>
                                                <td>TIENTO02</td>
                                                <td>BMS</td>
                                                <td>Giá cố định</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-active'>Active</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td>Tên chiến dịch 07</td>
                                                <td>TIENTO07</td>
                                                <td>WebNX, AppNX</td>
                                                <td>Giảm giá</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-inactive'>Inactive</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='page-button'>
                                    <div className='page-list'>
                                        <div className='page-list__item'>
                                            <ChevronLeftIcon style={{ color: '#6e6e6e' }}/>
                                        </div>
                                        <div className='page-list__item'>1</div>
                                        <div className='page-list__item'>2</div>
                                        <div className='page-list__item'>3</div>
                                        <div className='page-list__item'>...</div>
                                        <div className='page-list__item'>9</div>
                                        <div className='page-list__item'>10</div>
                                        <div className='page-list__item'>
                                        <ChevronRightIcon style={{ color: '#6e6e6e' }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
