import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import component 
import ViewChuyenxe from './component/viewpage/viewchuyenxe.jsx'
import Home from './component/Pages/home.tsx'
import PaymentInformation from './component/viewpage/payment-information.jsx';





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
        path: "/payment-information",
        element: <PaymentInformation />
      },
    ]
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
