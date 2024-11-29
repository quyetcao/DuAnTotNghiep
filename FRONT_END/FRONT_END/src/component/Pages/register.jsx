import { Link } from 'react-router-dom';
import { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
    
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    // const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!phone) {
            newErrors.phone = 'Vui lòng nhập thông tin';
        } else if (!/^0\d{9}$/.test(phone)) {
            newErrors.phone = 'Vui lòng nhập đúng định dạng số điện thoại (10 số, bắt đầu bằng 0)';
        }

        if (!email) {
            newErrors.email = 'Vui lòng nhập thông tin';
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = 'Vui lòng nhập đúng định dạng email';
        }

        if (!password) {
            newErrors.password = 'Vui lòng nhập thông tin';
        } else if (password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Đăng nhập thành công', { phone, email, password });
            setErrors({});

            // Điều hướng đến trang chủ sau khi đăng nhập thành công
            // navigate('/'); // Chuyển đến trang chủ (hoặc trang mong muốn)
        }
    };

    return (
        <>
            <div className='login'>
                <div className='css-trang-tri'></div>
                <div className='css-trang-tri2'></div>
                <div className='form_login'>
                    <div className='form_login_left'>
                        <h1>ĐĂNG KÝ</h1>
                        <p>Chào mừng bạn đến với website Vexere.com</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    name='sdt'
                                    placeholder='Số điện thoại'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors.phone && <p className='error'>{errors.phone}</p>}
                            </div>
                            <div className='form_group hhhu'>
                                <input
                                    type='text'
                                    name='email'
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className='error'>{errors.email}</p>}
                            </div>
                            <div className='form_group hhhu'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span className='toggle-password' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </span>
                                {errors.password && <p className='error'>{errors.password}</p>}
                            </div>
                            <div className='link-register'>
                                <span className='link-text-register'>Bạn đã có tài khoản?</span>
                                <Link to='/login'>Đăng nhập</Link>
                            </div>
                            <input className='submit-login' type='submit'>
                                ĐĂNG KÝ
                            </input>
                        </form>
                        {/* <p><strong>Login</strong> with other</p> */}
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
