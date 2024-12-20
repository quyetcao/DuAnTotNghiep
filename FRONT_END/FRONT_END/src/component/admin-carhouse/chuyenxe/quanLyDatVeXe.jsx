// import css
import '../../css/quanLyDatVeXe.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callApiGetCity } from '../../../redux/city/Asynthunk_city';
import { useForm } from 'react-hook-form';
import { getSearchChuyenxe } from '../../../redux/viewchuyenxe/viewcx-asynThunk';
import { useNavigate } from 'react-router-dom';

export default function QuanLyDatVeXe() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callApiGetCity())
    }, []);
    const datacity = useSelector((state)=> state.StoreCity?.datacity);
 const {register,handleSubmit,} = useForm();
const handleSubmitSearch = () => {
        handleSubmit(onSubmit)();
    };
    
  
    // const navigate = useNavigate();

    function onSubmit(data) {
        console.log('datainform them cphn', data);
        dispatch(getSearchChuyenxe(data)).then(() => {
        });
    }
    return (
        <>
            <div className='container quanLyDatVeXe'>
                {/* phần lõi */}
                <div className='dashboard-center'>
                    {/* phần đầu */}

                    <div className='qlnx'>
                        <form  onSubmit={handleSubmit(handleSubmitSearch)}>
                        <div className='qlnx-group'>
                            <div className='qlnx-group__list'>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Nơi đi</p>
                                   
                                        <select name="" id=""  {...register('city_from')}>
                                            {datacity && datacity?.map((item)=>{
                                            return <> <option value={item.name}>{item.name}</option></> 
                                            })}
                                           
                                        </select>
                                </div>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading' >Nơi đến</p>
                                    <select name="" id="" {...register('city_to')}>
                                            {datacity && datacity?.map((item)=>{
                                            return <> <option value={item.name}>{item.name}</option></> 
                                            })}
                                        </select>
                                </div>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Ngày khởi hành</p>
                                 
                                     <input type="date"  {...register('departure_date')}/>
                                  
                                </div>
                               <input type='submit' value='Hiển Thị'></input>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className='time-group'>
                        <div className='time-group__list'>
                            <div className='time-group__item time-group__item-select'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                            <div className='time-group__item'>
                                <div className='time-group__heading'>07:00</div>
                                <div className='time-group__title'>123.45 - 10/10</div>
                                <div className='time-group__progress-bar'>
                                    <div className='time-group__progress'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phần giữa */}
                    <div className='trip-info'>
                        <div className='trip-header'>
                            <span>
                                Thuộc chuyến <strong>09:30</strong> ngày <strong>20/02/2020</strong> tuyến{' '}
                                <strong>Nghệ An - Hà Nội</strong>
                            </span>
                        </div>
                        <div className='trip-content'>
                            <div className='trip-details'>
                                <div className='info-header'>
                                    <strong>Thông tin chuyến</strong>
                                    <a href='#' className='update-info-link'>
                                        Cập nhật thông tin
                                    </a>
                                </div>
                                <div className='trip-info__row'>
                                    <div className='trip-info__item'>
                                        <span className='info-label'>Loại xe:</span>
                                        <span>Giường nằm 40 chỗ (Có WC)</span>
                                    </div>
                                    <div className='trip-info__item'>
                                        <span className='info-label'>Tài xế:</span>
                                        <div className='info-value'>
                                            <span>
                                                Phạm Ngọc Duy Anh (<a>0987.654.321</a>)
                                            </span>
                                            <br />
                                            <span>
                                                Phạm Ngọc Duy Anh (<a>0987.654.321</a>)
                                            </span>
                                        </div>
                                    </div>
                                    <div className='trip-info__item'>
                                        <span className='info-label'>Phụ xe:</span>
                                        <div className='info-value'>
                                            <span>
                                                Phạm Ngọc Duy Anh (<a>0987.654.321</a>)
                                            </span>
                                            <br />
                                            <span>
                                                Phạm Ngọc Duy Anh (<a>0987.654.321</a>)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='trip-info__row'>
                                    <div className='trip-info__item'>
                                        <span className='info-label'>Số xe:</span>
                                        <span href='#' className='vehicle-link'>
                                            <strong>29B1-123.45</strong>{' '}
                                            <span>
                                                (<a>0987.654.321</a>)
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='trip-info__item'>
                                    <span className='info-label'>Ghi chú:</span>
                                    <span>
                                        Đây là text nhập cho phần ghi chú, nhập thêm ghi chú cho dài thật dài thêm dài
                                        thêm dài thêm dài thêm dài thêm dài dài dài
                                    </span>
                                </div>
                            </div>
                            <div className='trip-stats'>
                                <div className='stats-header'>
                                    <strong>Thống kê chuyến</strong>
                                    <a href='#' className='stats-link'>
                                        <NavigateNextIcon />
                                    </a>
                                </div>
                                <div className='stats-progress'>
                                    <div className='progress-bar'>
                                        <div className='paid' style={{ width: '50%' }}></div>
                                        <div className='reserved' style={{ width: '25%' }}></div>
                                    </div>
                                    <div className='stats-info'>
                                        <span>
                                            <strong>30</strong>/40 (<strong>75%</strong>)
                                        </span>
                                    </div>
                                </div>
                                <div className='stats-details'>
                                    <div>
                                        <span className='label stats-details__pay'>Thanh toán:</span>{' '}
                                        <strong>20</strong> vé
                                    </div>
                                    <div>
                                        <span className='label stats-details__datcho'>Đặt chỗ:</span>{' '}
                                        <strong>10</strong> vé
                                    </div>
                                    <div>
                                        <span className='label stats-details__trong'>Trống:</span> <strong>10</strong>{' '}
                                        vé
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='button-group'>
                            <div className='button-group__left'>
                                <div className='group-left-list'>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>In phơi</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>Làm mới</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>Đón - trả</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-left-item__btn'>T/chuyển</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button
                                            className='group-item__btn group-left-item__btn'
                                            style={{ color: '#f66' }}
                                        >
                                            Xuất bến
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='button-group__right'>
                                <div className='group-left-list'>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Thống kê</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Thống kê mới</button>
                                    </div>
                                    <div className='group-left-item'>
                                        <button className='group-item__btn group-right-item__btn'>Vé không đi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* phần cuối */}
                    <div className='group-center'>
                        <div className='admin'>
                            <div className='admin-list'>
                                <div className='admin-item admin-item-bg1'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item admin-item-bg2'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='admin-item'>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__left'>
                                            <span className='admin-title'>A1</span>
                                        </div>
                                        <div className='admin-item__right group-item__top'>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-1'>
                                                101 Láng Hạ
                                            </span>
                                            <span className='admin-item__box admin-text admin-item__color admin-item__box-bg-2'>
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right admin-item__right-icon'>
                                            <div className='admin-item__icon'>
                                                <PhoneIcon />
                                            </div>
                                            <span className='admin-text__num'>0987654321</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text'>123 Lê Lợi</span>
                                        </div>
                                    </div>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <span className='admin-item-title'>Duy Anh</span>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-price'>250.000</span>
                                        </div>
                                    </div>
                                    <p className='admin-heading-test'>Đây là dòng ghi chú</p>
                                    <div className='admin-item-group'>
                                        <div className='admin-item__right'>
                                            <div className='admin-item-icon__bottom'>
                                                <div className='admin-item__border'>
                                                    <EditIcon />
                                                </div>
                                                <div className='admin-item__border'>
                                                    <OpenWithIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='admin-item__left'>
                                            <span className='admin-text '>VPHN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
