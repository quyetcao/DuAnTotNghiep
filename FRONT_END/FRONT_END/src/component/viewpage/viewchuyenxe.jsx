//import css
import '../css/viewchuyenxe.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import icon
// import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
// import TrainIcon from '@mui/icons-material/Train';
// import TripOriginIcon from '@mui/icons-material/TripOrigin';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AddIcon from '@mui/icons-material/Add';
// import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
// import { red, blue } from '@mui/material/colors';

//import date

// import TextField from '@mui/material/TextField';
// import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

import { useState } from 'react';
import dayjs from 'dayjs';

// thao tác với radio
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// thao tác với bộ lọc
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Rating, Slider } from '@mui/material';

//
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';

//import
import DanhSachChuyenXe from './ds-chuyen-xe';
import CauHoiThuonGap from './cau-hoi-thuong-gap';
import ThongTinTuyenDuong from './thong-tin-tuyen-duong';
import GioiThieuTuyenDuong from './gioi-thieu-tuyen-duong';
import DanhSachChuyenXeResponsive from './ds-chuyenxe-responsive';
// import { useNavigate } from "react-router-dom";
import NoSearch from './nosearch';
import Search from '../Banner/search';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { callApiSeatCarTripByCarTripId } from '../../redux/info-bus/infobus-asynThunk';

