import { Link } from "react-router-dom";
import { postLogin, setLoginOK } from "../../redux/login-logout-register/login-lo-rg-createSlice";
import { useDispatch } from "react-redux";

export default function Thanhtoanthanhcong() {
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
            <div className="classthanhtoanthanhcong">
                <img src="../../images/z6148600162843_6ff0494e0510825b9671de938cf76b14.jpg" alt="" />
                <p>Chúc Mừng Bạn Đặt Vé thành Công</p>
                <Link to="/">Quay về trang chủ</Link>
            </div>
        </>
    )
}