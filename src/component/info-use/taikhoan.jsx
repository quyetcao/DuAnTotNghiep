import { Outlet } from "react-router-dom";
import LayoutPageTaiKhoan from "./layout-page-tk";

export default function Taikhoan(){
    return (
        <>
         <LayoutPageTaiKhoan/>
         <Outlet></Outlet>
        </>
    )
}