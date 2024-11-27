export default function AddEvent1() {
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>THÊM SỰ KIỆN MỚI</h3>
            <div className="page-add-carhouse">
                <form id="busForm" >

                    <label htmlFor="nameevent">Tên sự kiện</label>
                    <input type="text" id="nameevent" placeholder="Nhập tên sự kiện..." />
                    <label htmlFor="imgevent1">Hình ảnh sự kiện 1</label>
                    <input type="file" id="imgevent1" placeholder="Thêm hình ảnh sự kiện..." />
                    <label htmlFor="imgevent2">Hình ảnh sự kiện 2</label>
                    <input type="file" id="imgevent2" placeholder="Thêm hình ảnh sự kiện..." />
                    <label htmlFor="noidungsk">Nội dung sự kiện</label>
                    <input type="text" id="noidungsk" placeholder="Nội dung sự kiện ..." />
                    <label htmlFor="tgbd">Thời gian bắt đầu </label>
                    <input type="date" id="tgbd" />
                    <label htmlFor="tgkt">Thời gian kết thúc </label>
                    <input type="date" id="tgkt" />
                    <label htmlFor="trangthai">Trạng thái </label>
                    <select name="" id="trangthai" >
                        <option value="1">Xuất Bản</option>
                        <option value="2">Chờ Duyệt</option>
                        <option value="3">Bản Nháp</option>
                    </select>
                    <input type="submit" className='btnsb' value='Thêm Sự Kiện' />
                </form>
            </div>

        </>
    )
}