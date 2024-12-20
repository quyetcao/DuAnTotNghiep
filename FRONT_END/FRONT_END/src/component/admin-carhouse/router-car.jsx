import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function RouterCar(){
    return (
        <>
         <Link to="/admincarhouse/listcar"><Button variant="contained">Quản Lý Xe</Button></Link> 
         <Link to="/admincarhouse/listcartype"><Button variant="contained">Quản Lý Loại Xe</Button></Link>
         <Link to="/admincarhouse/diem-don"><Button variant="contained">Quản Lí điểm đón</Button></Link>
         <Link to="/admincarhouse/diem-tra"><Button variant="contained">Quản Lí điểm Trả</Button></Link>
         <Link to="/admincarhouse/quan-li-chuyen-xe"><Button variant="contained">Quản Lí Chuyến Xe</Button></Link>
       
       

        
        </>
    )
}