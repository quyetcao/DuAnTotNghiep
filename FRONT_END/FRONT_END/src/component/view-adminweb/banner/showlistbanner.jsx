import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { CallapiGetAllBanner, CallapiGetDeleteBanner } from '../../../redux/admin-vexere/banner/banner-asynThunk';

export default function QuanlyBanner() {
    const navigate = useNavigate();
    const allbanner = useSelector((state) => state.Storebanner?.dataBanner);
    console.log('list banner 000000000000000000', allbanner);
    const isload = useSelector((state) => state.Storebanner?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllBanner());
    }, []);

    async function deletebanner(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteBanner(id));
            await dispatch(CallapiGetAllBanner());
        }
    }
    function chuyendentrangadd() {
        console.log('hello');
        navigate('/adminweb/addbanner');
    }

    function navigateEdit(id) {
        navigate(`/adminweb/editbanner/${id}`);
    }
    // /admincarhouse/addcartype
    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Banner </h3>
                        <button className='content-top-btn' onClick={chuyendentrangadd}>
                            Tạo mới
                        </button>
                    </div>
                    <div className='content-handle'>
                        {/* <div className='qlcd-search'> */}
                            {/* <SearchOutlinedIcon style={{ color: '#6e6e6e' }} /> */}
                            {/* <input type='text' placeholder='Tìm kiếm tên chiến dịch' />  */}
                        {/* </div> */}
                        {/* <div className='handle-btn'>
                            <p className='handle-btn__text handle-btn__active handle-btn-borr1'>Tất cả</p>
                            <p className='handle-btn__text'>Active</p>
                            <p className='handle-btn__text handle-btn-borr2'>Inactive</p>
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
                                        <th>Hình ảnh </th>
                                        <th>Alt text</th>
                                        {/* <th>Ảnh</th> */}
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {Array.isArray(allbanner) &&
                                    allbanner?.map((itembanner) => {
                                        return (
                                            <>
                                                {' '}
                                                <tbody>
                                                    <tr>
                                                        <td>{itembanner?.id}</td>
                                                        <td>
                                                            <img
                                                                src={`http://127.0.0.1:8000/images/banners/${itembanner?.image}`}
                                                                width='50px'
                                                            />
                                                        </td>
                                                        <td>{itembanner?.alt_text}</td>
                                                        <td className='action-icons'>
                                                            <EditIcon
                                                                onClick={() => {
                                                                    navigateEdit(itembanner.id);
                                                                }}
                                                            />
                                                            <DeleteIcon
                                                                onClick={() => {
                                                                    deletebanner(itembanner.id);
                                                                }}
                                                            />
                                                            {/* <FileCopyIcon /> */}
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
