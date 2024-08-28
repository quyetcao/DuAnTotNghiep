//import css 
import '../css/viewchuyenxe.css'
// import icon 
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TrainIcon from '@mui/icons-material/Train';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
// import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import { red,blue } from '@mui/material/colors';




//import date

import TextField from '@mui/material/TextField';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

import { useState } from 'react';
import dayjs from 'dayjs';

export default function ViewChuyenxe() {
    // const [selectedDate, setSelectedDate] = useState(null);
    const [htlich, sethtlich] = useState(false);
    const [htngay, setngay] = useState(dayjs('2022-04-17'));
    function onclick() {
        sethtlich(true);
    }
    function onclick1() {
        sethtlich(false)
    }
    const [selectedDate, setSelectedDate] = useState([null, null]);

    const handleDateChange = (newValue) => {
        console.log(newValue);
        // Nếu có giá trị ngày được chọn, đặt cả ngày bắt đầu và ngày kết thúc bằng nhau
        if (newValue[0] && !newValue[1]) {
            setSelectedDate([newValue[0], newValue[0]]);
        } else {
            setSelectedDate(newValue);
        }
    };
    
      
    return (
        <>
            <div className="viewchuyenxe">
                <div className="container_viewchuyenxe">
                    <div className="ant-tabs-nav-scroll">
                        <div className="ant-tabs-nav ant-tabs-nav-animated">
                            <div className="tab-nav-typetraffic  bus selected-traffic">
                                <DirectionsBusIcon fontSize="medium" />
                                <span>100 K</span>
                            </div>
                            <div className="tab-nav-typetraffic  maybay">
                                <AirplanemodeActiveIcon fontSize="medium" />
                                <span>Máy bay</span>
                            </div>
                            <div className="tab-nav-typetraffic  tauhoa">
                                <TrainIcon fontSize="medium" />
                                <span>Tàu hỏa</span>
                            </div>
                        </div>
                        <div className="search_chuyenxe">
                            <form action="">
                                <div className="input_search noi_xuat_phat" >
                                    <div className="icon_container icon_xuat_phat">
                                        <TripOriginIcon color="primary" />
                                    </div>
                                    <div className="input_noi_xuat_phat">
                                        <TextField
                                            id="filled-helperText"
                                            label="Nơi xuất phát"
                                            defaultValue="Hải Phòng"
                                            variant="outlined" // Đảm bảo rằng bạn chọn variant đúng
                                            sx={{
                                              '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi sử dụng variant="outlined"
                                                },
                                                '&:hover fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi focus
                                                },
                                              },
                                            }}
                                        />
                                        {/* <ul className="VXRSelect2__DropdownWrapper-sc-13qmht0-1 UVRNF ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical">
                                            <li className="ant-select-dropdown-menu-item-group">
                                                <div className="ant-select-dropdown-menu-item-group-title" title="Địa điểm phổ biến">Địa điểm phổ biến</div>
                                                <ul className="ant-select-dropdown-menu-item-group-list">
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Hải Phòng</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Nghệ An</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Hà Giang</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Quảng Ninh</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Sơn La</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Ninh Bình</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Thanh Hóa</li>
                                                    <li className="Option__OptionItem-sc-6gsygm-0 RERwY ant-select-dropdown-menu-item ">Sa Pa</li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                                {/* <div>
                                    <SwapHorizontalCircleIcon fontSize="medium"/>
                                </div> */}
                                <div className="input_search noi_den" >
                                    <div className="icon_container icon_noi_den">
                                        <FmdGoodIcon  sx={{ color: red[500],fontSize: '33px' }} />
                                    </div>
                                    <div className="input_noi_den">
                                        <TextField 
                                            id="filled-helperText"
                                            label="Nơi đến"
                                            defaultValue="Hà Lan"
                                            variant="outlined" // Đảm bảo rằng bạn chọn variant đúng
                                            sx={{
                                              '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi sử dụng variant="outlined"
                                                },
                                                '&:hover fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi focus
                                                },
                                              },
                                            }}
                                        />

                                    </div>
                                </div>

                                <div className="input_search date_di" >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <CalendarMonthIcon fontSize="medium" sx={{ color: blue[500] }}/>
                                        <DateField label="Ngày Đi" onFocus={onclick} value={htngay}   variant="outlined" // Đảm bảo rằng bạn chọn variant đúng
                                            sx={{
                                              '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi sử dụng variant="outlined"
                                                },
                                                '&:hover fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi focus
                                                },
                                              },
                                            }}/>
                                        {htlich ? <DateRangeCalendar style={{position:'absolute',top:'150px',left:'350px',backgroundColor:'white'}} value={selectedDate} onBlur={onclick1} disablePast="true" onChange={(e) => {
                                            console.log(e[0]['$d']);
                                            const date = new Date(e[0]['$d']);
                                            const year = date.getFullYear();
                                            const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
                                            const day = String(date.getDate()).padStart(2, '0');
                                            const formattedDate = `${year}-${month}-${day}`;
                                            console.log(formattedDate);
                                            setngay(dayjs(formattedDate))
                                            handleDateChange
                                        }} /> : ''}
                                    </LocalizationProvider>
                                </div>
                                <div className="input_search date_ve" >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <AddIcon fontSize="medium" sx={{ color: blue[500] }}/>
                                        <DateField label="Ngày Về" onFocus={onclick} value={htngay}   variant="outlined" // Đảm bảo rằng bạn chọn variant đúng
                                            sx={{
                                              '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi sử dụng variant="outlined"
                                                },
                                                '&:hover fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi hover
                                                },
                                                '&.Mui-focused fieldset': {
                                                  border: 'none', // Ẩn đường viền ngoài khi focus
                                                },
                                              },
                                            }}/>
                                        {/* {htlich ? <DateRangeCalendar  value={selectedDate} onBlur={onclick1} disablePast="true" onChange={(e) => {
                                            console.log(e[0]['$d']);
                                            const date = new Date(e[0]['$d']);
                                            const year = date.getFullYear();
                                            const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
                                            const day = String(date.getDate()).padStart(2, '0');
                                            const formattedDate = `${year}-${month}-${day}`;
                                            console.log(formattedDate);
                                            setngay(dayjs(formattedDate))
                                            handleDateChange
                                        }} /> : ''} */}
                                    </LocalizationProvider>
                                </div>
                            </form>
                            <button className='timkiem'>TÌM KIẾM</button>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}