import '../css/user/thong-tin-tk.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CallapiUpdateUser } from '../../redux/admin-vexere/user/asynThunk-user';
export default function ThongTinTK() {
    const [alignment, setAlignment] = useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const infoUser=useSelector((state) => state.LoginLogOutRegister?.infoUser);
    console.log("infoUser",infoUser);
    const role=infoUser?.role;

    const dispatch=useDispatch();
     const { register, handleSubmit,setValue} = useForm()
     setValue('name',infoUser.name);
     setValue('phone',infoUser.phone)
     setValue('email',infoUser.email)
     
        const onSubmit = (data) => {
            console.log(data)
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('phone', data.phone);
            formData.append('email', data.email);
            dispatch(CallapiUpdateUser(infoUser.id,formData))
        }
    
    return (
        <div className='thong-tin-ca-nhan'>
            <form action=''  onSubmit={handleSubmit(onSubmit)} >
                <div className='group-input'>
                    <label htmlFor=''>Họ và tên</label>
                    <input className='input-thongtincanhan'  {...register('name')} type='text' placeholder='Nguyễn Văn A' />
                </div>
                <div className='group-input'>
                    <label htmlFor=''>Số điện thoại</label>
                    <input className='input-thongtincanhan'  type='text' {...register('phone')} placeholder='0353113593' />
                </div>
                <div className='group-input'>
                    <label htmlFor=''>Email</label>
                    <input className='input-thongtincanhan'  type='text' {...register('email')} placeholder='a@gmail.com' />
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
                <input type='submit' className='luu-tk' value='LƯU'></input>
            </form>
        </div>
    );
}

// sx={{ width: '15rem' }}
