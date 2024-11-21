import axios from "axios";
import { getAllCarType } from "./createSlice-cartype"


// call lấy tất cả xe 
export function CallapiGetAllCar(){
    return async (dispatch) => {
      try {
     
        let res = await axios.get(`http://localhost:8000/api/cartypes`);
        console.log("all loại xe ",res);
      
       dispatch(getAllCarType(res.data.data))
      } catch (error) {
        console.log(error);
      } 
    };
  }

  //post loai xe 
  export function CallapiPostCarType(dataform){
    return async (dispatch) => {
      try {
     
        let res = await axios.post(`http://localhost:8000/api/cartypes/create`,dataform
        );
        console.log("all loại xe ",res);
      
       dispatch(getAllCarType(res.data.data))
      } catch (error) {
        console.log(error);
      } 
    };
  }


