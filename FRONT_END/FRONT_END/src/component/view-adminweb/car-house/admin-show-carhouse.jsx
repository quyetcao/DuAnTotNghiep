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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { CallapiGetAllCarHouse } from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';

export default function ShowDsCarHouse() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CallapiGetAllCarHouse())
    }, [])

    const allcarHouse = useSelector((state) => state.Storecarhouse?.dataCarHouse);
    console.log("cx search", allcarHouse);
    const navigate = useNavigate();
    function chuyendentrangadd(){
        console.log("hello");
        navigate('/adminweb/addcarhouse');
    }


    return (
        <>
           
                        <div className='dashboard-body'>
                            <div className='body-content'>
                                <div className='body-content-top'>
                                    <h3 className='content-top-heading'>Quản lý Nhà Xe</h3>
                                    <button className='content-top-btn' onClick={chuyendentrangadd}>Tạo mới</button>
                                </div>
                                <div className='content-handle'>
                                    <div className='qlcd-search'>
                                        <SearchOutlinedIcon style={{ color: '#6e6e6e' }} />
                                        <input type='text' placeholder='Tìm kiếm tên nhà xe' />
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
                                                <th>Tên Nhà Xe</th>
                                                <th>Phone</th>
                                                <th>Ngày Hợp Tác</th>
                                                <th>Trạng Thái</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {allcarHouse.map((item) => {
                                                return <><tr>
                                                <td>{ item?.id}</td>
                                                <td>{ item?.name}</td>
                                                <td>{ item?.phone}</td>
                                                <td>{ item?.created_at}</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr></>
                                            })

                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className='page-button'>
                                    <div className='page-list'>
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
        </>
    );
}
