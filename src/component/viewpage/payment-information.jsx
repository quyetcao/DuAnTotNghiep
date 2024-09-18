// import React from "react";
// import { Header } from "../common";
// import { Container, Grid } from "@mui/material";
// import ThongTinLienHe from "./payment/ThongTinLienHe"
// import ThongTinChuyenDi from "./payment/ThongTinChuyenDi";
// import TongTien from "./payment/TongTien";
// import MucTienIch from "./payment/MucTienIch";

// function App() {
//     return (
//         <Container maxWidth="lg"
//             sx={{
//                 padding: 2,
//                 margin: 'auto',
//                 mt: 3, // Thêm khoảng cách phía trên (margin-top: 5)
//             }}>

//             <Grid container spacing={3}>
//                 <Grid item xs={12} md={8}>
//                     <ThongTinLienHe />
//                     <MucTienIch />
//                 </Grid>
//                 <Grid item xs={12} md={4}>
//                     <TongTien />
//                     <ThongTinChuyenDi />
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }

// export default App;


export default function PaymentInformation() {

    return (
        <>
            <div className="">
                <div tabIndex={0} role="button" className="button-back"> /* back */
                    <img src="public/images/img_Payment_infromation/Icons8-Ios7-Arrows-Back.512.png" width="20px" height="20px" alt="" />
                    <p className="text-button-back">Quay lại</p>
                </div>
                <div className="">
                    <div className="warp left">
                        <div className="customer-info">
                            <div>
                                <div className="login-container">
                                    <p className="">Đăng nhập để tự điền thông tin khi nhận vé</p>
                                    <button type="button" className=" " ><span>Đăng nhập</span></button>
                                </div>
                                <div className="">Thông tin liên hệ</div>
                                <div className="form-info">
                                    <form action="" className="">
                                        {/* Phần name */}
                                        <div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <div>
                                                            <input type="text" />
                                                            <label htmlFor="">
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phần phone number */}
                                        <div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <div>
                                                            <div>
                                                                <p>

                                                                </p>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <input type="text" />
                                                                    <label htmlFor="">
                                                                        <span>
                                                                            <span></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Phần email */}
                                        {/* Phần nhập name */}
                                        <div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <div>
                                                            <input type="text" />
                                                            <label htmlFor="">
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Phần text-verified */}
                                        <div>
                                            <div>
                                                <i></i>
                                            </div>
                                            <p>Số điện thoại và email được sử dụng để gửi thông tin xác thực khi cần thiết</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* kết thúc phần điền thông tin cá nhân */}

                            {/* start phần tiện ích */}
                            <div>
                                <span>Tiện ích</span>
                                <div>
                                    {/* Bảo hiểm */}
                                    <div>
                                        {/* phần bảo hiểm chuyến đi */}
                                        <div>
                                            {/*  */}
                                            <div>
                                                <div>
                                                    <div>
                                                        <img src="" alt="" />
                                                        <p>
                                                            <p>Bảo hiểm chuyến đi</p>
                                                            <p>(+20.000đ/ghế)</p>
                                                        </p>
                                                    </div>
                                                    <div className="detail">
                                                        <p>Được bồi thường lên đến 400.000.000đ/ghế.</p>
                                                    </div>
                                                    <div className="branch">
                                                        <p></p>
                                                        <div className="icon-group">
                                                            <img src="" alt="" />
                                                            <div className="margin-right">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <img src="" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* buton check box bên phải */}
                                            <label htmlFor="">
                                                <span>
                                                    <input type="text" />
                                                    <span>

                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                        {/* phần tổng quan về lợi ích gói bảo hiểm */}
                                        <div>
                                            <div>
                                                <div className="body-panel">
                                                    <div className="content-item">
                                                        <p>Bảo hiểm tai nạn</p>
                                                        <p>Quyền lợi bảo hiểm lên đến 400 triệu đồng khi xảy ra tai nạn. </p>

                                                    </div>
                                                    <div className="content-item">
                                                        <p> Bảo hiểm huỷ chuyến</p>
                                                        <p> Bồi thường 100% tiền vé nếu chuyến đi bị hủy bởi các lí do khách quan hoặc bất khả kháng về sức khỏe. </p>
                                                    </div>
                                                </div>

                                                <div className="footer-panel">
                                                    <p>Bồi thường trực tuyến nhanh chóng, dễ dàng</p>
                                                    <p>Chi tiết</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Phần cho thuê xe máy */}
                                    <div>
                                        {/* Phần trên text */}
                                        <div>
                                            <div>
                                                <img src="" alt="" />
                                                {/* text */}
                                                <div className="">
                                                    <div className="description-policy">
                                                        <p>Thuê xe máy tại hà nội</p>
                                                        <p>Vexere sẽ liên hệ để xác nhận dịch vụ</p>
                                                    </div>
                                                    <div className="description-policy-note">
                                                        <div>
                                                            <img src="" alt="" />
                                                            <p>Lưu ý trước khi thuê xe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Phần dưới list các loại xe */}
                                        <div>

                                        </div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="warp right"></div>
                </div>

            </div>
        </>
    )
}