import { useEffect } from "react";
import { postLogin, setLoginOK } from "../../redux/login-logout-register/login-lo-rg-createSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkloginreister(){
    const dispatch = useDispatch();
        const navigate = useNavigate();
    useEffect(() => {
        // Lấy query string từ URL
        const params = new URLSearchParams(window.location.search);
        console.log("pẩm",params);
        const token = params.get("token");
        const success = params.get("success");
        const name = params.get("name");
        const role = params.get("role");
        const id =params.get('id');
        const email=params.get('email');
        const phone=params.get('phone');

       
        const dataToDispatch = {
          name,
          role,
          email,
          id,
          phone,
        };
    
        if (success === "1" && token) {
          // Lưu các thông tin vào localStorage
          localStorage.setItem("token", token);
          localStorage.setItem("name", name || "");
          localStorage.setItem("role", role || "");
          localStorage.setItem("success",success || "");
          localStorage.setItem("id",id || "");
          localStorage.setItem("email",email || "");
          localStorage.setItem("phone",phone || "");
    
          // Xóa query string khỏi URL
          window.history.replaceState({}, document.title, window.location.pathname);
    
          // Hiển thị thông báo đăng nhập thành công (nếu cần)
          // console.log("Đăng nhập thành công!");
   
          dispatch(setLoginOK(true))
          dispatch(postLogin(dataToDispatch))
          navigate('/')
        } else {
          console.error("Đăng nhập thất bại hoặc thiếu thông tin.");
        }
      }, [navigate]);
   
}