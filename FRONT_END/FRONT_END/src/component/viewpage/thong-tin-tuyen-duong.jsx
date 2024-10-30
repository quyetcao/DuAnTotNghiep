import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function ThongTinTuyenDuong() {
  return (
    < >
    <div className="info-tuyen-duong">
      <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3} sx={{ fontSize: '18px', fontWeight: '700' }}>
                Thông tin tuyến đường Hà Nội đi Hải Phòng
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            <TableRow >
              <TableCell sx={{ fontSize: '16px', fontWeight: '400' }}>Chiều dài tuyến đường</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: '400' }}>106 km</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{ fontSize: '16px', fontWeight: '400' }}>Thời gian di chuyển</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: '400' }}>2.3 giờ</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{ fontSize: '16px', fontWeight: '400' }}>Giá vé trung bình</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: '400' }}>340.000 VNĐ</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{ fontSize: '16px', fontWeight: '400' }}>Số lượng chuyến xe</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: '400' }}>1078 chuyến</TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{ fontSize: '16px', fontWeight: '400' }}>Số lượng nhà xe</TableCell>
              <TableCell align="right" sx={{ fontSize: '16px', fontWeight: '400' }}>33 nhà xe</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  )
}