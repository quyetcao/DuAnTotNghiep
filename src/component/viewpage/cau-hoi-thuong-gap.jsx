import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function CauHoiThuonGap(){
    return (
        <>
        <div className="cau-hoi-thuong-gap">
            <div className="title-cau-hoi">
            Những câu hỏi thường gặp về tuyến xe từ Hà Nội đi Hải Phòng
            </div>
            <div className="item-cau-hoi">
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Câu hỏi: Nhà xe đi Hải Phòng từ Hà Nội được đánh giá tốt nhất?
        </AccordionSummary>
        <AccordionDetails>
         Trả lời: Xe đi Hải Phòng từ Hà Nội được đánh giá chất lượng tốt nhất là những nhà xe Nhật Hồng Limousine, Cát Bà Express, AGO Hoàng Phương.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Câu hỏi: Có bao nhiêu nhà xe đang khai thác tuyến đường Hà Nội - Hải Phòng ?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Hiện tại có 33 nhà xe khai thác tuyến đường.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Câu hỏi: Từ Hà Nội đi Hải Phòng mất bao nhiêu tiếng khi di chuyển bằng xe khách?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Thời gian di chuyển bằng xe khách từ Hà Nội đi Hải Phòng khoảng 2.3 tiếng, nếu mật độ giao thông thuận lợi.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Câu hỏi: Khoảng cách từ Hà Nội đi Hải Phòng là bao nhiêu km nếu di chuyển bằng xe khách?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Đoạn đường đi Hải Phòng từ Hà Nội có chiều dài khoảng 106 km.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Câu hỏi: Mỗi ngày có bao nhiêu chuyến xe khách Hà Nội đi Hải Phòng ?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Trung bình mỗi ngày có khoảng 1078 chuyến xe bắt đầu từ 2:30 đến 22:02.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Câu hỏi: Nhà xe đi Hà Nội Hải Phòng nào khởi hành sớm nhất?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Chuyến xe có giờ xuất phát sớm nhất vào lúc 2:30 là của nhà xe Kết Đoàn Travel.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Câu hỏi: Nhà xe đi Hải Phòng từ Hà Nội nào khởi hành trễ nhất?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Chuyến xe có giờ xuất phát trễ (muộn) nhất là vào lúc 22:02 là của nhà xe Kết Đoàn Travel.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
      Câu hỏi: Review xe đi Hải Phòng từ Hà Nội nào có chất lượng tốt, xuất sắc, cao cấp nhất?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Những hãng xe đi Hà Nội Hải Phòng chất lượng tốt, xuất sắc, cao cấp nhất là nhà xe Nhật Hồng Limousine đi Hải Phòng từ Hà Nội với điểm chất lượng là 5/5 dựa trên 1 đánh giá của khách hàng).
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       Câu hỏi: Có loại xe Hà Nội Hải Phòng dành cho cặp đôi, xe limousine phòng đôi không?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Hiện tại chưa có nhà xe nào có loại xe giường nằm đôi khai thác tuyến Hà Nội đi Hải Phòng.
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       Câu hỏi: Các hãng xe nào khai thác dòng xe Limousine đi Hải Phòng từ Hà Nội?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Hiện tại có 20 hãng xe khai thác dòng xe Limousine trên tuyến đường này là xe Nam Anh Limousine,
         Hải Âu, Daiichi Travel, Vip Phương Huy Luxury, Hoàng Anh Limousine (Hải Phòng), Hoàng Phú Limousine, Hải Phòng Travel (Đất Cảng), 
         Hoàng Hà Limousine, Sơn Hải Limousine, Hải Phòng Travel, Nguyễn Gia Limousine (Hải Phòng), AGO Hoàng Phương, Nhật Hồng Limousine, 
         Lợi Vũ Limousine, Daily Limousine, Bằng Phấn, Luxury Van Limousine, Cát Bà Go Easy Limousine, Kết Đoàn Travel, Cát Bà Limousine,
          bạn có thể tham khảo thêm thông tin và đặt vé các nhà xe này tại trang này: Xe limousine Hà Nội đi Hải Phòng
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Câu hỏi: Các hãng xe nào khai thác dòng xe giường nằm đi Hải Phòng từ Hà Nội?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Hiện tại có 4 hãng xe khai thác dòng xe giường nằm trên tuyến đường này là xe Hoàng Hà (Phú Thọ), Bằng Phấn, Luxury Van Limousine, Kết Đoàn Travel,
         bạn có thể tham khảo thêm thông tin và đặt vé các nhà xe này tại trang này: Xe giường nằm Hà Nội đi Hải Phòng
        </AccordionDetails>
      </Accordion>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Câu hỏi: Nhà xe đi Hải Phòng từ Hà Nội nào khởi hành trễ nhất?
        </AccordionSummary>
        <AccordionDetails>
        Trả lời: Chuyến xe có giờ xuất phát trễ (muộn) nhất là vào lúc 22:02 là của nhà xe Kết Đoàn Travel.
        </AccordionDetails>
      </Accordion>
            </div>
        </div>
        
        </>
    )
}