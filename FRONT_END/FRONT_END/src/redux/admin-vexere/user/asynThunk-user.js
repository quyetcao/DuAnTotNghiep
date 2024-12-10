
import axios from "axios";
import { getAllUser, showLoading } from "./createSlice-use";


// call lấy tất cả xe 
export function CallapiGetAllUser() {

  return async (dispatch) => {
    try {
      dispatch(showLoading(false));
      let res = await axios.get(`http://localhost:8000/api/user/`);
      console.log("all list ", res.data.data.data);

      dispatch(getAllUser(res.data.data.data))
      dispatch(showLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
}
