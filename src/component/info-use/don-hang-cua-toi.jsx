
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/user/don-hang-cua-toi.css'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ width: '100%',marginTop:'40px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',width:'80%' }}>
        <Tabs value={value} onChange={handleChange} sx={{paddingLeft:'40px',
                                                         border:'1px solid rgb(192, 192, 192)',
                                                         margin:'auto',
                                                         backgroundColor:'#FFFFFF',
                                                         borderRadius:'5px'}} aria-label="basic tabs example">
          <Tab label="Hiện tại" {...a11yProps(0)} sx={{ marginRight: 20 }} />
          <Tab label="Đã đi" {...a11yProps(1)} sx={{ marginRight: 20 }} />
          <Tab label="Đã hủy" {...a11yProps(2)} sx={{ marginRight: 20 }}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Bạn chưa có chuyến đi nào
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Chưa có chuyến nào
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <div className="item-chuyen-xe-huy">
         <div className="noidung-chuyen-xe-huy">
            <div className="nd-cx-huy-top">
                <p><strong>T6,02/09/2024</strong></p>
                <div>Đã hủy</div>
            </div>
            <div className="thoigian-cx">
             08:15
            </div>
            <div className="nha-xe">Nam Quỳnh Anh</div>
            <div className="dia-diem-don-tra">Hà Nội - Nghệ An</div>
            <div className="bien-so-xe">Biển số xe: <strong>37B-087.74</strong></div>
            <button className='btn-dat-lai'><ConfirmationNumberIcon />Đặt lại</button>
         </div>
         
       </div>
        
      </CustomTabPanel>
    </Box>

        </>
    )
}