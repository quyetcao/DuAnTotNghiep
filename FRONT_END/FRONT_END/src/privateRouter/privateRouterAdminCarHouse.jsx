

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRouterAdminCarHouse({ children }) {
  const isAuthentication = useSelector((state) => state.LoginLogOutRegister?.isAuthentication);
  console.log("isAuthentication",isAuthentication);
  const infoUser = useSelector((state) => state.LoginLogOutRegister?.infoUser);
  const roleAdminWeb = infoUser?.role;


  if (!isAuthentication) {
    alert("Bạn cần đăng nhập!");
    return <Navigate to="/khong-quyen-truy-cap" replace={true} />;
  }

  if (roleAdminWeb != 'carhouse') {
    alert("Bạn không có quyền truy cập!");
    return <Navigate to="/khong-quyen-truy-cap" replace={true} />;
  }


  return <>{children}</>;
}
