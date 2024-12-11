import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
// import { CallapiGetAllBanner, CallapiGetDeleteBanner } from '../../../redux/admin-vexere/banner/banner-asynThunk';
import { CallapiGetAllUser } from '../../../redux/admin-vexere/user/asynThunk-user';

export default function QuanlyUser() {
    // const navigate = useNavigate();
    const allUser = useSelector((state) => state.StoreUser?.dataUser);
    console.log('list banner 000000000000000000', allUser);
    const isload = useSelector((state) => state.StoreUser?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllUser());
    }, []);

    // async function deletebanner(id) {
    //     const isconfim = confirm('Bạn có muốn xóa không?');
    //     if (isconfim) {
    //         await dispatch(CallapiGetDeleteBanner(id));
    //         await dispatch(CallapiGetAllBanner());
    //     }
    // }
    // function chuyendentrangadd() {
    //     console.log('hello');
    //     navigate('/adminweb/addbanner');
    // }

    // function navigateEdit(id) {
    //     navigate(`/adminweb/editbanner/${id}`);
    // }
    
    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý User </h3>
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
                                        <th>Tên KH </th>
                                        <th>Email</th>
                                        <th>Số Điện Thoại</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {Array.isArray(allUser) &&
                                    allUser?.map((itemUser) => {
                                        return (
                                            <>
                                                {' '}
                                                <tbody>
                                                    <tr>
                                                        <td>{itemUser?.id}</td>
                                                        <td>{itemUser?.name}</td>
                                                        <td>{itemUser?.email}</td>
                                                        <td>{itemUser?.phone}</td>
                                                        <td className='action-icons'>
                                                            <EditIcon/>
                                                            <DeleteIcon/>
                                                            <FileCopyIcon />
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
                        <div className='left-admin-select'>
                            <Link to='/adminweb/show-ds-carhouse' className='btn-input-manage'>
                                <Button variant='contained'>Quản Lý Xe</Button>
                            </Link>
                            <Link to='/adminweb/listbanner' className='btn-input-manage'>
                                <Button variant='contained'>Quản Lý Banner</Button>
                            </Link>
                            <Link to='/admincarhouse/listcartype'>
                                <Button variant='contained'>Quản Lý Loại Xe</Button>
                            </Link>
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
            </div>
        </>
    );
}