export default function ViewChuyenxe() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [activeIndex1, setActiveIndex1] = useState(null);
    // loc
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    /////////code để show thông tin chuyến xe đã được search
    const allChuyenxeSearch = useSelector((state) => state.ViewChuyenXeSearch?.AllChuyenXeSearch);
    console.log('cx search', allChuyenxeSearch);

    //
    const [viewNoSearch, setviewNoSearch] = useState(false);
    useEffect(() => {
        if (allChuyenxeSearch.length === 0) {
            console.log('view No search ');
            setviewNoSearch(true);
        } else {
            setviewNoSearch(false);
        }
    }, []);
   



    //// Thưc hien code Lọc
    const [sortOption, setSortOption] = useState('Mặt định'); // mặc định là 'Mặt định'
    const [sortedTrips, setSortedTrips] = useState([]); // state để lưu danh sách chuyến xe đã sắp xếp

    // Step 2: Hàm xử lý thay đổi giá trị radio
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    useEffect(() => {

    let sortedData = [...allChuyenxeSearch];

    switch(sortOption) {
        case 'Giờ đi sớm nhất':
          sortedData.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
          break;
        case 'Giờ đi muộn nhất':
          sortedData.sort((a, b) => b.departureTime.localeCompare(a.departureTime));
          break;
        case 'Đánh giá cao nhất':
          sortedData.sort((a, b) => b.rating - a.rating);
          break;
        case 'Giá tăng dần':
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case 'Giá giảm dần':
          sortedData.sort((a, b) => b.price - a.price);
          break;
        default:
          // Mặt định: không sắp xếp
          break;
      }
  
      setSortedTrips(sortedData); 
    }, [sortOption]); 





    return (
        <>
            <div className='viewchuyenxe'>
                <div className='container_viewchuyenxe'>
                    <Search />

                    {viewNoSearch ? (
                        <NoSearch></NoSearch>
                    ) : (
                        <div className='thong-tin-cac-chuyen-xe'>
                            <div className='loc-cac-chuyen-xe'>
                                <div className='sap-xep'>
                                    <FormControl>
                                        <p
                                            id='demo-radio-buttons-group-label'
                                            className='title-sapxep'
                                            style={{ fontSize: '18px' }}
                                        >
                                            Sắp Xếp
                                        </p>
                                        <RadioGroup
                                            aria-labelledby='demo-radio-buttons-group-label'
                                            defaultValue='female'
                                            name='radio-buttons-group'
                                            value={sortOption} // giá trị của radio được quản lý từ state
                                            onChange={handleSortChange} // hàm xử lý khi người dùng chọn radio khác
                                        >
                                            <FormControlLabel
                                                value='Mặt định'
                                                className='radio-select'
                                                style={{ fontSize: '14px' }}
                                                control={<Radio />}
                                                label='Mặt định'
                                            />
                                            <FormControlLabel
                                                value='Giờ đi sớm nhất'
                                                className='radio-select'
                                                control={<Radio />}
                                                label='Giờ đi sớm nhất'
                                            />
                                            <FormControlLabel
                                                value='Giờ đi muộn nhất'
                                                className='radio-select'
                                                control={<Radio />}
                                                label='Giờ đi muộn nhất'
                                            />
                                            <FormControlLabel
                                                value='Đánh giá cao nhất'
                                                className='radio-select'
                                                control={<Radio />}
                                                label='Đánh giá cao nhất'
                                            />
                                            <FormControlLabel
                                                value='Giá tăng dần'
                                                className='radio-select'
                                                control={<Radio />}
                                                label='Giá tăng dần'
                                            />
                                            <FormControlLabel
                                                value='Giá giảm dần'
                                                className='radio-select'
                                                control={<Radio />}
                                                label='Giá giảm dần'
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                                <div className='loc'>
                                    <div className='loc-top'>
                                        <h3>Lọc</h3>
                                        <h4>Xóa lọc</h4>
                                    </div>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Giờ đi
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay='auto'
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'MultiInputTimeRangeField',
                                                        'SingleInputTimeRangeField',
                                                    ]}
                                                >
                                                    <MultiInputTimeRangeField
                                                        slotProps={{
                                                            textField: ({ position }) => ({
                                                                label: position === 'start' ? 'Từ' : 'Đến',
                                                            }),
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Nhà Xe
                                        </AccordionSummary>

                                        <AccordionDetails>
                                            <input
                                                className='input-timkiem input-tk-nha-xe'
                                                placeholder='Tìm kiếm trong danh sách'
                                            ></input>
                                            <div className='check-box-nha-xe'>
                                                <form action='#'>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle1' name='nx1' value='nx1' />
                                                        <label htmlFor='vehicle1'>Anh Huy Hải Phòng (192)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle2' name='nx1' value='nx2' />
                                                        <label htmlFor='vehicle2'>Hoàng Hải (152)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle3' name='nx1' value='nx3' />
                                                        <label htmlFor='vehicle2'>Aha (52)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle4' name='nx1' value='nx4' />
                                                        <label htmlFor='vehicle4'>AGO Hoàng Phương (39)</label>
                                                        <br></br>
                                                    </div>
                                                </form>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Giá vé
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay='auto'
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'MultiInputTimeRangeField',
                                                        'SingleInputTimeRangeField',
                                                    ]}
                                                ></DemoContainer>
                                                <div className='khoang-tien'>
                                                    <p>0đ</p>
                                                    <p>2000000đ</p>
                                                </div>
                                            </LocalizationProvider>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Điểm đón
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <input
                                                className='input-timkiem input-tk-nha-xe'
                                                placeholder='Tìm kiếm trong danh sách'
                                            ></input>
                                            <div className='check-box-nha-xe'>
                                                <form action='#'>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle1' name='nx1' value='nx1' />
                                                        <label htmlFor='vehicle1'>Anh Huy Hải Phòng (192)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle2' name='nx1' value='nx2' />
                                                        <label htmlFor='vehicle2'>Hoàng Hải (152)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle3' name='nx1' value='nx3' />
                                                        <label htmlFor='vehicle2'>Aha (52)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle4' name='nx1' value='nx4' />
                                                        <label htmlFor='vehicle4'>AGO Hoàng Phương (39)</label>
                                                        <br></br>
                                                    </div>
                                                </form>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Điểm trả
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <input
                                                className='input-timkiem input-tk-nha-xe'
                                                placeholder='Tìm kiếm trong danh sách'
                                            ></input>
                                            <div className='check-box-nha-xe'>
                                                <form action='#'>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle1' name='nx1' value='nx1' />
                                                        <label htmlFor='vehicle1'>Anh Huy Hải Phòng (192)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle2' name='nx1' value='nx2' />
                                                        <label htmlFor='vehicle2'>Hoàng Hải (152)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle3' name='nx1' value='nx3' />
                                                        <label htmlFor='vehicle2'>Aha (52)</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle4' name='nx1' value='nx4' />
                                                        <label htmlFor='vehicle4'>AGO Hoàng Phương (39)</label>
                                                        <br></br>
                                                    </div>
                                                </form>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Tiêu chí phổ biến
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay='auto'
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'MultiInputTimeRangeField',
                                                        'SingleInputTimeRangeField',
                                                    ]}
                                                >
                                                    <MultiInputTimeRangeField
                                                        slotProps={{
                                                            textField: ({ position }) => ({
                                                                label: position === 'start' ? 'Từ' : 'Đến',
                                                            }),
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Vị trí ghế
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay='auto'
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'MultiInputTimeRangeField',
                                                        'SingleInputTimeRangeField',
                                                    ]}
                                                >
                                                    <MultiInputTimeRangeField
                                                        slotProps={{
                                                            textField: ({ position }) => ({
                                                                label: position === 'start' ? 'Từ' : 'Đến',
                                                            }),
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Loại Xe
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                onChange={handleChange}
                                                valueLabelDisplay='auto'
                                            />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer
                                                    components={[
                                                        'MultiInputTimeRangeField',
                                                        'SingleInputTimeRangeField',
                                                    ]}
                                                >
                                                    <MultiInputTimeRangeField
                                                        slotProps={{
                                                            textField: ({ position }) => ({
                                                                label: position === 'start' ? 'Từ' : 'Đến',
                                                            }),
                                                        }}
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion style={{ margin: 0 }} className='accordion' sx={{ boxShadow: 0 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Loại ghế/giường
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='check-box-giuong-ghe'>
                                                <form action='#'>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle1' name='nx1' value='nx1' />
                                                        <label htmlFor='vehicle1'>Ghế ngồi</label>
                                                        <br />
                                                    </div>
                                                    <div className='item-cb-nx'>
                                                        <input type='checkbox' id='vehicle2' name='nx1' value='nx2' />
                                                        <label htmlFor='vehicle2'>Giường nằm</label>
                                                        <br />
                                                    </div>
                                                </form>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion
                                        style={{ margin: 0, borderBottom: 'none' }}
                                        className='accordion'
                                        sx={{ boxShadow: 0 }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls='panel1-content'
                                            id='panel1-header'
                                            className='AccordionSummary'
                                            sx={{ padding: 0, fontWeight: '700' }}
                                        >
                                            Đánh giá
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='loc-bang-sao'>
                                                <div className='so-sao'>
                                                    <Rating name='read-only' value={4} readOnly size='small' />
                                                    Trở lên
                                                </div>
                                                <div className='so-sao'>
                                                    <Rating name='read-only' value={3} readOnly size='small' />
                                                    Trở lên
                                                </div>
                                                <div className='so-sao'>
                                                    <Rating name='read-only' value={2} readOnly size='small' />
                                                    Trở lên
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div className='thanhcuon'></div>
                            </div>
                            <div className='thong-tin-tung-chuyen-xe'>
                                <div className='ttcx-top slide-hinh-anh'>
                                    <p>Tiêu chí lọc nhanh phổ biến</p>
                                    <div className='slide-anh'>
                                        <div className='anh-loc'>
                                            <img src='../../images/img_page_viewchuyenxe/banner (5).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (6).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (7).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (8).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (1).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (2).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (3).png' alt='' />
                                            <img src='../../images/img_page_viewchuyenxe/banner (4).png' alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='title-chuyenxe'>
                                    <h3 className='title-cx-1'>
                                        Đặt mua vé xe đi từ Hà Nội Đến Hải Phòng Chất lượng cao và giá vé ưu đãi
                                        nhất:8386 Chuyến
                                    </h3>
                                    <p className='title-cx-2'>Đặt chuyến xe trực tuyến</p>
                                </div>
                                <div className='ds-cx-desktop'>
                                    {sortedTrips.map((item, index) => {
                                        return <DanhSachChuyenXe key={item.id} index={index} item={item}
                                            isActive={activeIndex === index}
                                            isActive1={activeIndex1 === index}// Kiểm tra chuyến xe này có đang được bật hay không
                                            onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                                            onClick={() => setActiveIndex1(activeIndex1 === index ? null : index)}
                                        />;
                                    })}
                                </div>
                                <div className='ds-cx-tablet'>
                                    <DanhSachChuyenXeResponsive />
                                    <DanhSachChuyenXeResponsive />
                                    <DanhSachChuyenXeResponsive />
                                    <DanhSachChuyenXeResponsive />
                                </div>
                            </div>
                        </div>
                    )}

                    <CauHoiThuonGap />
                    <ThongTinTuyenDuong />
                    <GioiThieuTuyenDuong />
                </div>
            </div>
        </>
    );
}
