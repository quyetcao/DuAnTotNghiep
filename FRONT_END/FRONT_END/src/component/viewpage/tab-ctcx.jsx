import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Avatar, Chip, Drawer, Pagination, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import CircleIcon from '@mui/icons-material/Circle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import Drawer from '@mui/material/Drawer';
// Tạo component TabPanel
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

// Hàm để tạo các props phù hợp cho từng Tab
function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export default function ScrollableTabsButtonVisible() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // thanh lực
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        width: '110px',
        height: 6,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#1a90ff',
            ...theme.applyStyles('dark', {
                backgroundColor: '#308fe8',
            }),
        },
    }));

    //////
    function openttct() {
        console.log('hello');
        var elements = document.getElementsByClassName('thong-tin-chi-tiet');
        if (elements.length > 0) {
            elements[0].style.display = 'none';
        }
    }

    /// TogalDrawr
    const [drawer, setDrawer] = React.useState(false);

    function toggleDrawer() {
        setDrawer(true);
    }

    return (
        <Box
            sx={{
                position: 'relative',
                flexGrow: 1,
                bgcolor: 'background.paper',
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons
                aria-label='visible arrows tabs example'
                sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                }}
            >
                <Tab label='Giảm giá' {...a11yProps(0)} />
                <Tab label='Điểm đón, trả' {...a11yProps(1)} />
                <Tab label='Đánh giá' {...a11yProps(2)} />
                <Tab label='Hình ảnh' {...a11yProps(4)} />
                <Tab label='Chính sách' {...a11yProps(3)} />
                <Tab label='Tiện ích' {...a11yProps(5)} />
            </Tabs>

            {/* Nội dung của từng TabPanel */}
            <TabPanel value={value} index={0}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingLeft: '60px' }}>
                    <div className='coupon-info-route-page-container' onClick={toggleDrawer}>
                        <div className='giamgia'>
                            <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                            <div className='thong-tin-ve-giam'>
                                <div className='title-giam-gia'>
                                    Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                                </div>
                                <div className='price-giam'>Giảm 10%</div>
                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                <div className='hsd'>
                                    HSD:<strong>T3, 10/9 14:00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='coupon-info-route-page-container' onClick={toggleDrawer}>
                        <div className='giamgia'>
                            <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                            <div className='thong-tin-ve-giam'>
                                <div className='title-giam-gia'>
                                    Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                                </div>
                                <div className='price-giam'>Giảm 10%</div>
                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                <div className='hsd'>
                                    HSD: <strong>T3, 10/9 14:00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='coupon-info-route-page-container' onClick={toggleDrawer}>
                        <div className='giamgia'>
                            <img src='../../images/img_page_viewchuyenxe/screenshot_1725632126.png' alt='' />
                            <div className='thong-tin-ve-giam'>
                                <div className='title-giam-gia'>
                                    Bạn Mới (Vexere) <ErrorOutlineOutlinedIcon style={{ fontSize: '14px' }} />
                                </div>
                                <div className='price-giam'>Giảm 10%</div>
                                <div className='dk-giam'>Đơn hàng tối đa 1 vé</div>
                                <div className='hsd'>
                                    HSD: <strong>T3, 10/9 14:00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ paddingLeft: '60px', paddingRigth: '60px' }}>
                <div className='luu-y'>
                    <h2>Lưu ý</h2>
                    <p>Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.</p>
                    <p>Lịch này có thể thay đổi tùy tình hình thưc tế.</p>
                </div>
                <div className='diem-don-tra'>
                    <div className='diem-don'>
                        <h3>Điểm đón</h3>
                        <ul>
                            <li style={{ fontWeight: '500' }}>
                                08:11
                                <ul>
                                    <li className='trung-chuyen'>Có trung chuyển</li>
                                    <li>Đón/trả tận nơi trong thành phố Hải Phòng</li>
                                </ul>
                            </li>
                            <li>
                                09:01
                                <ul>
                                    <li>Hải Phòng</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='diem-tra'>
                        <h3>Điểm trả</h3>
                        <ul>
                            <li>
                                08:11
                                <ul>
                                    <li className='trung-chuyen'>Có trung chuyển</li>
                                    <li>Đón/trả tận nơi trong thành phố Hải Phòng</li>
                                </ul>
                            </li>
                            <li>
                                09:01
                                <ul>
                                    <li>Hải Phòng</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className='tong-quan-danh-gia'>
                    <div className='trung-binh-sao'>
                        <Chip icon={<StarIcon />} label='4.8' />
                        <Rating name='read-only' value='4.8' readOnly />
                        <div>• 829 đánh giá</div>
                    </div>
                </div>
                <div className='chi-tiet-danh-gia'>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>Thái độ nhân viên</p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>Chất lượng dịch vụ</p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>An toàn </p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>Thông tin đầy đủ </p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>Thông tin chính xác</p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                    <div className='item-danh-gia'>
                        <p className='title-dg'>Tiện nghi & thoãi mái</p>
                        <div>
                            <BorderLinearProgress variant='determinate' value={80} />
                            <p>3.4</p>
                        </div>
                    </div>
                </div>

                <div className='button-binh-luan'>
                    <div>
                        <button>Tất cả (829)</button>
                        <button>Có nhận xét (39)</button>
                        <button>Có hình ảnh (19)</button>
                        <button>
                            5<StarIcon sx={{ fontSize: 18 }} /> (29)
                        </button>
                        <button>
                            4<StarIcon sx={{ fontSize: 18 }} /> (29)
                        </button>
                        <button>
                            3<StarIcon sx={{ fontSize: 18 }} /> (29)
                        </button>
                        <button>
                            2<StarIcon sx={{ fontSize: 18 }} /> (29)
                        </button>
                        <button>
                            1<StarIcon sx={{ fontSize: 18 }} />
                            (29)
                        </button>
                    </div>
                </div>
                <div className='binh-luan'>
                    <div className='item-bl'>
                        <div className='item-bl-infouse'>
                            <Avatar
                                alt='Remy Sharp'
                                src='../../images/img_page_viewchuyenxe/hinh-nen-gai-xinh-viet-nam-mac-vay-hoa.jpg'
                                sx={{ width: 50, height: 50 }}
                            />
                            <div className='nameuser-star'>
                                <div>Ali Du Som</div>
                                <Rating name='read-only' value='4.8' readOnly size='small' />
                            </div>
                        </div>
                        <div className='nd-bl'>
                            <p>Ok dichj vụ rất tốt...</p>
                        </div>
                        <div className='tgian-bl'>
                            <p>
                                Đi ngày 24/06/2024{' '}
                                <span>
                                    <VerifiedIcon sx={{ width: '16px' }} /> Đã đặt vé
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='item-bl'>
                        <div className='item-bl-infouse'>
                            <Avatar
                                alt='Remy Sharp'
                                src='../../images/img_page_viewchuyenxe/hinh-nen-gai-xinh-viet-nam-mac-vay-hoa.jpg'
                                sx={{ width: 50, height: 50 }}
                            />
                            <div className='nameuser-star'>
                                <div>Ali Du Som</div>
                                <Rating name='read-only' value='4.8' readOnly size='small' />
                            </div>
                        </div>
                        <div className='nd-bl'>
                            <p>Ok dichj vụ rất tốt...</p>
                        </div>
                        <div className='tgian-bl'>
                            <p>
                                Đi ngày 24/06/2024{' '}
                                <span>
                                    <VerifiedIcon sx={{ width: '16px' }} /> Đã đặt vé
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Pagination
                    count={10}
                    variant='outlined'
                    color='primary'
                    sx={{ display: 'flex', justifyContent: 'center' }}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                ĐANG PHÁT TRIỂN
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className='chinh-sach-container'>
                    <div className='cs-top'>
                        <h2>Chính sách hủy đơn hàng</h2>
                        <div className='hinh-anh-truc-quan'>
                            <div className='thoi-gian-hm'>
                                <strong>18:01</strong> <p>08/09/2024</p>
                            </div>
                            <div>
                                <div className='thanh-mau-vang'>
                                    <div className='hom-nay'>Hôm nay</div>
                                    <CircleIcon sx={{ fontSize: 14, color: 'white', margin: 'auto' }} />
                                </div>
                                <div className='thanh-mua-do'>
                                    <div className='khoihanh'>Khởi hành</div>
                                    <CircleIcon
                                        sx={{ fontSize: 14, color: 'white', margin: 'auto', marginLeft: '230px' }}
                                    />
                                </div>
                            </div>
                            <div className='title-huy'>
                                <p>Không mất phí</p>
                                <p>Phí hủy 100%</p>
                            </div>
                        </div>
                    </div>
                    <div className='note'>
                        <strong>Ghi chú:</strong>
                        <span>
                            {' '}
                            Phí huỷ sẽ được tính trên giá gốc, không giảm trừ khuyến mãi hoặc giảm giá; đồng thời không
                            vượt quá số tiền quý khách đã thanh toán.
                        </span>
                    </div>

                    <div className='chinh-sach-nha-xe'>
                        <p>Chính sách nhà xe</p>
                        <ul>
                            {' '}
                            Yêu cầu khi lên xe
                            <li>Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe</li>
                            <li>Xuất trình SMS/Email đặt vé trước khi lên xe</li>
                            <li>Không mang đồ ăn, thức ăn có mùi lên xe</li>
                            <li>Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe</li>
                            <li>Không mang các vật dễ cháy nổ lên xe</li>
                            <li>Không vứt rác trên xe</li>
                            <li>Không làm ồn, gây mất trật tự trên xe</li>
                        </ul>
                        <ul>
                            {' '}
                            Hành lý sách tay
                            <li>Tổng trọng lượng hành lý không vượt quá 7 kg</li>
                        </ul>
                        <ul>
                            Trẻ em và phụ nữ có thai
                            <li>
                                Trẻ em dưới 3 tuổi hoặc dưới 100 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ
                            </li>
                            <li>Trẻ em từ 3 tuổi hoặc cao từ 100 cm trở lên mua vé như người lớn</li>
                            <li>Phụ nữ có thai cần đảm bảo sức khỏe trong suốt quá trình di chuyển</li>
                            <li>
                                Nhà xe có quyền từ chối phục vụ nếu hành khách không tuân thủ quy định về trẻ em và phụ
                                nữ có thai
                            </li>
                        </ul>
                        <ul>
                            Động vật cảnh/Thú cưng
                            <li>Nhà xe không nhận chở động vật cảnh/thú cưng</li>
                        </ul>
                        <ul>
                            Xuất hóa đơn GTGT
                            <li>
                                Nhà xe có cung cấp hóa đơn GTGT cho dịch vụ xe khách, phí xuất hóa đơn là 10 % trên giá
                                dịch vụ quý khách đã mua
                            </li>
                            <li>Nhà xe từ chối xuất lại hóa đơn nếu hành khách cung cấp sai thông tin</li>
                        </ul>
                        <ul>
                            Gửi xe đạp/xe máy
                            <li>Nhà xe không nhận gửi kèm xe đạp/xe máy.</li>
                        </ul>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={5} style={{ paddingLeft: '60px', paddingRigth: '60px' }}>
                <div className='tien-ich box-1'>
                    <div className='tien-nghi'>
                        <div className='tien-nghi__item'>
                            <div className='tien-nghi__group'>
                                <img src='https://static.vexere.com/production/utilities/1610093150480.png' />
                                <span>Nước uống</span>
                            </div>
                            <p className='tien-nghi__desc'>Nhà xe có phục vụ nước cho hành khách</p>
                        </div>
                        <div className='tien-nghi__line'></div>
                        <div className='tien-nghi__item'>
                            <div className='tien-nghi__group'>
                                <img src='https://static.vexere.com/production/utilities/1610093127922.png' />
                                <span>Gối nằm</span>
                            </div>
                            <p className='tien-nghi__desc'>Trên xe có trang bị gối nằm</p>
                        </div>
                    </div>
                </div>
                <div className='tien-ich box-2'>
                    <div className='tien-nghi__container'>
                        <div className='tien-nghi__center'>
                            <div className='tien-nghi__list'>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1609837175400.png' />
                                    <span>TV LED</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1609837338878.png' />
                                    <span>Sạc điện thoại</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1610093201933.png' />
                                    <span>Rèm cửa</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1610093169649.png' />
                                    <span>Chăn đắp</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1609837875569.png' />
                                    <span>Wifi</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1609837782107.png' />
                                    <span>Điều hòa</span>
                                </div>
                                <div className='tien-nghi__list-item item-group__list'>
                                    <img src='https://static.vexere.com/production/utilities/1610093184385.png' />
                                    <span>Khăn lạnh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={6}>
                Nội dung của Tab 7
            </TabPanel>
            <CancelOutlinedIcon sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }} onClick={openttct} />
            <Drawer
                anchor='right'
                open={drawer}
                variant='temporary'
                onClose={() => setDrawer(false)}
                PaperProps={{
                    sx: { width: '42%' }, // Điều chỉnh chiều rộng ở đây
                }}
            >
                <div className='chi-tiet-ma-giam-gia'>
                    <div className='ctmgg-top'>
                        <ArrowBackIcon sx={{ color: 'white' }} />
                        <p>Chi tiết mã giảm giá</p>
                    </div>
                    <div className='ctmgg-img'>
                        <img src='../../images/img_page_viewchuyenxe/coupon-background-new.png' alt='' />
                    </div>
                    <div className='ctmgg-nd'>
                        <div className='ma-so'>FS100924VXR10</div>
                        <div className='phan-tram-giam'>Giảm 10%</div>
                        <div className='dieu-kien-giam1'>Đơn hàng tối đa 1 vé</div>
                        <div className='tg-giam'>
                            <QueryBuilderIcon sx={{ color: '#2474E5' }} />
                            <p>
                                <strong>HSD:</strong>
                                <span> T3, 09/09/2024</span>
                            </p>
                        </div>
                    </div>
                    <div className='pham-vi-ap-dung'>
                        <h3>Phạm vi áp dụng</h3>
                        <div className='pv pv-1'>
                            <AltRouteIcon sx={{ color: '#2474E5' }} />
                            <div>
                                <strong>Tuyến đường:</strong>Tất cả tuyến đường
                            </div>
                        </div>
                        <div className='pv pv-2'>
                            <DirectionsBusFilledIcon sx={{ color: '#2474E5' }} />
                            <div>
                                <strong>Nhà xe:</strong>Áp dụng cho tất cả nhà xe
                            </div>
                        </div>
                        <div className='pv pv-3'>
                            <AccessTimeIcon sx={{ color: '#2474E5' }} />

                            <div>
                                <strong>Ngày đặt vé:</strong> T3, 10/09 12:00 - T3, 10/09 14:00
                            </div>
                        </div>
                        <div className='pv pv-4'>
                            <CalendarTodayIcon sx={{ color: '#2474E5' }} />
                            <div>
                                <strong> Ngày khởi hành:</strong> T3, 10/09 12:00 - T2, 23/09 14:00
                            </div>
                        </div>
                    </div>
                    <div className='dk-su-dung'>
                        <h3>Diều kiện sử dụng</h3>
                        <p>Giảm 10% khi đơn hàng có tối đa 1 vé</p>
                        <p>
                            - Lưu ý: Đối với vé khứ hồi, giá trị đơn hàng và số lượng vé được xét giảm giá trên từng
                            chiều
                        </p>
                        <p>- Mã giảm giá chỉ áp dụng cho khách hàng lần đầu đặt vé tại Vexere</p>
                        <p>- Lượt sử dụng mã: 1 lần/khách hàng</p>
                        <p>- Vé có sử dụng mã giảm giá thuộc chương trình KHÔNG được hoàn/hủy/đổi/trả.</p>
                        <p>
                            - Ưu đãi chỉ áp dụng cho KH đặt vé tại Website/App và tổng đài đặt vé VeXeRe. Không áp dụng
                            hình thức thanh toán tại Nhà xe.
                        </p>
                        <p>- Có thể áp dụng đồng thời với các chương trình khuyến mãi từ đối tác thanh toán.</p>
                        <p>- Số lượng mã giảm giá có giới hạn, chương trình có thể kết thúc sớm hơn so với dự kiến.</p>
                    </div>
                    <div className='button-dong'>
                        <button>Đóng</button>
                    </div>
                </div>
            </Drawer>
        </Box>
    );
}
