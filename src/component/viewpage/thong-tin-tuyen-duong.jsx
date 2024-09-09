import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function ThongTinTuyenDuong(){
    return (
        < >
         <TableContainer component={Paper} sx={{marginTop:'30px'}}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
             Thông tin tuyến đường Hà Nội đi Hải Phòng 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>Chiều dài tuyến đường</TableCell>
              <TableCell align="right">106 km</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Thời gian di chuyển</TableCell>
              <TableCell align="right">2.3 giờ</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Giá vé trung bình</TableCell>
              <TableCell align="right">340.000 VNĐ</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Số lượng chuyến xe</TableCell>
              <TableCell align="right">1078 chuyến</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>Số lượng nhà xe</TableCell>
              <TableCell align="right">33 nhà xe</TableCell>
            </TableRow>
          
          
          
        </TableBody>
      </Table>
    </TableContainer>
        
        </>
    )
}