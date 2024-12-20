

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRouterAdminWeb({ children }) {
  const isAuthentication = useSelector((state) => state.LoginLogOutRegister?.isAuthentication);
  const infoUser = useSelector((state) => state.LoginLogOutRegister?.infoUser);
  console.log("infoUser",infoUser);
  const roleAdminWeb = infoUser?.role;


  // if (!isAuthentication) {
  //   alert("Bạn cần đăng nhập!");
  //   return <Navigate to="/khong-quyen-truy-cap" replace={true} />;
  // }

  if (roleAdminWeb !== 'admin') {
    alert("Bạn không có quyền truy cập!");
    return <Navigate to="/khong-quyen-truy-cap" replace={true} />;
  }


  return <>{children}</>;
}
