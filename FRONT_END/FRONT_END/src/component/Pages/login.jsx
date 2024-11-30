import '../css/login.css';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { dangnhap } from '../../redux/login-logout-register/AsyncThunk-lg-lo-rg';
import { useState } from 'react';


export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const { register, handleSubmit,formState: { errors } } = useForm()



    const notify = (event) => {
        if (event == true) {
            toast.success("Đăng Nhập Thành Công!", { theme: "colored" });
        } else if (event == false) {
            toast.error("Đăng Nhập Không Thành Công!", { theme: "colored" });
        }
    }



    const onSubmit = (data) => {
        console.log("data mật khẩu ",data);
        dispatch(dangnhap(data));
    }

    const isToastOk = useSelector((state) => state.LoginLogOutRegister?.loginOK);
    const isToastError = useSelector((state) => state.LoginLogOutRegister?.loginError);

    if (isToastOk === true) {
        notify(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }
    if (isToastError) {
        notify(false);
    }
   
   
    return (
        <>
        <ToastContainer/>
            <div className='login'>
                <div className='css-trang-tri'></div>
                <div className='css-trang-tri2'></div>
                <div className='form_login'>
                    <div className='form_login_left'>
                        <h1 className='form_login-title'>ĐĂNG NHẬP</h1>
                        <p>Chào mừng bạn đến với website Vexere.com</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    {...register('email', {
                                        required: 'Vui lòng nhập email',
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
                                    placeholder='Password'
                                    {...register('password', {
                                        required: 'Vui lòng nhập mật khẩu',
                                        minLength: {
                                            value: 6,
                                            message: 'Mật khẩu phải có ít nhất 6 ký tự'
                                        }
                                    })}
                                />
                                <span
                                    className='toggle-password'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                                {errors.password && <p className='error'>{errors.password.message}</p>}
                            </div>

                            <div className='link-register'>
                                <span className='link-text-register'>Bạn chưa có tài khoản?</span>
                                <Link to='/register'>Đăng ký</Link>
                            </div>

                            <input type='submit' className='submit-login' value="ĐĂNG NHẬP" />
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