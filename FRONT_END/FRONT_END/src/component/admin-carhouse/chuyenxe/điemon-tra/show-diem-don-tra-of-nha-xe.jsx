
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CallapiGetAllDiemDonByCarHouse, CallapiGetDeleteDiemDon } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
import CircularProgress from '@mui/material/CircularProgress';
export default function QuanlyDiemDon() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(CallapiGetAllDiemDonByCarHouse(1));
    }, []);
    const datadiemdonofcarhouse = useSelector((state) => state.StoreDiemDonCarHouse?.datadiemdonofcarhouse);
console.log(">>>>>>>>",datadiemdonofcarhouse);

const isload = useSelector((state) => state.StoreDiemDonCarHouse?.isloading);
    //edit 
    function EditDiemDonofCarHouse(id) {
        navigate(`/admincarhouse/edit-diem-don/${id}`);
    }
    // delete
    async function DeleteDiemDonofCarHouse(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteDiemDon(id));
            await dispatch(CallapiGetAllDiemDonByCarHouse(1));
        }
    }

    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Điểm Đón</h3>
                        <Link to='/admincarhouse/add-diem-don'>
                            <button className='content-top-btn'>Tạo mới</button>
                        </Link>
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
                    {isload ? (
                            <div style={{ transform: 'translateX(50%)' }}>
                                <CircularProgress />
                            </div>
                        ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên điểm đón</th>
                                    <th>Địa chỉ điểm đón</th>
                                    <th>Công Khai</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datadiemdonofcarhouse &&
                                    datadiemdonofcarhouse.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item?.id}</td>
                                                    <td>{item?.name}</td> 
                                                    <td>{item?.address}</td>
                                                    <td>{item?.is_public === 0 ? <p>Không Công khai</p> :<p>Công Khai</p>}</td>
                                                  
                                                    <td className='action-icons'>
                                                        <EditIcon   onClick={() => {
                                                                    EditDiemDonofCarHouse(item?.id);
                                                                }} />
                                                        <DeleteIcon
                                                                onClick={() => {
                                                                    DeleteDiemDonofCarHouse(item?.id);
                                                                }}
                                                            />
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })}
                            </tbody>
                        </table>
                               )}
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
