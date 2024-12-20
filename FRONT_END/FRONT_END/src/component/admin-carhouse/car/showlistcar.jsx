import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    CallapiGetAllListCar,
    CallapiGetDeleteCarofCarHouse,
} from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '../../pagination/pagination';
import { Button } from '@mui/material';

export default function Quanlyxe() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(CallapiGetAllListCar(1, currentPage));
    }, [currentPage]);
    const allcar = useSelector((state) => state.StoreCar?.dataCar);
    console.log('all car ', allcar);

    //edit
    function EditCarofCarHouse(id) {
        navigate(`/admincarhouse/editcar/${id}`);
    }
    // delete
    async function deleteCarofCarHouse(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteCarofCarHouse(id));
            await dispatch(CallapiGetAllListCar(1, currentPage));
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
                        <h3 className='content-top-heading'>Quản lý Xe</h3>
                        <Link to='/admincarhouse/addCar'>
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
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên xe</th>
                                    <th>Loại Xe</th>
                                    <th>Biển số</th>
                                    <th>Hãng</th>
                                    <th>Ảnh</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allcar &&
                                    allcar?.data?.map((itemlistcar) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{itemlistcar?.id}</td>
                                                    <td>{itemlistcar?.name}</td>
                                                    <td>TIENTO01</td>
                                                    <td>{itemlistcar?.license_plate}</td>
                                                    <td>{itemlistcar?.model}</td>
                                                    <td>
                                                        {itemlistcar.car_images &&
                                                            itemlistcar.car_images.map((itemimg) => {
                                                                return (
                                                                    <>
                                                                        {' '}
                                                                        <img
                                                                            src={`http://127.0.0.1:8000/images/cars/${itemimg?.image}`}
                                                                            width='50px'
                                                                        />
                                                                    </>
                                                                );
                                                            })}{' '}
                                                    </td>
                                                    <td className='action-icons'>
                                                        <EditIcon
                                                            onClick={() => {
                                                                EditCarofCarHouse(itemlistcar?.id);
                                                            }}
                                                        />
                                                        <DeleteIcon
                                                            onClick={() => {
                                                                deleteCarofCarHouse(itemlistcar?.id);
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
                    <div className='left-admin-select group-link-active'>
                        <Link to='/admincarhouse/listcartype'>
                            <Button variant='contained'>Quản Lý Loại Xe</Button>
                        </Link>
                        <Link to='/admincarhouse/listcar'>
                            <Button variant='contained'>Quản Lý Xe</Button>
                        </Link>
                    </div>
                    <Pagination links={allcar?.links} onPageChange={handlePageChange} />

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
