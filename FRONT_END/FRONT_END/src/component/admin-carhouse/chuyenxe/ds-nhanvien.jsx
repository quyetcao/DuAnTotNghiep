import '../../css/ds-nhanvien.css';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect, useRef } from 'react';

export default function DSNhanVien() {
    // code logic
    const [isMenuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    // Tạo ref để tham chiếu đến div chứa menu
    const menuRef = useRef(null);
    // Hàm ẩn menu khi click ra ngoài vùng menu
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };
    useEffect(() => {
        // Lắng nghe sự kiện click trên toàn document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener khi component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='ds-nhanvien'>
            <div className='header-staff'>
                <div className='header-container'>
                    <div className='employee-list'>
                        <h2 className='empolyee-title'>Danh sách nhân viên</h2>
                        <div className='add-employee employee-background'>
                            <AddIcon style={{ fontSize: '20px', color: '#fff' }} />
                            <span className='employee-text'>Thêm nhân viên</span>
                        </div>
                    </div>
                    <div className='active'>
                        <div className='active-list'>
                            <p className='active-heading active-select'>Tất cả</p>
                            <p className='active-heading'>Nhân viên</p>
                            <p className='active-heading'>Tài xế</p>
                            <p className='active-heading'>Phụ xe</p>
                            <p className='active-heading'>Hướng dẫn viên</p>
                        </div>
                    </div>
                    {/* <div className='input-search'>
                        <div className='search-form'>
                            <input type='text' placeholder='Tìm kiếm tên, số điện thoại' />
                        </div>
                    </div> */}
                    <div className='table-group'>
                        <table>
                            <tr className='table-list__heading'>
                                <th className='table-heading'>Tên</th>
                                <th className='table-heading'>Tài khoản</th>
                                <th className='table-heading'>Thông tin liên hệ</th>
                                <th className='table-heading'>Thông tin cá nhân</th>
                                <th className='table-heading'>Chi nhánh</th>
                                <th className='table-heading'>Trạng thái</th>
                                <th className='table-heading'></th>
                            </tr>
                            <tr className='table-tr__td'>
                                <td className='table-tr__td-name'>Nguyễn Văn A</td>
                                <td>nguyen.xyz</td>
                                <td>0987765432</td>
                                <td>Nam</td>
                                <td>Văn phòng A</td>
                                <td rowSpan='2'>
                                    <span className='item-table__select'>Đang làm việc</span>
                                    {/* <span className="item-table__disable">Đã nghỉ việc</span> */}
                                </td>
                                <td rowSpan='2'>
                                    <span className='item-active' onClick={toggleMenu}>
                                        <MoreVertIcon className='item-active__icon-active' fontSize='small' />
                                    </span>
                                    {isMenuVisible && (
                                        <div className='account-management' ref={menuRef}>
                                            <ul>
                                                <li className='border-bottom__account'>Chỉnh sửa</li>
                                                <li className='border-bottom__account'>Khóa tài khoản</li>
                                                <li className='border-bottom__account'>Đặt lại mật khẩu</li>
                                                <li>Xóa nhân viên</li>
                                            </ul>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr className='table-tr__td'>
                                <td>Nhân viên</td>
                                <td>Admin</td>
                                <td>nguyenvana@gmail.com</td>
                                <td>12/12/2000</td>
                                <td>Văn phòng A + 2 khác</td>
                            </tr>
                        </table>
                    </div>

                    <div className='page-button'>
                        <div className='page-list nothing'>
                            <div className='page-list__item'>
                                <ChevronLeftIcon style={{ color: '#6e6e6e' }} />
                            </div>
                            <div className='page-list__item'>1</div>
                            <div className='page-list__item'>2</div>
                            <div className='page-list__item'>3</div>
                            <div className='page-list__item'>...</div>
                            <div className='page-list__item'>9</div>
                            <div className='page-list__item'>10</div>
                            <div className='page-list__item'>
                                <ChevronRightIcon style={{ color: '#6e6e6e' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
