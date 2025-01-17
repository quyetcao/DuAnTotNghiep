import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
// import mui icon
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
// import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import RoomIcon from '@mui/icons-material/Room';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
function AppAdmin() {
    return (
        <>
            <Provider store={store}>
                
            <div className='container' >
                    <div className='sidebar'>
                        <Link to='/admincarhouse' className='sidebar-icon'>
                            <DashboardOutlinedIcon />
                        </Link>
                        <Link to='/admincarhouse/quanLyDatVeXe' className='sidebar-icon'>
                            <ConfirmationNumberOutlinedIcon />
                        </Link>
                        <Link to='/admincarhouse/show-don-hang' className='sidebar-icon'>
                            <ConfirmationNumberOutlinedIcon />
                        </Link>
                        
                        <Link to='/admincarhouse/diem-don' className='sidebar-icon'>
                            <RoomIcon />
                        </Link>
                        <Link to='/admincarhouse/diem-tra' className='sidebar-icon'>
                            <WhereToVoteIcon />
                        </Link>
                        
                        <Link to='/admincarhouse/listcar' className='sidebar-icon'>
                            <DirectionsBusFilledOutlinedIcon />
                        </Link>
                        <Link to='/admincarhouse/listcartype' className='sidebar-icon'>
                            <NoCrashIcon />
                        </Link>
                        <Link to='/admincarhouse/routercar' className='sidebar-icon'>
                            <BuildOutlinedIcon />
                        </Link>
                        <Link to='/admincarhouse/dat-don-tai-quay-b1' className='sidebar-icon'>
                            <LocalMallIcon />
                        </Link>
                        <Link to='/'><AccountBalanceIcon /></Link>
                   
                    </div>
                    <div className='dashboard'>
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
                                            <p className='heading-title'>ADMIN VEXE</p>
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
                                            {/* <LinkrrowDropDownIcon fontSize='small' /> */}
                                        </li>
                                        <li className='info-item info-item__background'>
                                            <LocalPhoneIcon fontSize='small' />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
             
            </Provider>
        </>
    );
}

export default AppAdmin;
