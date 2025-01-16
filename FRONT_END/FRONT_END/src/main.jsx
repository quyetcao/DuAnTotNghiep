
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from '../src/redux/store';
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



// import AddChuyenXebyCarHouse from './component/admin-carhouse/chuyenxe/show-chuyen-xe/addcxcarhouse.jsx';
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
import { Provider } from 'react-redux';
import Insufficientaccess from './component/bad-request/Insufficient-access.jsx';
// import PrivateRousterAdminWeb from './privateRouter/privateRouterAdminWeb.jsx';
// import PrivateRouterAdminCarHouse from './privateRouter/privateRouterAdminCarHouse.jsx';
import HomePageWebAdmin from './component/view-adminweb/dashboardadminweb.jsx/homepageadminweb.jsx';
import QuanlyUser from './component/view-adminweb/listuser/quanlitkuser/show-list-user.jsx';
import EditArticles from './component/view-adminweb/post-event/admin-post/edit-post.jsx';
import EditCarOfCarHouse from './component/admin-carhouse/car/editcarofcarhouse.jsx';
import AddCar from './component/admin-carhouse/car/addcar.jsx';
import QuanlyDiemDon from './component/admin-carhouse/chuyenxe/điemon-tra/show-diem-don-tra-of-nha-xe.jsx';
import AddDiemDon from './component/admin-carhouse/chuyenxe/điemon-tra/add-diem-don.jsx';
import EditDiemDon from './component/admin-carhouse/chuyenxe/điemon-tra/edit-diem-don.jsx';
import QuanlyDiemTra from './component/admin-carhouse/chuyenxe/điemon-tra/show-diem-tra-of-nha-xe.jsx';
import AddDiemTra from './component/admin-carhouse/chuyenxe/điemon-tra/add-diem-tra.jsx';
import EditDiemTra from './component/admin-carhouse/chuyenxe/điemon-tra/edit-diem-tra.jsx';
import QuanlyGiamGia from './component/view-adminweb/giam-gia/show-list-giamgia.jsx';
import AddGiamGia from './component/view-adminweb/giam-gia/add-ma-giam-gia.jsx';
import EditGiamGia from './component/view-adminweb/giam-gia/edit-ma-giam-gia.jsx';
// import EditGiamGia from './component/view-adminweb/giam-gia/edit-ma-giam-gia.jsx';
import Quanlychuyenxe from './component/admin-carhouse/chuyenxe/show-chuyen-xe/showchuyenxe.jsx';
import ThanhToanLanMot from './component/thanhtoan/thanhtoanlan1.jsx';
import Baiviet from './component/admin-carhouse/baiviet/baiviet.jsx';
import AddChuyenXebyCarHouse from './component/admin-carhouse/chuyenxe/show-chuyen-xe/addcxcarhouse.jsx';
import EditChuyenXebyCarHouse from './component/admin-carhouse/chuyenxe/show-chuyen-xe/editcxcarhouse.jsx';
import AllBinhLuan from './component/view-adminweb/binhluan/allbinhluan.jsx';
import Showdonhang from './component/admin-carhouse/chuyenxe/show-list-don-hang.jsx';
import Thanhtoanthanhcong from './component/thanhtoan/thanhtoanthanhcong.jsx';
import AddNv from './component/admin-carhouse/nhanvien/add-nv.jsx';
import Quanlyghechuyenxe from './component/admin-carhouse/chuyenxe/show-chuyen-xe/show-editghe.jsx';
import DatDonTaiQuayB1 from './component/admin-carhouse/chuyenxe/datdontaiquayb1.jsx';
import DatDonTaiQuayB2 from './component/admin-carhouse/chuyenxe/datdontaiquay.jsx';
import Checkloginreister from './component/common/checklogin.jsx';
// import PrivateRouterAdminWeb from './privateRouter/privateRouterAdminWeb.jsx';
// import Register1 from './component/Pages/register1.jsx';




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
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      // {
      //   path: "/register",
      //   element: <Register1 />
      // },
      {
        path: "/nosearch",
        element: <NoSearch />
      },
      {
        path: "/chualogin",
        element: <NoLogin />
      },
      {
        path: "/khong-quyen-truy-cap",
        element: <Insufficientaccess />
      },
      {
        path: "/thanhtoanlanmot/:car_trip_id",
        element: <ThanhToanLanMot />
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
        path: "/baiviet",
        element: <Baiviet />
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
        path: '/thanhtoanok',
        element: <Thanhtoanthanhcong />
      },
      {
        path:'/checkloginregister',
        element: <Checkloginreister/>
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
        path: 'addcar',
        element: <AddCar />
      },
      {
        path: 'editcar/:id',
        element: <EditCarOfCarHouse />
      },
      //loại xe
      {
        path: 'listcartype',
        element: <Quanlyloaixe />

      },

      {
        path: 'addcartype',
        element: <AddCarType />
      },
      {
        path: 'editloaixe/:id',
        element: <EditCarType />
      },
      // chuyến xe , ghế của chuyến xe 
      {
        path: 'addchuyenxe',
        element: <AddChuyenXebyCarHouse />
      },
      {
        path: 'quan-li-chuyen-xe',
        element: <Quanlychuyenxe />

      },
      {
        path: 'edit-chuyen-xe/:id',
        element: <EditChuyenXebyCarHouse />
      },
      { path:'show-edit-ghe-of-cx/:car_trip_id',
        element:<Quanlyghechuyenxe />
      },

      // điểm đón trả
      {
        path: 'diem-don',
        element: <QuanlyDiemDon />
      },
      {
        path: 'add-diem-don',
        element: <AddDiemDon />
      },
      {
        path: 'edit-diem-don/:id',
        element: <EditDiemDon />
      },
      {
        path: 'diem-tra',
        element: <QuanlyDiemTra />
      },
      {
        path: 'add-diem-tra',
        element: <AddDiemTra />
      },
      {
        path: 'edit-diem-tra/:id',
        element: <EditDiemTra />
      },
      {
        path: 'show-don-hang',
        element: <Showdonhang />
      },
      // nhân viên 
      {
        path: 'add-nhan-vien',
        element: <AddNv />
      },
      //dat don tai quay 
      {
       path:'dat-don-tai-quay-b1',
       element: <DatDonTaiQuayB1/>
      },
      {
        path:'dat-don-tai-quay-b2/:id',
        element: <DatDonTaiQuayB2 />
       },
    ]
  },

  {
    path: "/adminweb",
    element:<AppAdminQLWeb /> ,
    children: [
      {
        path: '',
        element: <HomePageWebAdmin />
      },
      {
        path: 'show-ds-carhouse',
        element:<ShowDsCarHouse />
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
        element:<QuanlyEvent />
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
        path: 'listArticles',
        element: <QuanlyPost />
      },
      {
        path: 'add-articles',
        element: <AddEArticles />
      },
      {
        path: 'editArticles/:id',
        element: <EditArticles />
      },

      //Banner

      {
        path: 'listbanner',
        element: <ListBanner />
      },
      {
        path: 'addbanner',
        element: <AddBanner />
      },
      {
        path: 'editbanner/:id',
        element: <EditBanner />
      },
      //Giảm giá 
      {
        path: 'giam-gia',
        element: <QuanlyGiamGia />
      },
      {
        path: 'add-giam-gia',
        element: <AddGiamGia />
      },
      {
        path: 'edit-giam-gia/:id',
        element: <EditGiamGia />
      },
      //User
      {
        path: 'listuse',
        element: <QuanlyUser />
      },
      // binhluan
      {
        path: 'listbinhluan',
        element: <AllBinhLuan />
      },

    ]
  },

])



createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
  // </StrictMode>,
)
