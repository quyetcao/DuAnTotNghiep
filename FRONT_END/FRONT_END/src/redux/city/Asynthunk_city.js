import axios from "axios";
import { getallCity } from "./CreateSlice_city";



// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiGetCity(){
  return async (dispatch) => {
    try {
   
      let res = await axios.get(`http://127.0.0.1:8000/api/cities/`);
      dispatch(getallCity(res.data));

    } catch (error) {
      console.log(error);
    } 
  };
}

