import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { dangkytaikhoan } from '../../redux/login-logout-register/AsyncThunk-lg-lo-rg';
import { GoogleLogin } from '@react-oauth/google';

export default function Register1() {

    // const notify = (event) => {
    //     if (event == true) {
    //         toast.success("Đăng Ký Thành Công!", { theme: "colored" });
    //     } else if (event == false) {
    //         toast.error("Đăng Ký Không Thành Công Email hoặc Số điện thoại đã bị trùng!", { theme: "colored" });
    //     }
    // }

    // const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    // const navigate = useNavigate();



    // const isToastOk = useSelector((state) => state.LoginLogOutRegister?.registerOK);
    // const isToastError = useSelector((state) => state.LoginLogOutRegister?.registerError);
    const messageError = useSelector((state) => state.MessageError?.error)
    console.log("log lỗi ", messageError);



    function registerbygoogle() {
        const data = '';
        dispatch(dispatch(dangkytaikhoan(0, data)))
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
                        <form>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    name='sdt'
                                    placeholder='Số điện thoại'
                                // {...register('phone', {
                                //     required: 'Vui lòng nhập thông tin',
                                //     pattern: {
                                //         value: /^0\d{9}$/,
                                //         message: 'Vui lòng nhập đúng định dạng số điện thoại (10 số, bắt đầu bằng 0)'
                                //     }
                                // })}
                                />
                                {/* {errors.phone && <p className='error'>{errors.phone.message}</p>} */}
                            </div>
                            <div className='link-register'>
                                <span className='link-text-register'>Bạn đã có tài khoản?</span>
                                <Link to='/login'>Đăng nhập</Link>
                            </div>
                            <input className='submit-login' type='submit' value="ĐĂNG KÝ" />
                        </form>
                        <div className='login_icon'>
                            <img src='../../images/imageslogin/icons8-google-48.png' alt='' />
                            <p onClick={registerbygoogle}>
                                Đăng ký với <strong>Google</strong>.
                            </p>
                        </div>

                    </div>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
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
