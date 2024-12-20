import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiGetAllCarType, CallapiGetDeleteCar } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '../../pagination/pagination';

export default function Quanlyloaixe() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const isload = useSelector((state) => state.Storecartype?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllCarType(currentPage));
    }, [currentPage]);

    const allcartype = useSelector((state) => state.Storecartype?.dataCarType);
    console.log('all car type', allcartype.data);

    async function deletecartype(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteCar(id));
            await dispatch(CallapiGetAllCarType());
        }
    }

    function navigateEdit(id) {
        navigate(`/admincarhouse/editloaixe/${id}`);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Cập nhật trang
    };

    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Loại Xe </h3>
                        <Link to='/admincarhouse/addcartype'>
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
                                        <th>Tên loại xe </th>
                                        <th>Số ghế</th>
                                        <th>Ảnh</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {allcartype?.data?.map((itemcartype) => {
                                        return (
                                            <>
                                                <tbody key={itemcartype.id}>
                                                    <tr>
                                                        <td>{itemcartype.id}</td>
                                                        <td>{itemcartype.name}</td>
                                                        <td>{itemcartype.quantity_seat}</td>
                                                        <td>{itemcartype.image}</td>
                                                        <td className='action-icons'>
                                                            <EditIcon
                                                                onClick={() => {
                                                                    navigateEdit(itemcartype.id);
                                                                }}
                                                            />
                                                            <DeleteIcon
                                                                onClick={() => {
                                                                    deletecartype(itemcartype.id);
                                                                }}
                                                            />
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
                        <div className='left-admin-select group-link-active'>
                            {/* <Link to='/adminweb/show-ds-carhouse'>
                                <Button variant='contained'>Quản Lý Nhà Xe</Button>
                            </Link>
                            <Link to='/adminweb/listbanner'>
                                <Button variant='contained'>Quản Lý Banner</Button>
                            </Link> */}
                            <Link to='/admincarhouse/listcartype'>
                                <Button variant='contained'>Quản Lý Loại Xe</Button>
                            </Link>
                            <Link to='/admincarhouse/listcar'>
                                <Button variant='contained'>Quản Lý Xe</Button>
                            </Link>
                        </div>
                        <Pagination links={allcartype?.links} onPageChange={handlePageChange} />
                    </div>
                </div>
            </div>
        </>
    );
}
