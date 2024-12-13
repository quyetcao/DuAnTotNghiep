
import axios from "axios";
import { getAllDiemDoncarhouse, getAllDiemTracarhouse, getAllOneDiemDoncarhouse, getAllOneDiemTracarhouse, showLoading, showPopupError, showPopupError1, showPopupOk, showPopupOk1 } from "./creat-Slice-diem-don-tra";

////////////////////////////// THÊM SỬA XÓA ĐIỂM ĐÓN 
export function CallapiGetAllDiemDonByCarHouse(id_car_house) {
  return async (dispatch) => {
    try {
      dispatch(showLoading(true));
      let res = await axios.get(`http://localhost:8000/api/pickuppoint/car_house/${id_car_house}`);
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
      let res = await axios.post(`http://localhost:8000/api/pickuppoint/create`, dataform
      );
      dispatch(showPopupOk(true));
    } catch (error) {
      console.log("erooor", error);
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
      let res = await axios.delete(`http://localhost:8000/api/pickuppoint/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiGetOneDiemDon(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/pickuppoint/${id}`);
      dispatch(getAllOneDiemDoncarhouse(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}


export function CallapiUpdateDiemDon(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/pickuppoint/update/${id}`,formdata);
      dispatch(showPopupOk(true));
    } catch (error) {
      dispatch(showPopupError(true));
      console.log(error);
    }finally{
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);
    }
  };
}


///////////////////////////THÊM ĐIỂM TRẢ 
export function CallapiGetAllDiemTraByCarHouse(id_car_house) {
    return async (dispatch) => {
      try {
        dispatch(showLoading(true));
        let res = await axios.get(`http://localhost:8000/api/dropoffpoint/car_house/${id_car_house}`);
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
        let res = await axios.post(`http://localhost:8000/api/dropoffpoint/create`,dataform
        );
        dispatch(showPopupOk1(true));
      } catch (error) {
        console.log("erooor", error);
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
        let res = await axios.delete(`http://localhost:8000/api/dropoffpoint/delete/${id}`);
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function CallapiGetOneDiemTra(id) {
    return async (dispatch) => {
      try {
        let res = await axios.get(`http://localhost:8000/api/dropoffpoint/${id}`);
        dispatch(getAllOneDiemTracarhouse(res.data.data))
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  
  export function CallapiUpdateDiemTra(id,formdata) {
    return async (dispatch) => {
      try {
        let res = await axios.post(`http://localhost:8000/api/dropoffpoint/update/${id}`,formdata);
        dispatch(showPopupOk1(true));
      } catch (error) {
        dispatch(showPopupError1(true));
        console.log(error);
      }finally{
        setTimeout(() => {
          dispatch(showPopupError1(false));
          dispatch(showPopupOk1(false));
        }, 3000);
      }
    };
  }













