import '../css/chua-login.css'
import { Link } from 'react-router-dom'
export default function NoLogin(){
    return (
        <>
        <div className="no-login">
        <img src="../../images/imageslogin/my_ticket_account_circle_rounded.svg" alt=""  />
        <h2>Bạn chưa đăng nhập</h2>
        <p>Mời bạn đăng nhập nhá.</p>
        <div className='chua-login'>
            <Link to='/login'>
                <button className='btn btn-no-login'>
                    Đăng Nhập
                </button>
            </Link>
        </div>
        </div>
        </>
    )
}