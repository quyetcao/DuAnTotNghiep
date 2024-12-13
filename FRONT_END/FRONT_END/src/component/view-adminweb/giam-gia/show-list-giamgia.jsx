// import '../../../css/adminweb/';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import { CallapiGetAllGiamGia, CallapiGetDeleteGiamGia } from '../../../redux/admin-vexere/giam-gia-redux/AsyncThunk-giam-gia';



export default function QuanlyGiamGia() {
    const navigate = useNavigate();
  

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllGiamGia())
    }, [])
    const dataAllgiamgia = useSelector((state) => state.StoreGiamGia?.dataAllgiamgia);
    console.log("all list>>>>>>", dataAllgiamgia);
    const isload = useSelector((state) => state.StoreGiamGia?.isloading);
    async function deleteMaGiamGia(id) {
        const isconfim = confirm('Bạn có chắc chắn muốn xóa không?')
        if (isconfim) {
            await dispatch(CallapiGetDeleteGiamGia(id));
            await dispatch(CallapiGetAllGiamGia())
        }

    }

    function navigateEdit(id){
        navigate(`/adminweb/editArticles/${id}`)

    }

    return (
        <>

            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản Lý Mã Giảm Giá </h3>
                        <Link to='/adminweb/add-giam-gia'>
                            <button className='content-top-btn'>Tạo mới</button>
                        </Link>
                    </div>
                    <div className='content-handle'>
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
                                        <th>Mã Giảm Giá</th>
                                        <th>Mô Tả Giảm Giá</th>
                                        <th>Số Tiền Giảm (% hoặc tiền)</th>
                                        <th>Loại Giảm Giá</th>
                                        <th>Ngày Bắt Đầu</th>
                                        <th>Ngày Kết Thúc</th>
                                        <th>Giới Hạn Số Lần</th>
                                        <th>Trạng Thái</th>
                                        <th>Ảnh</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                {dataAllgiamgia && dataAllgiamgia?.map((item) => {
                                    return <> <tbody><tr key={item?.id}>
                                        <td>{item?.id}</td>
                                        <td>{item?.code}</td>
                                        <td>{item?.description}</td>
                                        <td>{item?.discount_amount}</td>
                                        <td>{item?.discount_type}</td>
                                        <td>{item?.start_date}</td>
                                        <td>{item?.end_date}</td>
                                        <td>{item?.usage_limit}</td>
                                        <td>{item?.is_active}</td>
                                        <td><img src={`http://127.0.0.1:8000/images/discount_code/${item?.image}`} width="50px" /></td>
                                        <td className='action-icons'>
                                            <EditIcon onClick={() => { navigateEdit(item.id) }} />
                                            <DeleteIcon onClick={() => { deleteMaGiamGia(item.id) }} />
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
