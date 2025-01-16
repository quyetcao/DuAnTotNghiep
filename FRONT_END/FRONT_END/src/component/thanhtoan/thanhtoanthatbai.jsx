// import '../css/thanhtoanthatbai.css';

// export default function Thanhtoanthatbai() {
//     return (
//         <div className='fail-container'>
//             <div className='fail-card'>
//                 <div className='fail-icon-container'><span className="fail-icon">❌</span></div>
//                 <h1 className='fail-title'>Thanh toán không thành công</h1>
//                 <p className='fail-message'>Rất tiếc, nhưng hiện tại chúng tôi không thể xử lý thanh toán của bạn.</p>
//                 <div className='fail-box-btn'>
//                     <button className='fail-button' onClick={() => alert('Retry payment')}>
//                         Quay lại trang chủ
//                     </button>
//                     <button className='fail-button' onClick={() => alert('Retry payment')}>
//                         Thanh toán lại
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// jghfkghjg

import '../css/thanhtoanthatbai.css'; // Import CSS file
import { postLogin, setLoginOK } from "../../redux/login-logout-register/login-lo-rg-createSlice";
import { useDispatch } from "react-redux";
import { Link } from '@mui/material';

const Thanhtoanthatbai = () => {
    const dispatch = useDispatch();

    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    const success = localStorage.getItem("success");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const dataToDispatch = {
        name,
        role,
        email,
        id,
        phone,
    };


    dispatch(setLoginOK(true))
    dispatch(postLogin(dataToDispatch))
    return (
        <div className='payment-fail'>
            <div className='fail-content'>
                <div className='fail-icon-container'>
                    <span className='fail-icon'>⚠️</span>
                </div>
                <h2 className='fail-title'>Thanh toán không thành công</h2>
                <p className='fail-message'>Rất tiếc, nhưng hiện tại chúng tôi không thể xử lý thanh toán của bạn.</p>
                <p className='fail-note'>
                    Bấm <strong>Quay về trang chủ</strong> để tiếp tục mua sắm.
                </p>
                <div className='fail-button-group'>
                  <button className='fail-button fail-back-home'><Link to="/">Quay về trang chủ</Link></button>
                    <button className='fail-button fail-retry-payment'>Thanh toán lại</button>
                </div>
            </div>
        </div>
    );
};

export default Thanhtoanthatbai;
