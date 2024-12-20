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
import { CallapiGetAllArticles,  CallapiGetDeleteArticles } from '../../../../redux/admin-vexere/event-post/event-post-AsyncThunk';


export default function QuanlyPost() {
    const navigate = useNavigate();
    const dataAllArticles = useSelector((state) => state.StoreArticles?.dataAllArticles);
    // console.log("all list", Array.isArray(dataAllArticles));
    const isload = useSelector((state) => state.StoreArticles?.isloading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(CallapiGetAllArticles())
 
    }, [])

    async function deleteArticles(id) {
        const isconfim = confirm('Bạn có chắc chắn muốn xóa không?')
        if (isconfim) {
            await dispatch(CallapiGetDeleteArticles(id));
            await dispatch(CallapiGetAllArticles())
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
                        <h3 className='content-top-heading'>Quản Lý Bài Viết </h3>
                        <Link to='/adminweb/add-articles'>
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
                                        <th>Thuộc Sự Kiện</th>
                                        <th>Tên Bài Viết</th>
                                        <th>Nội Dung Bài Viết</th>
                                        <th>Ngày Xuất Bản</th>
                                        <th>Ảnh</th>
                                        <th>Trạng Thái</th>
                                        <th>Thao Tác</th>
                                    </tr>
                                </thead>
                                {Array.isArray(dataAllArticles) && dataAllArticles?.map((item) => {
                                    return <>  <tbody><tr>
                                        <td>{item.id}</td>
                                        <td>{item.event_id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.content}</td>
                                        <td>{item.publication_date}</td>
                                       
                                        <td>{item.article_images && item.article_images.map((itemimg)=>{
                                            return <> <img src={`http://127.0.0.1:8000/images/articles/${itemimg?.image}`} width="50px" /></>
                                        }) } </td>
                                        <td>{item.status}</td>
                                        <td className='action-icons'>
                                            <EditIcon onClick={() => { navigateEdit(item.id) }} />
                                            <DeleteIcon onClick={() => { deleteArticles(item.id) }} />
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
