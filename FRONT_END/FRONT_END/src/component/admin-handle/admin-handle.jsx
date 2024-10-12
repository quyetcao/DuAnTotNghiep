import '../css/admin/admin-handle.css';

// import React from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import OpenWithIcon from '@mui/icons-material/OpenWith';

export default function AdminHandle() {
    return (
        <div className='container'>
            {/* Phần sidebar */}
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
            <div className='group'>
                <div className='group-container'>
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
                                    <p className='heading-title'>Phần mềm nhà xe</p>
                                    <ExpandMoreOutlinedIcon style={{ color: '#2474E5' }} />
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
                <div className='group-center'>
                    <div className='admin'>
                        <div className='admin-list'>
                            <div className='admin-item admin-item-bg1'>
                                <div className='admin-item-group'>
                                    <div className='admin-item__left'>
                                        <span className='admin-title'>A1</span>
                                    </div>
                                    <div className='admin-item__right group-item__top'>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>101 Láng Hạ</span>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>3</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <PhoneIcon fontSize='small' />
                                        <span className='admin-text__num'>0987654321</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text'>123 Lê Lợi</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <span className='admin-item-title'>Duy Anh</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-price'>250.000</span>
                                    </div>
                                </div>
                                <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <div className='admin-item-icon__bottom'>
                                            <div className='admin-item__border'><EditIcon fontSize='small' /></div>
                                            <div className='admin-item__border'><OpenWithIcon fontSize='small' /></div>
                                        </div>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text '>VPHN</span>
                                    </div>
                                </div>
                            </div>
                            <div className='admin-item admin-item-bg2'>
                                <div className='admin-item-group'>
                                    <div className='admin-item__left'>
                                        <span className='admin-title'>A1</span>
                                    </div>
                                    <div className='admin-item__right group-item__top'>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>101 Láng Hạ</span>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>3</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <PhoneIcon fontSize='small' />
                                        <span className='admin-text__num'>0987654321</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text'>123 Lê Lợi</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <span className='admin-item-title'>Duy Anh</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-price'>250.000</span>
                                    </div>
                                </div>
                                <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <div className='admin-item-icon__bottom'>
                                            <div className='admin-item__border'><EditIcon fontSize='small' /></div>
                                            <div className='admin-item__border'><OpenWithIcon fontSize='small' /></div>
                                        </div>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text '>VPHN</span>
                                    </div>
                                </div>
                            </div>
                            <div className='admin-item'>
                                <div className='admin-item-group'>
                                    <div className='admin-item__left'>
                                        <span className='admin-title'>A1</span>
                                    </div>
                                    <div className='admin-item__right group-item__top'>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>101 Láng Hạ</span>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>3</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <PhoneIcon fontSize='small' />
                                        <span className='admin-text__num'>0987654321</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text'>123 Lê Lợi</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <span className='admin-item-title'>Duy Anh</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-price'>250.000</span>
                                    </div>
                                </div>
                                <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <div className='admin-item-icon__bottom'>
                                            <div className='admin-item__border'><EditIcon fontSize='small' /></div>
                                            <div className='admin-item__border'><OpenWithIcon fontSize='small' /></div>
                                        </div>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text '>VPHN</span>
                                    </div>
                                </div>
                            </div>
                            <div className='admin-item'>
                                <div className='admin-item-group'>
                                    <div className='admin-item__left'>
                                        <span className='admin-title'>A1</span>
                                    </div>
                                    <div className='admin-item__right group-item__top'>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>101 Láng Hạ</span>
                                        <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>3</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <PhoneIcon fontSize='small' />
                                        <span className='admin-text__num'>0987654321</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text'>123 Lê Lợi</span>
                                    </div>
                                </div>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <span className='admin-item-title'>Duy Anh</span>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-price'>250.000</span>
                                    </div>
                                </div>
                                <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                <div className='admin-item-group'>
                                    <div className='admin-item__right'>
                                        <div className='admin-item-icon__bottom'>
                                            <div className='admin-item__border'><EditIcon fontSize='small' /></div>
                                            <div className='admin-item__border'><OpenWithIcon fontSize='small' /></div>
                                        </div>
                                    </div>
                                    <div className='admin-item__left'>
                                        <span className='admin-text '>VPHN</span>
                                    </div>
                                </div>
                            </div>  
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
