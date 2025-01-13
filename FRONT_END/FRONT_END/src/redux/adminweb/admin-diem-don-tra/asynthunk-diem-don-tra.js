
import axios from "axios";
import { getAllDiemDoncarhouse, getAllDiemTracarhouse, getAllOneDiemDoncarhouse, getAllOneDiemTracarhouse, showLoading, showPopupError, showPopupError1, showPopupOk, showPopupOk1 } from "./creat-Slice-diem-don-tra";
import { updateError } from "../../error/creaslice_error";

////////////////////////////// THÊM SỬA XÓA ĐIỂM ĐÓN 
export function CallapiGetAllDiemDonByCarHouse(id_car_house) {
  return async (dispatch) => {
    try {
      dispatch(showLoading(true));
      let res = await axios.get(`http://localhost:8000/api/pick-up-point/take-by/car-house/${id_car_house}`);
      console.log('all ds xe ', res);
      dispatch(getAllDiemDoncarhouse(res.data.data));
      dispatch(showLoading(false));
    } catch (error) {
      console.log(error);
    }
}
}

export function CallapiPostDiemDon(dataform) {
  return async (dispatch) => {
    try {
         dispatch(updateError())
      let res = await axios.post(`http://localhost:8000/api/pick-up-point/`, dataform
      );
      dispatch(showPopupOk(true));
    } catch (error) {
      console.log("erooor", error);
      dispatch(updateError(error.response.data.data))
      dispatch(showPopupError(true));
    } finally {
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);

    }
  };
}

export function CallapiGetDeleteDiemDon(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/pick-up-point/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiGetOneDiemDon(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/pick-up-point/${id}`);
      dispatch(getAllOneDiemDoncarhouse(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}
export function CallapiUpdateDiemDon(id,data) {
  return async (dispatch) => {
    try {
      dispatch(updateError())
      let res = await axios.put(`http://localhost:8000/api/pick-up-point/${id}`,data,{
        headers: {
         'Content-Type': 'application/json'
        }
      })
      dispatch(showPopupOk(true));
    } catch (error) {
      dispatch(showPopupError(true));
      dispatch(updateError(error.response.data.data))
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);
    }
  };
}


// export function CallapiUpdateDiemDon(id,formdata) {
//   return async (dispatch) => {
//     try {
//       let res = await axios.post(`http://localhost:8000/api/pick-up-point/${id}`,formdata,{

//       });
//       dispatch(showPopupOk(true));
//     } catch (error) {
//       dispatch(showPopupError(true));
//       console.log(error);
//     }finally{
//       setTimeout(() => {
//         dispatch(showPopupError(false));
//         dispatch(showPopupOk(false));
//       }, 3000);
//     }
//   };
// }


///////////////////////////THÊM ĐIỂM TRẢ 
export function CallapiGetAllDiemTraByCarHouse(id_car_house) {
    return async (dispatch) => {
      try {
        dispatch(showLoading(true));
        let res = await axios.get(`http://localhost:8000/api/drop-off-point/take-by/car-house/${id_car_house}`);
        console.log('all ds xe ', res);
        dispatch(getAllDiemTracarhouse(res.data.data));
        dispatch(showLoading(false));
      } catch (error) {
        console.log(error);
      }
  }
  }

  export function CallapiPostDiemTra(dataform) {
    return async (dispatch) => {
      try {
        dispatch(updateError())
        let res = await axios.post(`http://localhost:8000/api/drop-off-point/`,dataform
        );
        dispatch(showPopupOk1(true));
      } catch (error) {
        console.log("erooor", error);
        dispatch(updateError(error.response.data.data))
        dispatch(showPopupError1(true));
      } finally {
        setTimeout(() => {
          dispatch(showPopupError1(false));
          dispatch(showPopupOk1(false));
        }, 3000);
      }
    };
  }
  
  export function CallapiGetDeleteDiemTra(id) {
    return async (dispatch) => {
      try {
        let res = await axios.delete(`http://localhost:8000/api/drop-off-point/${id}`);
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function CallapiGetOneDiemTra(id) {
    return async (dispatch) => {
      try {
        let res = await axios.get(`http://localhost:8000/api/drop-off-point/${id}`);
        dispatch(getAllOneDiemTracarhouse(res.data.data))
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  
  export function CallapiUpdateDiemTra(id,formdata) {
    return async (dispatch) => {
      try {
        dispatch(updateError())
        let res = await axios.put(`http://localhost:8000/api/drop-off-point/${id}`,formdata,{
          headers: {
           'Content-Type': 'application/json'
          }
        });
        dispatch(showPopupOk1(true));
      } catch (error) {
        dispatch(showPopupError1(true));
        dispatch(updateError(error.response.data.data))
        console.log(error);
      }finally{
        setTimeout(() => {
          dispatch(showPopupError1(false));
          dispatch(showPopupOk1(false));
        }, 3000);
      }
    };
  }













