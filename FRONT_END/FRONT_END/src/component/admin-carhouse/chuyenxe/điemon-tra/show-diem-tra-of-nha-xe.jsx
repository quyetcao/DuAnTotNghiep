
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {  CallapiGetAllDiemTraByCarHouse, CallapiGetDeleteDiemTra } from '../../../../redux/adminweb/admin-diem-don-tra/asynthunk-diem-don-tra';
import CircularProgress from '@mui/material/CircularProgress';
export default function QuanlyDiemTra() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(CallapiGetAllDiemTraByCarHouse(1));
    }, []);
    const datadiemtraofcarhouse = useSelector((state) => state.StoreDiemTraCarHouse?.datadiemtraofcarhouse);


const isload = useSelector((state) => state.StoreDiemTraCarHouse?.isloading);
    //edit 
    function EditDiemTraofCarHouse(id) {
        navigate(`/admincarhouse/edit-diem-tra/${id}`);
    }
    // delete
    async function DeleteDiemTraofCarHouse(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteDiemTra(id));
            await dispatch(CallapiGetAllDiemTraByCarHouse(1));
        }
    }

    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Điểm Trả</h3>
                        <Link to='/admincarhouse/add-diem-tra'>
                            <button className='content-top-btn'>Tạo mới</button>
                        </Link>
                    </div>
                    {/* <div className='content-handle'>
                        <div className='qlcd-search'>
                            <input type='text' placeholder='Tìm kiếm tên chiến dịch' />
                        </div>
                        <div className='handle-btn'>
                            <p className='handle-btn__text handle-btn__active handle-btn-borr1'>Tất cả</p>
                            <p className='handle-btn__text'>Active</p>
                            <p className='handle-btn__text handle-btn-borr2'>Inactive</p>
                        </div>
                    </div> */}
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
                                    <th>Tên điểm trả</th>
                                    <th>Địa chỉ điểm trả</th>
                                    <th>Công Khai</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datadiemtraofcarhouse &&
                                    datadiemtraofcarhouse.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item?.id}</td>
                                                    <td>{item?.name}</td> 
                                                    <td>{item?.address}</td>
                                                    <td>{item?.is_public === 0 ? <p>Không Công khai</p> :<p>Công Khai</p>}</td>
                                                  
                                                    <td className='action-icons'>
                                                        <EditIcon   onClick={() => {
                                                                    EditDiemTraofCarHouse(item?.id);
                                                                }} />
                                                        <DeleteIcon
                                                                onClick={() => {
                                                                    DeleteDiemTraofCarHouse(item?.id);
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
                    {/* <div className='page-button'>
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
                    </div> */}
                </div>
            </div>
        </>
    );
}
