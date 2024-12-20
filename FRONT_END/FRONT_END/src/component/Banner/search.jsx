import { useEffect, useRef, useState } from "react";
import { callApiGetCity } from "../../redux/city/Asynthunk_city";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getSearchChuyenxe } from "../../redux/viewchuyenxe/viewcx-asynThunk";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import '../css/banner.css';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
export default function Search(){
    const [tpTo, settpTo] = useState('');
    const [tpfrom, settpfrom] = useState('');
    const [departuredate, setdeparturedate] = useState('');
    const [returndate, setreturndate] = useState('');
    const [inputsearch, setInputSearch] = useState('');
    // UseEffect call api lấy danh sách tỉnh thành phố
    useEffect(() => {
        dispatch(callApiGetCity())
    }, []);
    const datacity = useSelector((state)=> state.StoreCity?.datacity)
    console.log(datacity );
  
    // Thao tác với thẻ input nơi di chuyển
    function showDanhSachTinhTP(e) {
        console.log(inputsearch);
        setInputSearch(e);
    }

    // function lấy ngày đi ngày về gửi lên form
    function SelectDatereturnChangr(date) {
        const selectedDateReturn = date ? date.format('YYYY-MM-DD') : null;
        setreturndate(selectedDateReturn);
    }
    function SelectDateChange(date) {
        const selectedDate = date ? date.format('YYYY-MM-DD') : null;
        setdeparturedate(selectedDate);
    }

    // Tạo ref để theo dõi vùng danh sách
    const danhSachTinhTPRef = useRef(null);

    // useEffect để ẩn danh sách khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (danhSachTinhTPRef.current && !danhSachTinhTPRef.current.contains(event.target)) {
                setInputSearch(''); // Ẩn danh sách khi click ra ngoài
            }
        };

        // Gắn sự kiện mousedown cho document
        document.addEventListener('mousedown', handleClickOutside);

        // Hủy sự kiện khi component bị unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //thao tac voi form search
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm({
        defaultValues: {
            city_from: '',
            city_to: '',
        },
    });

    const handleSubmitSearch = () => {
        handleSubmit(onSubmit)();
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(data) {
        data.city_from =tpfrom;
        data.city_to =tpTo, 
        data.departure_date = departuredate;
        data.arrival_date = returndate;
        console.log('datainform them cphn', data);
        dispatch(getSearchChuyenxe(data)).then(() => {
            navigate('./viewchuyenxe');
        });
    }

    
    const isLoadBtnSearch = useSelector((state) => state.ViewChuyenXeSearch?.isLoadcx);
    console.log('', isLoadBtnSearch);
    return (
        <>
               <div className='search'>
                        <div className='search-content'>
                            <div className='search-top'>
                                <div className='search-list'>
                                    <div className='list-item'>
                                        <div className='item-icon select-item'>
                                            <DirectionsBusIcon style={{ color: '#414141' }} />
                                            <span className='icon-title'>Xe khách</span>
                                        </div>
                                        <div className='item-icon'>
                                            <FlightIcon style={{ color: '#414141' }} />
                                            <span className='icon-title'>Máy bay</span>
                                        </div>
                                        <div className='item-icon'>
                                            <TrainIcon style={{ color: '#414141' }} />
                                            <span className='icon-title'>Tàu hỏa</span>
                                        </div>
                                        <div className='item-icon'>
                                            <svg
                                                className='icon-search'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                fill='currentColor'
                                                xmlns='http://www.w3.org/2000/svg'
                                            >
                                                <g clipPath='url(#clip0_30084_225879)' fill=''>
                                                    <path d='M.51 4.637L4.68.497C5 .18 5.44 0 5.9 0h11.374C18.223 0 19 .763 19 1.714v6c0 .943-.777 1.715-1.727 1.715A2.578 2.578 0 0 1 14.682 12a2.578 2.578 0 0 1-2.591-2.571H6.909A2.578 2.578 0 0 1 4.32 12a2.578 2.578 0 0 1-2.592-2.571C.777 9.429 0 8.657 0 7.714v-1.86c0-.454.181-.891.51-1.217zm16.763-.351V2.57a.863.863 0 0 0-.864-.857h-2.59v3.429h2.59a.863.863 0 0 0 .864-.857zM14.682 10.5c.596 0 1.08-.48 1.08-1.071 0-.592-.484-1.072-1.08-1.072-.596 0-1.08.48-1.08 1.072 0 .591.484 1.071 1.08 1.071zM8.636 5.143h3.455V1.714H8.636v3.429zM4.318 10.5c.596 0 1.08-.48 1.08-1.071 0-.592-.484-1.072-1.08-1.072-.596 0-1.08.48-1.08 1.072 0 .591.484 1.071 1.08 1.071zM6.91 5.143V1.714h-.864L2.591 5.143h4.318zM21.167 18.284c-.128 0-.255.022-.376.036l-1.459-1.464h1.126c.39 0 .709-.321.709-.714v-.271a.707.707 0 0 0-1.027-.636l-1.615.814-1.82-1.835a.689.689 0 0 0-.497-.214h-2.125a.713.713 0 0 0 0 1.428h1.537c.192 0 .369.079.503.207l1.212 1.221h-2.373a.702.702 0 0 0-.32.079l-2.223 1.12a.697.697 0 0 1-.815-.135l-.85-.857a.742.742 0 0 0-.503-.207H7.708a.713.713 0 0 0 0 1.428h2.125c-1.785 0-3.18 1.657-2.755 3.528a2.816 2.816 0 0 0 2.09 2.106 2.839 2.839 0 0 0 3.499-2.778l.998 1.007c.27.272.63.421 1.006.421h.716c.51 0 .977-.27 1.232-.72l2.061-3.635.716.721a2.85 2.85 0 0 0-.978 2.892c.241 1.028 1.07 1.863 2.09 2.1 1.849.42 3.492-.993 3.492-2.786 0-1.578-1.268-2.856-2.833-2.856zM9.833 22.568c-.779 0-1.416-.642-1.416-1.428 0-.785.637-1.428 1.416-1.428.78 0 1.417.643 1.417 1.428 0 .786-.637 1.428-1.417 1.428zm11.334 0c-.78 0-1.417-.642-1.417-1.428 0-.785.637-1.428 1.417-1.428.779 0 1.416.643 1.416 1.428 0 .786-.637 1.428-1.416 1.428z'></path>
                                                </g>
                                            </svg>
                                            <span className='icon-title'>Thuê xe</span>
                                            <span className='new-lable'>Mới</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='search-bottom'>
                                <form action='' onSubmit={handleSubmit(handleSubmitSearch)}>
                                    <div className='search-wrapper'>
                                        <div className='search-input'>
                                            <div className='input-list'>
                                                <div className='input-items'>
                                                    <div className='input-icon'>
                                                        <img
                                                            src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div
                                                        className='input-data'
                                                        onClick={() => {
                                                            showDanhSachTinhTP('input-from');
                                                        }}
                                                    >
                                                        <label className='style-text'>Nơi xuất phát</label>
                                                        <input
                                                            className='style-input'
                                                            type='text'
                                                            value={tpfrom}
                                                            placeholder='Hà Nội'
                                                            {...register('city_from')}
                                                        />
                                                        {inputsearch == 'input-from' && (
                                                            <div
                                                                id='ds-tinh-tp'
                                                                className='ds-tinh-tp'
                                                                ref={danhSachTinhTPRef}
                                                            >
                                                                <ul>
                                                                    {datacity.map((item) => {
                                                                        return (
                                                                            <li
                                                                                key={item.id}
                                                                                onClick={() => {
                                                                                    settpfrom(item.name),
                                                                                        setInputSearch('');
                                                                                }}
                                                                            >
                                                                                {item.province}
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className='input-items'>
                                                    <div className='input-icon'>
                                                        <img
                                                            src='https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div
                                                        className='input-data'
                                                        onClick={() => {
                                                            showDanhSachTinhTP('input-to');
                                                        }}
                                                    >
                                                        <label className='style-text'>Nơi đến</label>
                                                        <input
                                                            className='style-input'
                                                            type='text'
                                                            placeholder='Hải Phòng'
                                                            value={tpTo}
                                                            {...register('city_to')}
                                                        />

                                                        {inputsearch == 'input-to' && (
                                                            <div
                                                                id='ds-tinh-tp'
                                                                className='ds-tinh-tp'
                                                                ref={danhSachTinhTPRef}
                                                            >
                                                                <ul>
                                                                    {datacity.map((item) => {
                                                                        return (
                                                                            <li
                                                                                key={item.id}
                                                                                onClick={() => {
                                                                                    settpTo(item.name),
                                                                                        setInputSearch('');
                                                                                }}
                                                                            >
                                                                                {item.province}
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div
                                                    className='input-items input-items-cursor'
                                                    onClick={() => {
                                                        showDanhSachTinhTP('show-date-to');
                                                    }}
                                                >
                                                    <div className='input-icon'>
                                                        <img
                                                            src='https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg'
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='input-data'>
                                                        <label className='style-text'>Ngày đi</label>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <MobileDatePicker
                                                                format='DD-MM-YYYY'
                                                                sx={{
                                                                    // Tùy chỉnh kích thước input
                                                                    '& input': {
                                                                        height: '5px', // Kích thước chiều cao
                                                                        fontSize: '14px',
                                                                        padding: '8px',
                                                                        marginLeft: '-10px', // Kích thước font chữ
                                                                    },
                                                                    // Loại bỏ outline
                                                                    '& .MuiOutlinedInput-root': {
                                                                        '& fieldset': {
                                                                            border: 'none', // Không có đường viền
                                                                        },
                                                                        '&:hover fieldset': {
                                                                            border: 'none', // Không có đường viền khi hover
                                                                        },
                                                                        '&.Mui-focused fieldset': {
                                                                            border: 'none', // Không có đường viền khi focus
                                                                        },
                                                                    },
                                                                }}
                                                                onChange={SelectDateChange}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>

                                                {returndate === '' ? (
                                                    <div
                                                        className='input-items add-date input-them-ngay-ve'
                                                        onClick={() => {
                                                            showDanhSachTinhTP('show-date-from');
                                                        }}
                                                    >
                                                        <div className='input-icon'>
                                                            <div className='icon-material'>
                                                                <AddIcon />
                                                            </div>
                                                        </div>
                                                        <p className='input-items__title'> Thêm ngày về</p>
                                                        {inputsearch === 'show-date-from' && (
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <MobileDatePicker
                                                                    sx={{
                                                                        // Tùy chỉnh kích thước input
                                                                        '& input': {
                                                                            height: '25px', // Kích thước chiều cao
                                                                            fontSize: '14px',
                                                                            padding: '8px',
                                                                            marginLeft: '-10px',
                                                                        },
                                                                        // Loại bỏ outline
                                                                        '& .MuiOutlinedInput-root': {
                                                                            '& fieldset': {
                                                                                border: 'none', // Không có đường viền
                                                                            },
                                                                            '&:hover fieldset': {
                                                                                border: 'none', // Không có đường viền khi hover
                                                                            },
                                                                            '&.Mui-focused fieldset': {
                                                                                border: 'none', // Không có đường viền khi focus
                                                                            },
                                                                        },
                                                                    }}
                                                                    onChange={SelectDatereturnChangr}
                                                                />
                                                            </LocalizationProvider>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className='input-data'>
                                                        <label className='style-text'>Ngày về</label>
                                                        <input
                                                            className='style-input no-underline'
                                                            type='text'
                                                            value={returndate}
                                                            {...register('ngay-ve')}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {isLoadBtnSearch === false ? (
                                            <div className='search-btn'>
                                                <input className='style-btn' type='submit' value='Tìm Kiếm' />
                                            </div>
                                        ) : (
                                            <LoadingButton
                                                loading
                                                loadingPosition='start'
                                                startIcon={<SaveIcon />}
                                                variant='outlined'
                                            >
                                                Tìm Kiếm
                                            </LoadingButton>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        </>
    )
}