import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiGetAllCar, CallapiGetDeleteCar } from '../../../redux/adminweb/admin-cartype/cartype-asynthunk';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Quanlyloaixe() {
    const navigate = useNavigate();
    const allcartype = useSelector((state) => state.Storecartype?.dataCarType);
    console.log("all car type", Array.isArray(allcartype));
    const isload = useSelector((state) => state.Storecartype?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllCar())
    }, [])

    async function deletecartype(id) {
        const isconfim = confirm('Bạn có muốn xóa không?')
        if (isconfim) {
            await dispatch(CallapiGetDeleteCar(id));
            await dispatch(CallapiGetAllCar())
        }

    }

    function navigateEdit(id){
        navigate(`/admincarhouse/editloaixe/${id}`)

    }

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
                        {isload ? <div style={{ transform: "translateX(50%)" }}><CircularProgress /></div> :
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
                                {Array.isArray(allcartype) && allcartype?.map((itemcartype) => {
                                    return <>  <tbody><tr>
                                        <td>{itemcartype.id}</td>
                                        <td>{itemcartype.name}</td>
                                        <td>{itemcartype.quantity_seat}</td>
                                        <td>{itemcartype.image}</td>
                                        <td className='action-icons'>
                                            <EditIcon onClick={() => { navigateEdit(itemcartype.id) }} />
                                            <DeleteIcon onClick={() => { deletecartype(itemcartype.id) }} />
                                            <FileCopyIcon />
                                        </td>
                                    </tr>

                                    </tbody>
                                    </>
                                })}


                            </table>
                        }


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
