import axios from "axios";
import { getAllCarHouse } from "./createSlice-carhouse";



// call  lấy tất cả  nhà xe 
export function CallapiGetAllCarHouse(){
    return async (dispatch) => {
      try {
     
        let res = await axios.get(`http://localhost:8000/api/carhouse/`);
        console.log("all nhà xe ",res);
      
       dispatch(getAllCarHouse(res.data.data))
      } catch (error) {
        console.log(error);
      } 
    };
  }

// call add thêm nhà xe 
export function CallapiAddCarHouse(formcarhouse){
  return async (dispatch) => {
    try {
   
      let res = await axios.post(
        `http://localhost:8000/api/carhouse/create/`,formcarhouse);
      console.log(res);

    } catch (error) {
      console.log(error);
    } 
  };
}

