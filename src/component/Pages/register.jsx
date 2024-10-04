import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className='login'>
                <div className='css-trang-tri'></div>
                <div className='css-trang-tri2'></div>
                <div className='form_login'>
                    <div className='form_login_left'>
                        <h1>ĐĂNG KÝ</h1>
                        <p>Chào mừng bạn đến với website Vexere.com</p>
                        <form action=''>
                            <div className='form_group'>
                                <input type='text' name='sdt' placeholder='Số điện thoại'></input>
                            </div>
                            <div className='form_group'>
                                <input type='email' name='email' placeholder='Email'></input>
                            </div>
                            <div className='form_group'>
                                <input type='password' name='password' placeholder='Password'></input>
                            </div>
                            <div className='link-register'>
                                <span className='link-text-register'>Bạn đã có tài khoản?</span>
                                <Link to='/login'>Đăng nhập</Link>
                            </div>
                            <button className='submit-login' type='submit'>
                                ĐĂNG KÝ
                            </button>
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
