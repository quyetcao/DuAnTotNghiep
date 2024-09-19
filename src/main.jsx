import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import component
import Home from './component/Pages/home.jsx';
import ViewChuyenxe from './component/viewpage/viewchuyenxe.jsx'
import Login from './component/Pages/login.jsx';
import Register from './component/Pages/register.jsx';
import NoLogin from './component/bad-request/chua-login.jsx';
import Taikhoan from './component/info-use/taikhoan.jsx';
import ThongTinTK from './component/info-use/thong-tin-tk.jsx';
import ThanhToan from './component/thanhtoan/thanhtoan.jsx';
import DonHangCuaToi from './component/info-use/don-hang-cua-toi.jsx';
import ChiTietGiaoDich from './component/chi-tiet-giao-dich/chi-tiet-gd.jsx';


// Router giữa các trang 
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/viewchuyenxe",
        element: <ViewChuyenxe />
      },
      // {
      //   path: "/payment-information",
      //   element: <PaymentInformation />
      // },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/chualogin",
        element: <NoLogin />
      },
      {
        path: "/thanhtoan",
        element: <ThanhToan />
      },
      {
        path: "/chi-tiet-giao-dich",
        element: <ChiTietGiaoDich />
      },
      {
        path: "/taikhoan",
        element: <Taikhoan />,
        children: [
          {
            path: "thong-tin-tk",
            element: <ThongTinTK />
          },
          {
            path:"don-hang-cua-toi",
            element:<DonHangCuaToi/>
          },
        ]
      },

    ]
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
