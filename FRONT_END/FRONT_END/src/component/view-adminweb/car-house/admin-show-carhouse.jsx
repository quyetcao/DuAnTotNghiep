import '../../css/quan-li-chien-dich.css';

// import mui icon
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
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

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// import { CallapiGetAllCarHouse } from '../../redux/adminweb/admin-carhouse/carhouse-asynThunk';
import {
    CallapiGetAllCarHouse,
    CallapiGetDeleteCarHouse,
} from '../../../redux/adminweb/admin-carhouse/carhouse-asynThunk';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../pagination/pagination';

export default function ShowDsCarHouse() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(CallapiGetAllCarHouse(currentPage));
    }, [currentPage]);

    const allcarHouse = useSelector((state) => state.Storecarhouse?.dataCarHouse);
    console.log('cx search', allcarHouse);

    const navigate = useNavigate();
    function chuyendentrangadd() {
        console.log('trang them nha xe');
        navigate('/adminweb/addcarhouse');
    }
    function editcarhouse(id) {
        navigate(`/adminweb/editcarhouse/${id}`);
    }
    async function deleteCarHouse(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteCarHouse(id));
            await dispatch(CallapiGetAllCarHouse(currentPage));
        }
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Cập nhật trang
    };

    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Nhà Xe</h3>
                        <button className='content-top-btn' onClick={chuyendentrangadd}>
                            Tạo mới
                        </button>
                    </div>
                    <div className='content-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên Nhà Xe</th>
                                    <th>Phone</th>
                                    <th>Ngày Hợp Tác</th>
                                    <th>Địa Chỉ</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allcarHouse?.data?.map((item) => {
                                    return (
                                        <>
                                            <tr key={item?.id}>
                                                <td>{item?.id}</td>
                                                <td>{item?.name}</td>
                                                <td>{item?.phone}</td>
                                                <td>{item?.created_at}</td>
                                                <td>{item?.address}</td>
                                                <td>{item?.status}</td>
                                                <td className='action-icons'>
                                                    <EditIcon
                                                        onClick={() => {
                                                            editcarhouse(item?.id);
                                                        }}
                                                    />

                                                    <DeleteIcon
                                                        onClick={() => {
                                                            deleteCarHouse(item?.id);
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className='box-footer-admin'>
                        <div className='left-admin-select group-link-active'>
                            <Link to='/adminweb/show-ds-carhouse'>
                                <Button variant='contained'>Quản Lý Nhà Xe</Button>
                            </Link>
                            <Link to='/adminweb/listbanner'>
                                <Button variant='contained'>Quản Lý Banner</Button>
                            </Link>
                        </div>

                        {/* phân trang và sử lí khi thay đổi trangtrang */}
                        <Pagination links={allcarHouse?.links} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}
