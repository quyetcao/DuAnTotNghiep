import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import './App.css';
// import HeaderAdminWeb from './component/adminweb/layoutadminweb/header-admin-web';
import './component/css/quan-li-chien-dich.css';

// import mui icon
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import PanoramaIcon from '@mui/icons-material/Panorama';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

import PostAddIcon from '@mui/icons-material/PostAdd';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
function AppAdminQLWeb() {
    return (
        <>
            <Provider store={store}>
                {/* <HeaderAdminWeb /> */}

                <div className='container'>
                    <div className='sidebar'>
                        <a href='/adminweb' className='sidebar-icon'>
                            <DashboardOutlinedIcon />
                        </a>
                        <a href='/adminweb/giam-gia' className='sidebar-icon'>
                            <ConfirmationNumberOutlinedIcon />
                        </a>
                        <a href='/adminweb/listEvent' className='sidebar-icon'>
                            <EmojiEventsIcon />
                        </a>
                        <a href='/adminweb/listuse' className='sidebar-icon'>
                            <GroupsOutlinedIcon />
                        </a>
                        <a href='/adminweb/listArticles' className='sidebar-icon'> 
                            <PostAddIcon />
                        </a>
                        {/* active */}
                 
                        <a href='/adminweb/show-ds-carhouse' className='sidebar-icon'>
                            <DirectionsBusFilledOutlinedIcon />
                        </a>
                        <a href='/adminweb/listbinhluan' className='sidebar-icon'>
                            <ForumOutlinedIcon />
                        </a>
                        <a href='/adminweb/listbanner' className='sidebar-icon'>
                            <PanoramaIcon />
                        </a>
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
                                            <ArrowDropDownIcon fontSize='small' />
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

export default AppAdminQLWeb;
