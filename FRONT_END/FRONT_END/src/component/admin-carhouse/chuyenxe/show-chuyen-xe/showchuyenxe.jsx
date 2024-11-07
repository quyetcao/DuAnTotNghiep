
import EditIcon from '@mui/icons-material/Edit';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { CallapiGetAllcxofCarHouse, CallapiGetDeleteCxCarHouse } from '../../../../redux/adminweb/admin-cx-carhouse/Asynthunk-cx-carhouse';
import Pagination from '../../../pagination/pagination';


export default function Quanlychuyenxe() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1); 
    useEffect(() => {
        dispatch(CallapiGetAllcxofCarHouse(1,currentPage));
    }, [currentPage]);
    const allcx = useSelector((state) => state.ChuyenxeofCarHouse?.AllChuyenXecarhouse);
    console.log('all car ', allcx);


    // //edit 
    function EditCxofCarHouse(id) {
        navigate(`/admincarhouse/edit-chuyen-xe/${id}`);
    }
    // delete
    async function deleteCxcarhouse(id) {
        const isconfim = confirm('Bạn có muốn xóa không?');
        if (isconfim) {
            await dispatch(CallapiGetDeleteCxCarHouse(id));
            await dispatch(CallapiGetAllcxofCarHouse(1,currentPage));
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
                        <h3 className='content-top-heading'>Quản lý Chuyến Xe</h3>
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
                                    <th>Tuyến Đường</th>
                                    <th>Ngày đi - Ngày về</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                { Array.isArray(allcx.data) &&
                                    allcx.data.map((itemlist) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{itemlist?.id}</td>
                                                    <td>{itemlist?.car?.name}</td>
                                                    <td>{itemlist?.car_route?.city_from}-{itemlist?.car_route?.city_to}</td>
                                                    <td>{itemlist?.departure_date} . {itemlist?.arrival_date}</td>
                                                    <td>{itemlist?.price}</td>
                                                    <td>{itemlist?.status}</td>
                                                    <td className='action-icons'>
                                                        <EditIcon   onClick={() => {
                                                                    EditCxofCarHouse(itemlist?.id);
                                                                }} />
                                                        <DeleteIcon
                                                                onClick={() => {
                                                                    deleteCxcarhouse(itemlist?.id);
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
                    <Pagination links={allcx?.links} onPageChange={handlePageChange} />
                </div>
            </div>
        </>
    );
}
