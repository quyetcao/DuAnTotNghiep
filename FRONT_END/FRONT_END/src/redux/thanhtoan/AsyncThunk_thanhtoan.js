import axios from "axios";
import { logEr, logError, logOk } from "../ErrorandOK/createSlice_log";
import { updateError } from "../error/creaslice_error";




// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiPostDonHang(formData){
  return async (dispatch) => {
    try {
       dispatch(updateError())
      let res = await axios.post(`http://127.0.0.1:8000/api/orders/create/`,formData,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
          console.log('res',res);
          dispatch(logOk(true));
    } catch (error) {
      console.log(error);
      dispatch(updateError(error.response.data))
      dispatch(logEr(true));
    } finally {
      setTimeout(() => {
                     dispatch(logOk(false));
                     dispatch(logEr(false));
                 }, 3000);
             }
         };
}

