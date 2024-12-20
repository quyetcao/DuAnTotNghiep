import '../../css/quan-li-chien-dich.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { CallapiGetAllBinhLuan, CallapiGetDeleteBinhLuan } from '../../../redux/adminweb/binhluan/binhluan-asynThunk';

export default function AllBinhLuan() {
    // const navigate = useNavigate();
    const allbinhluan = useSelector((state) => state.Storebinhluan?.databinhluan);
    console.log('list binhluan 11111111', allbinhluan);
    const isload = useSelector((state) => state.Storebinhluan?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllBinhLuan());
    }, []);

    async function deletebinhluan(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteBinhLuan(id));
            await dispatch(CallapiGetAllBinhLuan());
        }
    }


    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản Lý Bình Luận </h3>
                        {/* <button className='content-top-btn' onClick={deleteAllBinhLuan}>
                            Xóa tất cả
                        </button> */}
                    </div>
                    <div className='content-handle'>
                        {/* <div className='qlcd-search'>
                            <SearchOutlinedIcon style={{ color: '#6e6e6e' }} />
                            <input type='text' placeholder='Tìm kiếm tên chiến dịch' />
                        </div> */}
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
                                        <th>Content </th>
                                        <th>Users_id</th>
                                        <th>Car_trips_id</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {Array.isArray(allbinhluan) &&
                                    allbinhluan?.map((itembinhluan) => {
                                        return (
                                            <>
                                                {' '}
                                                <tbody>
                                                    <tr>
                                                        <td>{itembinhluan?.id}</td>
                                                        {/* <td>
                                                            <img
                                                                src={`http://127.0.0.1:8000/images/banners/${itembanner?.image}`}
                                                                width='50px'
                                                            />
                                                        </td> */}
                                                        <td>{itembinhluan?.content}</td>
                                                        <td>{itembinhluan?.users_id}</td>
                                                        <td>{itembinhluan?.car_trips_id}</td>
                                                        <td className='action-icons'>
                                                            
                                                            <DeleteIcon
                                                                onClick={() => {
                                                                    deletebinhluan(itembinhluan?.id);
                                                                }}
                                                            />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        );
                                    })}
                            </table>
                        )}
                    </div>
                    <div className='box-footer-admin'>
                        <div className='left-admin-select group-link-active'>
                            <Link to='/adminweb/show-ds-carhouse'>
                                <Button variant='contained'>Quản Lý Nhà Xe</Button>
                            </Link>
                            <Link to='/adminweb/listbanner'>
                                <Button variant='contained'>Quản Lý Banner</Button>
                            </Link>
                            {/* <Link to='/admincarhouse/listcartype'>
                                <Button variant='contained'>Quản Lý Loại Xe</Button>
                            </Link> */}
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
            </div>
        </>
    );
}
