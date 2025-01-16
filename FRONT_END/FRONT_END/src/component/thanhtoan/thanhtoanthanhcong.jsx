// import { Link } from "react-router-dom";
// import { postLogin, setLoginOK } from "../../redux/login-logout-register/login-lo-rg-createSlice";
// import { useDispatch } from "react-redux";

// export default function Thanhtoanthanhcong() {
//     const dispatch = useDispatch();

//     const token = localStorage.getItem("token");
//     const name = localStorage.getItem("name");
//     const role = localStorage.getItem("role");
//     const success = localStorage.getItem("success");
//     const id = localStorage.getItem("id");
//     const email = localStorage.getItem("email");
//     const phone = localStorage.getItem("phone");
//     const dataToDispatch = {
//         name,
//         role,
//         email,
//         id,
//         phone,
//     };


//     dispatch(setLoginOK(true))
//     dispatch(postLogin(dataToDispatch))



//     return (
//         <>
//             <div className="classthanhtoanthanhcong">
//                 <img src="../../images/z6148600162843_6ff0494e0510825b9671de938cf76b14.jpg" alt="" />
//                 <p>Chúc Mừng Bạn Đặt Vé thành Công</p>
//                 <Link to="/">Quay về trang chủ</Link>
//             </div>
//         </>
//     )
// }
import '../css/thanhtoanthatbai.css'
import DoneIcon from '@mui/icons-material/Done';
import { postLogin, setLoginOK } from "../../redux/login-logout-register/login-lo-rg-createSlice";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
export default function Thanhtoanthanhcong() {
    const params = new URLSearchParams(window.location.search);
    const statuspay  = params.get("status");


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
        <>
      
        { statuspay &&  statuspay === 'success' ? <> <div className='payment-fail'>
            <div className='fail-content'>
                <div className='fail-icon-zz'>
                    <span className='success-icon'><DoneIcon/></span>
                </div>
                <h2 className='fail-title'>Thanh toán thành công</h2>
                <p className='fail-message'>Đơn hàng của quý khách đã được thanh toán thành công.</p>
                <p className='fail-note'>
                    Bấm <strong>Quay về trang chủ</strong> để tiếp tục sử dụng.
                </p>
                <div className='fail-button-group'>
                <Link to="/"><button className='fail-button fail-back-home'>Quay về trang chủ</button></Link>
                    {/* <button className='fail-button fail-retry-payment'>Thanh toán lại</button> */}
                </div>
            </div>
        </div> </> :  <div className='payment-fail'>
        <div className='fail-content'>
            <div className='fail-icon-container'>
                <span className='fail-icon'>⚠️</span>
            </div>
            <h2 className='fail-title'>Thanh toán không thành công</h2>
            <p className='fail-message'>Rất tiếc, nhưng hiện tại chúng tôi không thể xử lý thanh toán của bạn.</p>
            <p className='fail-note'>
                Bấm <strong>Quay về trang chủ</strong> để tiếp tục sử dụng .
            </p>
            <div className='fail-button-group'>
              <button className='fail-button fail-back-home'><Link to="/">Quay về trang chủ</Link></button>
                <button className='fail-button fail-retry-payment'>Thanh toán lại</button>
            </div>
        </div>
    </div>  }
        
    </>
    );
}
