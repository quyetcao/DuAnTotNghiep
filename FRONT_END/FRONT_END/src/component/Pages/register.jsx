import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { dangkytaikhoan } from '../../redux/login-logout-register/AsyncThunk-lg-lo-rg';

export default function Register() {

    const notify = (event) => {
        if (event == true) {
            toast.success("Đăng Ký Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Đăng Ký Không Thành Công Email hoặc Số điện thoại đã bị trùng!", { theme: "colored" });
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        console.log("data mật khẩu ", data);
        dispatch(dangkytaikhoan(data));
    }

    const isToastOk = useSelector((state) => state.LoginLogOutRegister?.registerOK);
    const isToastError = useSelector((state) => state.LoginLogOutRegister?.registerError);
    const messageError = useSelector((state) => state.MessageError?.error)
    console.log("log lỗi ", messageError);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }
    

  
    return (
        <>
            <ToastContainer />
            <div className='login'>
                <div className='css-trang-tri'></div>
                <div className='css-trang-tri2'></div>
                <div className='form_login'>
                    <div className='form_login_left'>
                        <h1>ĐĂNG KÝ</h1>
                        <p>Chào mừng bạn đến với website Vexere.com</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    name='sdt'
                                    placeholder='Số điện thoại'
                                    {...register('phone', {
                                        required: 'Vui lòng nhập thông tin',
                                        pattern: {
                                            value: /^0\d{9}$/,
                                            message: 'Vui lòng nhập đúng định dạng số điện thoại (10 số, bắt đầu bằng 0)'
                                        }
                                    })}
                                />
                                {errors.phone && <p className='error'>{errors.phone.message}</p>}
                            </div>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder='Email'
                                    {...register('email', {
                                        required: 'Vui lòng nhập thông tin',
                                        pattern: {
                                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message: 'Vui lòng nhập đúng định dạng email'
                                        }
                                    })}
                                />
                                {errors.email && <p className='error'>{errors.email.message}</p>}
                            </div>
                            <div className='form_group hhhu'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Password'
                                    {...register('password', {
                                        required: 'Vui lòng nhập thông tin',
                                        minLength: {
                                            value: 6,
                                            message: 'Mật khẩu phải có ít nhất 6 ký tự'
                                        }
                                    })}
                                />
                                <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                                {errors.password && <p className='error'>{errors.password.message}</p>}
                            </div>
                            <div className='form_group hhhu'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password_confirmation'
                                    placeholder='Nhập lại mật khẩu'
                                    {...register('password_confirmation', {
                                        required: 'Vui lòng nhập lại mật khẩu',
                                        validate: value =>
                                            value === watch('password') || 'Mật khẩu và xác nhận mật khẩu không khớp'
                                    })}
                                />
                                <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                                {errors.password_confirmation && <p className='error'>{errors.password_confirmation.message}</p>}
                            </div>
                            <div className='link-register'>
                                <span className='link-text-register'>Bạn đã có tài khoản?</span>
                                <Link to='/login'>Đăng nhập</Link>
                            </div>
                            <input className='submit-login' type='submit' value="ĐĂNG KÝ" />
                        </form>
                        <div className='login_icon'>
                            <img src='../../images/imageslogin/icons8-google-48.png' alt='' />
                            <p>
                                Đăng nhập với <strong>Google</strong>.
                            </p>
                        </div>
                       
                    </div>
                    <div className='form_login_right'>
                        <img src='../../images/imageslogin/img_card.jpg' alt='' />
                        <img src='../../images/imageslogin/img_card.jpg' alt='' />
                        <img src='../../images/imageslogin/img_card.jpg' alt='' />
                    </div>
                   
                </div>
            </div>
        </>
    );
}
