import '../css/user/thong-tin-tk.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
export default function ThongTinTK() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div className='thong-tin-ca-nhan'>
            <form action=''>
                <div className='group-input'>
                    <label htmlFor=''>Họ và tên</label>
                    <input className='input-thongtincanhan' type='text' placeholder='Cao Văn Quyết' />
                </div>
                <div className='group-input'>
                    <label htmlFor=''>Số điện thoại</label>
                    <input className='input-thongtincanhan' type='text' placeholder='0353113593' />
                </div>
                <div className='group-input'>
                    <label htmlFor=''>Ngày sinh</label>
                    <input className='input-thongtincanhan' type='text' placeholder='06/09/2004' />
                </div>
                <div className='group-input'>
                    <label htmlFor=''>Giới tính</label>
                    <ToggleButtonGroup
                        className='group-gender'
                        color='primary'
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label='Platform'
                    >
                        <ToggleButton value='web' className='item-gender'>
                            Nam
                        </ToggleButton>
                        <ToggleButton value='android' className='item-gender'>
                            Nữ
                        </ToggleButton>
                        <ToggleButton value='ios' className='item-gender'>
                            Khác
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <hr className='hr-card' />
                <button className='luu-tk'>Lưu</button>
            </form>
        </div>
    );
}

// sx={{ width: '15rem' }}
