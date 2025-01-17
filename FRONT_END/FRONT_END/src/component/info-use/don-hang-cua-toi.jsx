import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import '../css/user/don-hang-cua-toi.css';
import { useDispatch, useSelector } from 'react-redux';
import { callApidonhanguser } from '../../redux/thanhtoan/AsyncThunk_thanhtoan';
import dayjs from 'dayjs';
function CustomTabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DonHangCuaToi() {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.LoginLogOutRegister?.infoUser);
    console.log("infousserinfousser", user_id);

    useEffect(() => {
        dispatch(callApidonhanguser(user_id?.id));
    }, [user_id])

    const donhang = useSelector((state) => state.StoreThanhToan?.datadhuser);
    console.log("fjnvkdfs", donhang.data);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    /// cách dùng hiển thị hay 
    // const statusMessages = {
    //     paid: "Đã Thanh Toán",
    //     pending: "Đang Chờ Xử Lý",
    //     canceled: "Đã Hủy",
    //   };
      
    //   // Trong JSX
    //   <>
    //     {statusMessages[item?.status] || "Trạng Thái Không Xác Định"}
    //   </>

    return (
        <>
            <div className='dhct-header'>
                <span className='dhct-title'>Đơn hàng của tôi</span>
            </div>
            <Box sx={{ width: '100%', marginTop: '40px' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '80%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        sx={{
                            paddingLeft: '40px',
                            border: '1px solid rgb(192, 192, 192)',
                            margin: 'auto',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '5px',
                        }}
                        aria-label='basic tabs example'
                    >
                        <Tab label='Giới Thiệu' {...a11yProps(0)} sx={{ marginRight: 20 }} />
                        <Tab label='Vé Đã Đặt' {...a11yProps(1)} sx={{ marginRight: 20 }} />
                        <Tab label='Đã hủy' {...a11yProps(2)} sx={{ marginRight: 20 }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <p>Bạn đang đăng nhập vào trang dành cho khách hàng,</p>
                    <p>Bạn có thể xem được trạng thái vé </p>
                    <p>Cảm Ơn quý khách </p>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {Array.isArray(donhang?.data) && donhang.data.map((item, index) => (
                        <div className="item-chuyen-xe-huy" key={index}>
                            <div className="noidung-chuyen-xe-huy">
                                <div className="nd-cx-huy-top">
                                    <p>
                                        <strong>{item?.departure_date ? dayjs(item?.departure_date).format("DD-MM-YYYY") : <></>}</strong>
                                    </p>
                                    {
                                        item?.status === 'paid' ? (
                                            <div style={{color:'green'}}><>Đã Thanh Toán</></div>
                                        ) : item?.status === 'pending' ? (
                                            <div style={{color:'yellow'}}><>Đang Chờ Xử Lý</></div>
                                        ) : item?.status === 'cancelled' ? (
                                            <div style={{color:'red'}}><>Đã Hủy</></div>
                                        ) : (
                                            <>Trạng Thái Không Xác Định</>
                                        )
                                    }
                                </div>
                                <div className="thoigian-cx">{item?.car_trip?.pickup_points?.[0]?.pivot?.pickup_time}</div>
                                <div className="line-height this-is-nha-xe">NAM QUỲNH ANH</div>
                                <div className="line-height dia-diem-don-tra">Hà Nội - Nghệ An</div>
                                <div className="line-height bien-so-xe">
                                    Biển số xe: <strong>37B-087.74</strong>
                                </div>
                                <button className="btn-dat-lai">
                                    <ConfirmationNumberOutlinedIcon fontSize="small" />
                                    Đặt lại
                                </button>
                            </div>
                        </div>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className='item-chuyen-xe-huy'>
                        <div className='noidung-chuyen-xe-huy'>
                            <div className='nd-cx-huy-top'>
                                <p>
                                    <strong>T6, 02/09/2024</strong>
                                </p>
                                <div>Đã hủy</div>
                            </div>
                            <div className='thoigian-cx'>08:15</div>
                            <div className='line-height this-is-nha-xe'>NAM QUỲNH ANH</div>
                            <div className='line-height dia-diem-don-tra'>Hà Nội - Nghệ An</div>
                            <div className='line-height bien-so-xe'>
                                Biển số xe: <strong>37B-087.74</strong>
                            </div>
                            <button className='btn-dat-lai'>
                                <ConfirmationNumberOutlinedIcon fontSize='small' />
                                Đặt lại
                            </button>
                        </div>
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}

