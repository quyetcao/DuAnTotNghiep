import '../../../css/cssghe.css';
import SaveIcon from '@mui/icons-material/Save';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
// import EditIcon from '@mui/icons-material/Edit';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { CallapiGetAllcxofCarHouse, CallapiGetDeleteCxCarHouse } from '../../../../redux/adminweb/admin-cx-carhouse/Asynthunk-cx-carhouse';
// import Pagination from '../../../pagination/pagination';
// import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { callApiSeat, getAllseatcartripbycartripid } from '../../../../redux/info-bus/infobus-asynThunk';

export default function Quanlyghechuyenxe() {
    const { car_trip_id } = useParams();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [currentPage, setCurrentPage] = useState(1); 
    useEffect(() => {
        dispatch(getAllseatcartripbycartripid(car_trip_id));
    }, [car_trip_id]);

    const allseatcarid = useSelector((state) => state.SeatofCarid?.dataseatcarid);
    // console.log('all ghế chuyến xe', allseatcarid);
    // console.log("ghế của xe nào", allseatcarid?.[0]?.car_id);
    useEffect(() => {
        dispatch(callApiSeat(allseatcarid?.[0]?.car_id));
    }, [allseatcarid]);
    const allseatcaridaa = useSelector((state) => state.SeatofCarid?.seatcarid);
   
     function Saveseat(){
     }
     const navigate = useNavigate();
     function editseatcartrip(){
        navigate(``);
     }
    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Ghế Chuyến Xe</h3>
                    </div>
                    <div className='content-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Mã Ghế</th>
                                    <th>Vị Trí Ghế</th>
                                    <th>Giá</th>
                                    <th>Trạng Thái</th>
                                    <th>Trạng Thái Booking</th>
                                    <th>Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(allseatcarid) &&
                                    allseatcarid.map((itemlist) => {
                                        const carData = allseatcaridaa?.[allseatcarid?.[0]?.car_id];
                                        if (Array.isArray(carData)) {
                                            return carData.map((itemlist2) => {
                                                if (itemlist?.seat_id === itemlist2.id) {
                                                    return (
                                                        <tr key={itemlist2.id}>
                                                            <td>{itemlist?.id}</td>
                                                            <td>{itemlist2?.seat_number}</td>
                                                            <td>{itemlist2?.location_seat}</td>
                                                            <td>{itemlist2?.price}</td>
                                                            <td>{itemlist?.is_available ?
                                                                <>  <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>  </>: <><label className="switch">
                                                                <input type="checkbox" checked />
                                                                <span className="slider round"></span>
                                                            </label> </>  }</td>
                                                            <td>{itemlist?.booking_method}</td>
                                                            <td className="action-icons">
                                                                <SaveIcon onClick={()=>{
                                                                    Saveseat();
                                                                }}/>
                                                                <BuildCircleIcon onClick={()=>{
                                                                    editseatcartrip(itemlist?.id);
                                                                }} />
                                                                
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                                return null; // Return null if condition not met
                                            });
                                        }
                                        return null; // Return null if carData is not an array
                                    })}
                            </tbody>
                        </table>
                    </div>
                    {/* <Pagination links={allcx?.links} onPageChange={handlePageChange} /> */}
                </div>
            </div>
        </>
    );
}
// import '../../../css/cssghe.css';
// import SaveIcon from '@mui/icons-material/Save';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { callApiSeat, editseatcartrip, getAllseatcartripbycartripid } from '../../../../redux/info-bus/infobus-asynThunk';


// export default function Quanlyghechuyenxe() {
//     const { car_trip_id } = useParams();
//     const dispatch = useDispatch();

//     // State để lưu dữ liệu các hàng ghế
//     const [seatData, setSeatData] = useState([]);

//     // Lấy danh sách ghế từ Redux
//     const allseatcarid = useSelector((state) => state.SeatofCarid?.dataseatcarid);
//     const allseatcaridaa = useSelector((state) => state.SeatofCarid?.seatcarid);

//     useEffect(() => {
//         dispatch(getAllseatcartripbycartripid(car_trip_id));
//     }, [car_trip_id]);

//     useEffect(() => {
//         dispatch(callApiSeat(allseatcarid?.[0]?.car_id));
//     }, [allseatcarid]);

//     // Khởi tạo dữ liệu ban đầu từ API
//     useEffect(() => {
//         if (Array.isArray(allseatcarid)) {
//             const initialData = allseatcarid.map((itemlist) => ({
//                 id: itemlist?.id,
//                 seat_number: allseatcaridaa?.[allseatcarid?.[0]?.car_id]?.find((seat) => seat.id === itemlist?.seat_id)?.seat_number || '',
//                 location_seat: allseatcaridaa?.[allseatcarid?.[0]?.car_id]?.find((seat) => seat.id === itemlist?.seat_id)?.location_seat || '',
//                 price: allseatcaridaa?.[allseatcarid?.[0]?.car_id]?.find((seat) => seat.id === itemlist?.seat_id)?.price || 0,
//                 is_available: itemlist?.is_available || false,
//                 booking_method: itemlist?.booking_method || '',
//             }));
//             setSeatData(initialData);
//         }
//     }, [allseatcarid, allseatcaridaa]);

//     // Xử lý chỉnh sửa giá trị trong bảng
//     const handleInputChange = (id, field, value) => {
//         setSeatData((prevState) =>
//             prevState.map((seat) =>
//                 seat.id === id ? { ...seat, [field]: field === 'is_available' ? value.target.checked : value } : seat
//             )
//         );
//     };

//     // Gửi dữ liệu khi nhấn nút lưu
//     const Saveseat = (seat) => {
//         console.log("seat",seat);
//         dispatch(editseatcartrip(seat?.id,seat));
//     };

//     return (
//         <>
//             <div className="dashboard-body">
//                 <div className="body-content">
//                     <div className="body-content-top">
//                         <h3 className="content-top-heading">Quản lý Ghế Chuyến Xe</h3>
//                     </div>
//                     <div className="content-table">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>ID</th>
//                                     <th>Mã Ghế</th>
//                                     <th>Vị Trí Ghế</th>
//                                     <th>Giá</th>
//                                     <th>Trạng Thái</th>
//                                     <th>Trạng Thái Booking</th>
//                                     <th>Thao Tác</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {seatData.map((seat) => (
//                                     <tr key={seat.id}>
//                                         <td>{seat.id}</td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={seat.seat_number}
//                                                 onChange={(e) => handleInputChange(seat.id, 'seat_number', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={seat.location_seat}
//                                                 onChange={(e) => handleInputChange(seat.id, 'location_seat', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="number"
//                                                 value={seat.price}
//                                                 onChange={(e) => handleInputChange(seat.id, 'price', e.target.value)}
//                                             />
//                                         </td>
//                                         <td>
//                                             <label className="switch">
//                                                 <input
//                                                     type="checkbox"
//                                                     checked={seat.is_available}
//                                                     onChange={(e) => handleInputChange(seat.id, 'is_available', e)}
//                                                 />
//                                                 <span className="slider round"></span>
//                                             </label>
//                                         </td>
//                                         <td>
//                                             <input
//                                                 type="text"
//                                                 value={seat.booking_method}
//                                                 onChange={(e) => handleInputChange(seat.id, 'booking_method', e.target.value)}
//                                             />
//                                         </td>
//                                         <td className="action-icons">
//                                             <SaveIcon
//                                                 style={{ cursor: 'pointer', color: 'blue' }}
//                                                 onClick={() => Saveseat(seat)}
//                                             />
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
