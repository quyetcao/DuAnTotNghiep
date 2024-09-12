import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import component 
import ViewChuyenxe from './component/viewpage/viewchuyenxe.jsx'
<<<<<<< HEAD
import Home from './component/Pages/home.tsx';
import Login from './component/Pages/login.jsx';
import Register from './component/Pages/register.jsx';
import NoLogin from './component/bad-request/chua-login.jsx';
import Taikhoan from './component/info-use/taikhoan.jsx';
import ThongTinTK from './component/info-use/thong-tin-tk.jsx';
=======
import Home from './component/Pages/home.jsx';
import ThanhToan from './component/thanhtoan/thanhtoan.jsx';
>>>>>>> ae0fefed83d77b01afd0cfb0d896f1f60b995815




// Router giữa các trang 
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/viewchuyenxe",
        element: <ViewChuyenxe />
      },
      {
<<<<<<< HEAD
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
        path: "/taikhoan",
        element: <Taikhoan />,
        children: [
          {
            path: "thong-tin-tk",
            element: <ThongTinTK />
          },
        ]
      },
      

=======
        path: "/thanhtoan",
        element: <ThanhToan />
      },
>>>>>>> ae0fefed83d77b01afd0cfb0d896f1f60b995815
    ]
  },
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={routes} />
  </StrictMode>,
)
