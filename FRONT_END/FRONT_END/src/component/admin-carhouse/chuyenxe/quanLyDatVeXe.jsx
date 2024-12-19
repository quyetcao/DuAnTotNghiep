// import css
import '../../css/quanLyDatVeXe.css';
// import mui icon
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
// import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
// import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
// import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
// import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
// import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
// import RefreshIcon from '@mui/icons-material/Refresh';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CancelIcon from '@mui/icons-material/Cancel';

export default function QuanLyDatVeXe() {
    return (
        <>
            <div className='container quanLyDatVeXe'>
                {/* phần lõi */}
                <div className='dashboard-center'>
                    {/* phần đầu */}

                    <div className='qlnx'>
                        <div className='qlnx-group'>
                            <div className='qlnx-group__list'>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Nơi đi</p>
                                    <div className='qlnx-box'>
                                        <span className='qlnx-box__title'>Bến xe Phía Đông</span>
                                        <div className='qlnx-box__icon'>
                                            <ExpandMoreIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Nơi đến</p>
                                    <div className='qlnx-box'>
                                        <span className='qlnx-box__title'>Bến xe Phía Đông</span>
                                        <div className='qlnx-box__icon'>
                                            <ExpandMoreIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Ngày khởi hành</p>
                                    <div className='qlnx-box'>
                                        <div className='qlnx-box__icon'>
                                            <ChevronLeftIcon />
                                        </div>
                                        <span className='qlnx-box__title'>Thứ 3, 20-2-2022</span>
                                        <div className='qlnx-box__icon'>
                                            <ChevronRightIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className='qlnx-group__item'>
                                    <p className='qlnx-item__heading'>Lọc chuyến đi</p>
                                    <div className='qlnx-box'>
                                        <div className='qlnx-box__route'>
                                            <div className='qlnx-box__route-item qlnx-padding'>
                                                <span className='qlnx-box__title'>Tuyến đường 1</span>
                                                <div className='qlnx-box__icon qlnx-box__icon-small'>
                                                    <CancelIcon />
                                                </div>
                                            </div>
                                            <div className='qlnx-box__route-item qlnx-padding'>
                                                <span className='qlnx-box__title'>Tuyến đường 1</span>
                                                <div className='qlnx-box__icon qlnx-box__icon-small'>
                                                    <CancelIcon />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='qlnx-box__icon'>
                                            <ExpandMoreIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
