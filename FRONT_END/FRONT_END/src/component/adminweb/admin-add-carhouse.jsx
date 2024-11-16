import '../css/adminweb/addcarhouse.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiAddCarHouse } from '../../redux/adminweb/admin-carhouse/carhouse-asynThunk';

import '../css/quan-li-chien-dich.css';

// import mui icon
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export default function AddCarHouse() {
    //thao tac voi form gửi add nhà xe
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        dispatch(CallapiAddCarHouse(data));
    };

    // const navigate = useNavigate();

    return (
        <>
            <div className='container'>
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
                        </div>

                        <form id='busForm' onSubmit={handleSubmit(onSubmit)}>
                            <h2>Nhập Thông Tin Nhà Xe</h2>

                            <label htmlFor='busName'>Tên Nhà Xe</label>
                            <input
                                type='text'
                                id='busName'
                                {...register('name', { required: true })}
                                placeholder='Nhập tên nhà xe...'
                            />

                            {/* <label htmlFor="address">Địa Chỉ</label>
                            <input type="text" id="address"    {...register('diachi', { required: true })}  placeholder="Nhập địa chỉ..." /> */}

                            <label htmlFor='phone'>Số Điện Thoại</label>
                            <input
                                type='tel'
                                id='phone'
                                {...register('phone')}
                                placeholder='Nhập số điện thoại...'
                                pattern='[0-9]{10}'
                            />

                            <input className='input-submit' type='submit' value='Thêm nhà xe' />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
