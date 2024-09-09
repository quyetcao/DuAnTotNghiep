import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
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
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
            </div>
        </div>
        
        </>
    )
}