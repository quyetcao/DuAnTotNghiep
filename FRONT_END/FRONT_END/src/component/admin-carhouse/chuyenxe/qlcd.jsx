import '../../css/quan-li-chien-dich.css';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Quanlychiendich() {
    return (
        <>
            <div className='container'>
            
                <div className='dashboard'>
                    <div className='dashboard-container'>
                    
                                <div className='content-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên chiến dịch</th>
                                                <th>Tiền tố</th>
                                                <th>Kênh áp dụng</th>
                                                <th>Loại coupon</th>
                                                <th>Người tạo</th>
                                                <th>Trạng thái</th>
                                                <th>Sửa đổi lần cuối</th>
                                                <th>Tác vụ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Tên chiến dịch 01</td>
                                                <td>TIENTO01</td>
                                                <td>Tất cả</td>
                                                <td>Giảm giá</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-active'>Active</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>Tên chiến dịch 02</td>
                                                <td>TIENTO02</td>
                                                <td>BMS</td>
                                                <td>Giá cố định</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-active'>Active</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td>Tên chiến dịch 07</td>
                                                <td>TIENTO07</td>
                                                <td>WebNX, AppNX</td>
                                                <td>Giảm giá</td>
                                                <td>duyanh.vxr</td>
                                                <td>
                                                    <span className='status-inactive'>Inactive</span>
                                                </td>
                                                <td>01:01 01/01/2021</td>
                                                <td className='action-icons'>
                                                    <EditIcon />
                                                    <ListIcon />
                                                    <RemoveRedEyeIcon />
                                                    <FileCopyIcon />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='page-button'>
                                    <div className='page-list'>
                                        <div className='page-list__item'>
                                            <ChevronLeftIcon style={{ color: '#6e6e6e' }}/>
                                        </div>
                                        <div className='page-list__item'>1</div>
                                        <div className='page-list__item'>2</div>
                                        <div className='page-list__item'>3</div>
                                        <div className='page-list__item'>...</div>
                                        <div className='page-list__item'>9</div>
                                        <div className='page-list__item'>10</div>
                                        <div className='page-list__item'>
                                        <ChevronRightIcon style={{ color: '#6e6e6e' }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}
