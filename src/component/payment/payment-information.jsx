// import React from "react";
// import { Header } from "../common";
import { Container, Grid } from "@mui/material";
import ThongTinLienHe from "./ThongTinLienHe";
import ThongTinChuyenDi from "./payment/ThongTinChuyenDi";
// import TongTien from "./payment/TongTien";
import MucTienIch from "./payment/MucTienIch";

function App() {
    return (
        <Container maxWidth="lg"
            sx={{
                padding: 2,
                margin: 'auto',
                mt: 3, // Thêm khoảng cách phía trên (margin-top: 5)
            }}>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <ThongTinLienHe />
                    <MucTienIch />
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <TongTien /> */}
                    <ThongTinChuyenDi />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;


// export default function PaymentInformation() {

//     return (
//         <>
//             <div className="">
//                 <div tabIndex={0} role="button" className="button-back">
//                     <img src="public/images/img_Payment_infromation/Icons8-Ios7-Arrows-Back.512.png" width="20px" height="20px" alt="" />
//                     <p className="text-button-back">Quay lại</p>
//                 </div>
//                 <div className="">
//                     <div className="warp left">
//                         <div className="customer-info">
//                             <div>
//                                 <div className="login-container">
//                                     <p className="">Đăng nhập để tự điền thông tin khi nhận vé</p>
//                                     <button type="button" className=" " ><span>Đăng nhập</span></button>
//                                 </div>
//                                 <div className="">Thông tin liên hệ</div>
//                                 <div className="form-info">
//                                     <form action="" className="">
//                                         <div>
//                                             <div>
//                                                 <div>
//                                                     <span>

//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <input type="text" id="name-customer" name="name-customer"></input> <br />
//                                         <input type="text" id="phone-number" name="phone-number"></input>
//                                         <input type="text" id=""></input>
//                                     </form>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="warp right"></div>
//                 </div>

//             </div>
//         </>
//     )
// }