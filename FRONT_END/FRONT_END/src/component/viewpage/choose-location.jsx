import GppGoodIcon from '@mui/icons-material/GppGood';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../css/css-view-all-chuyen-xe/choose-location.css';
export default function ChooseLocation() {
    return (
        <>

            <div className="note-go-bus-2">
                <GppGoodIcon sx={{ color: '#27AE60' }} />
                <p style={{frontSize:'12px'}}>An tâm được đón đúng nơi, trả đúng chỗ đã chọn và dễ dàng thay đổi khi cần.</p>
            </div>
            <div className="diem-don-diem-tra">
                <div className="diem-don">
                    <div className="diem-don-top ">
                        <div className="ddxe diemdon ">
                            <div>Điểm đón</div>
                            <div className="ddxe-bottom">
                                <div className="label-container">
                                    <p className="hTYbup">Sắp xếp theo</p>
                                    <p className="hTYbup">Xem điểm đón gần bạn nhất?</p>
                                </div>
                                <div className="value-container">
                                    <button type="button" className="hidden-button pickup-sort">
                                        <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni color--darkness">Sớm nhất</p>
                                        <div className="material-icons-wrapper md-16  ">
                                            <ArrowDropDownIcon />
                                        </div>
                                    </button>
                                    <button type="button" className="hidden-button pickup-location">
                                        <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni address-info color-chu-xanh color--darkness">Nhập địa chỉ tại đây</p>
                                        {/* <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni input-address color--vex-blue">Thay đổi</p> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                     
                            <div className="form-check">
                                <label className="form-check-label" >
                                    <input type="radio" className="form-check-input" name="" id="" value="checkedValue" />
                                    <li style={{ fontWeight: '500' }}>
                                        08:11
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>Sân bay nội bài (nhà ga e1) </li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="" id="" value="checkedValue" />
                                    <li style={{ fontWeight: '500' }}>
                                        08:11
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>Đón/trả tận nơi trong thành phố Hải Phòng</li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                     
                    </div>

                </div>
                <div className="diem-tra ">
                <div className="diem-tra-top ">
                        <div className="ddxe diemtra">
                            <div>Điểm trả</div>
                            <div className="ddxe-bottom">
                                <div className="label-container">
                                    <p className="hTYbup">Sắp xếp theo</p>
                                    <p className="hTYbup">Xem điểm đón gần bạn nhất?</p>
                                </div>
                                <div className="value-container">
                                    <button type="button" className="hidden-button pickup-sort">
                                        <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni color--darkness">Sớm nhất</p>
                                        <div className="material-icons-wrapper md-16  ">
                                            <ArrowDropDownIcon />
                                        </div>
                                    </button>
                                    <button type="button" className="hidden-button pickup-location">
                                        <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni address-info color-chu-xanh color--darkness">Nhập địa chỉ tại đây</p>
                                        {/* <p className="base__SmallLinkText-sc-1tvbuqk-29 kKRsni input-address color--vex-blue">Thay đổi</p> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                     
                            <div className="form-check">
                                <label className="form-check-label" >
                                    <input type="radio" className="form-check-input" name="" id="" value="checkedValue" />
                                    <li style={{ fontWeight: '500' }}>
                                        08:11
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>Sân bay nội bài (nhà ga e1) </li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="" id="" value="checkedValue" />
                                    <li style={{ fontWeight: '500' }}>
                                        08:11
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>Đón/trả tận nơi trong thành phố Hải Phòng</li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                     
                    </div>
                </div>
            </div>





        </>
    )
}