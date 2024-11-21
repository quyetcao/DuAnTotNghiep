import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function RouterCar(){
    return (
        <>
         <Link to="/admincarhouse/listcar"><Button variant="contained">Quản Lý Xe</Button></Link> 
         <Link to="/admincarhouse/listcartype"><Button variant="contained">Quản Lý Loại Xe</Button></Link>
          <Button variant="contained">Hello</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>

        
        </>
    )
}