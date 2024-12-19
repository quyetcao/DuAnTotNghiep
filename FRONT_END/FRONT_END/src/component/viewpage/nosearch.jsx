import '../css/noSearch.css';

export default function NoSearch() {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '40px' }} className='nosearch'>
                <h3 style={{ fontWeight: '700' }} className='noSearch-title'>
                    Xin Lỗi Vì Sự Bất Tiện Này Hiện Tại Hệ Thống Không Có Chuyến Bạn Tìm 😓
                </h3>
                <p className='noSearch-text'>Xin Vui Lòng Thay Đổi Tuyến Đường Tìm Kiếm</p>
            </div>
        </>
    );
}
