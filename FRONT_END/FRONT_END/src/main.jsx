
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
import Dashboard from './component/dashboard/dashboard.jsx';
import DSNhanVien from './component/admin-carhouse/chuyenxe/ds-nhanvien.jsx';
import AppAdmin from './AdminApp.jsx';
import BookingConfirmation from './component/payment/bookingConfirmation.jsx';
// import AdminHandle from './component/admin-handle/admin-handle.jsx';

import SelectSeatResponsive from './component/view-responsive/view-res-select-seat/view-res-select-seat.jsx';
import NoSearch from './component/viewpage/nosearch.jsx';
import AppAdminQLWeb from './AdminWeb.jsx';



import AddChuyenXebyCarHouse from './component/admin-carhouse/chuyenxe/addcxcarhouse.jsx';
import Quanlychiendich from './component/admin-carhouse/chuyenxe/qlcd.jsx';
import QuanLyDatVeXe from './component/admin-carhouse/chuyenxe/quanLyDatVeXe.jsx'
// import AddCar from './component/admin-carhouse/car/addcar.jsx';
import AddCarType from './component/admin-carhouse/car/addcartype.jsx';
import Quanlyxe from './component/admin-carhouse/car/showlistcar.jsx';
import RouterCar from './component/admin-carhouse/router-car.jsx';
import Quanlyloaixe from './component/admin-carhouse/car/showlistloaixe.jsx';
import EditCarType from './component/admin-carhouse/car/editloaixe.jsx';
import QuanlyEvent from './component/view-adminweb/post-event/admin-title-event.jsx/list-title.jsx';
import AddEvent from './component/view-adminweb/post-event/admin-title-event.jsx/add-title.jsx';
import EditEvent from './component/view-adminweb/post-event/admin-title-event.jsx/edit-title.jsx';
import QuanlyPost from './component/view-adminweb/post-event/admin-post/list-post.jsx';
import AddEArticles from './component/view-adminweb/post-event/admin-post/add-post.jsx';
import ShowDsCarHouse from './component/view-adminweb/car-house/admin-show-carhouse.jsx';
import AddCarHouse from './component/view-adminweb/car-house/admin-add-carhouse.jsx';
import EditCarHouse from './component/view-adminweb/car-house/admin-edit-carhouse';
import ListBanner from './component/view-adminweb/banner/showlistbanner.jsx'
import AddBanner from './component/view-adminweb/banner/addbanner.jsx'
import EditBanner from './component/view-adminweb/banner/editbanner.jsx'



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
        path: "/nosearch",
        element: <NoSearch />
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
        path: "/booking1",
        element: <BookingConfirmation />
      },
      {
        path: "/chi-tiet-giao-dich",
        element: <ChiTietGiaoDich />
      },
      /**router test thử các trang  */
      {
        path: "/respon1",
        element: <SelectSeatResponsive />
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
            path: "don-hang-cua-toi",
            element: <DonHangCuaToi />
          },
        ]
      },

    ]
  },
  {
    path: "/admincarhouse",
    element: <AppAdmin />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: "ds-nhanvien",
        element: <DSNhanVien />
      },
      {
        path: "quanLyDatVeXe",
        element: <QuanLyDatVeXe />
      },
      {
        path: "quanLyChienDich",
        element: <Quanlychiendich />
      },
      //xe
      {
        path: 'routercar',
        element: <RouterCar />
      },
      {
        path: 'listcar',
        element: <Quanlyxe />
      },
      {
        path:'listcartype',
        element:<Quanlyloaixe/>

      },

      // {
      //   path: 'addcar',
      //   element: <AddCar />
      // },
      {
        path: 'addcartype',
        element: <AddCarType />
      },
      {
        path:'editloaixe/:id',
        element:<EditCarType/>
      },
      // chuyến xe 
      {
        path: 'addchuyenxe',
        element: <AddChuyenXebyCarHouse />
      },

    ]
  },

  {
    path: "/adminweb",
    element: <AppAdminQLWeb />,
    children: [
      {
        path: 'show-ds-carhouse',
        element: <ShowDsCarHouse />
      },
      {
        path: 'addcarhouse',
        element: <AddCarHouse />
      },
      {
        path: 'editcarhouse/:id',
        element: <EditCarHouse />,
       },
      // Event 
      {
        path: 'listEvent',
        element: <QuanlyEvent />
      },
      {
        path: 'addEvent',
        element: <AddEvent />
      },
      {
        path: 'editEvent/:id',
        element: <EditEvent />
      },

      // post 
      {
        path:'listArticles',
        element: <QuanlyPost/>
      },
      {
        path:'add-articles',
        element: <AddEArticles/>
      },
      {
        path:'listbanner',
        element: <ListBanner/>
      },
      {
        path: 'addbanner',
        element: <AddBanner />
      },
      {
        path:'editbanner/:id',
        element:<EditBanner/>
      },
    ]
  },

])



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={routes} />
  // </StrictMode>,
)
