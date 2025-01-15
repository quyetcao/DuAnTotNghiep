
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { callApigetAlldonhang } from '../../../redux/donhang/Asyncthunkdh';
export default function Showdonhang() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(callApigetAlldonhang());
    }, []);
    const alldonhang = useSelector((state) => state.Donhang?.allDonHang);
    console.log("alldonhang", alldonhang);


    // //edit 
    // function EditDiemTraofCarHouse(id) {
    //     navigate(`/admincarhouse/edit-diem-tra/${id}`);
    // }
    // // delete
    // async function DeleteDiemTraofCarHouse(id) {
    //     const isconfim = confirm('Bạn có muốn xóa không?');
    //     if (isconfim) {
    //         await dispatch(CallapiGetDeleteDiemTra(id));
    //         await dispatch(CallapiGetAllDiemTraByCarHouse(1));
    //     }
    // }

    return (
        <>
            <div className='dashboard-body'>
                <div className='body-content'>
                    <div className='body-content-top'>
                        <h3 className='content-top-heading'>Quản lý Đơn Hàng </h3>

                    </div>
                    <div className='content-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên KHKH</th>
                                    <th>Số điện thoại khách hàng </th>
                                    <th>Tổng tiền </th>
                                    <th>Trạng trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alldonhang &&
                                    alldonhang?.map((item, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.phone}</td>
                                                    <td>{item?.total_price}</td>
                                                    <td>
                                                    {(() => {
                                                        switch (item?.status) {
                                                            case 'pending':
                                                                return 'Trạng thái chờ';
                                                            case 'paid':
                                                                return 'Đã thanh toán';
                                                            case 'cancelled':
                                                                return 'Chưa hoàn thành';
                                                            default:
                                                                return '';
                                                        }
                                                    })()}
                                                    </td>
                                                    <td className='action-icons'>
                                                        <EditIcon />
                                                        <DeleteIcon />
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
