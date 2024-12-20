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
import { CallapiGetAllTitleEvent, CallapiGetDeleteEvent } from '../../../../redux/admin-vexere/event-post/event-post-AsyncThunk';


export default function QuanlyEvent() {
    const navigate = useNavigate();
    const dataTitleEvent = useSelector((state) => state.StoreEventPost?.dataTitleEvent);
    console.log("all list", Array.isArray(dataTitleEvent));
    const isload = useSelector((state) => state.StoreEventPost?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllTitleEvent())
    }, [])

    async function deleteEvent(id) {
        const isconfim = confirm('Bạn có chắc chắn muốn xóa không?')
        if (isconfim) {
            await dispatch(CallapiGetDeleteEvent(id));
            await dispatch(CallapiGetAllTitleEvent())
        }

    }

    function navigateEdit(id){
        navigate(`/adminweb/editEvent/${id}`)

    }

    return (
        <>

            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản Lý Sự Kiện </h3>
                        <Link to='/adminweb/addEvent'>
                            <button className='content-top-btn'>Tạo mới</button>
                        </Link>
                    </div>
                    {/* <div className='content-handle'>
                        <div className='handle-btn'>
                            <p className='handle-btn__text handle-btn__active handle-btn-borr1'>Tất cả</p>
                            <p className='handle-btn__text'>Active</p>
                            <p className='handle-btn__text handle-btn-borr2'>Inactive</p>
                        </div>
                    </div> */}
                    <div className='content-table'>
                        {isload ? <div style={{ transform: "translateX(50%)" }}><CircularProgress /></div> :
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên Sự Kiện  </th>
                                        <th>Nội Dung Ngắn</th>
                                        <th>Ngày Bắt Đầu</th>
                                        <th>Ngày Kết Thúc</th>
                                        <th>Trạng Thái</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {Array.isArray(dataTitleEvent) && dataTitleEvent?.map((itemEvent) => {
                                    return <>  <tbody><tr>
                                        <td>{itemEvent.id}</td>
                                        <td>{itemEvent.title}</td>
                                        <td>{itemEvent.description}</td>
                                        <td>{itemEvent.start_date}</td>
                                        <td>{itemEvent.end_date}</td>
                                        <td>{itemEvent.status}</td>
                                        <td className='action-icons'>
                                            <EditIcon onClick={() => { navigateEdit(itemEvent.id) }} />
                                            <DeleteIcon onClick={() => { deleteEvent(itemEvent.id) }} />
                                            <FileCopyIcon />
                                        </td>
                                    </tr>

                                    </tbody>
                                    </>
                                })}


                            </table>
                        }


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
