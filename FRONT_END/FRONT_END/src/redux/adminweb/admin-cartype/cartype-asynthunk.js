<<<<<<< HEAD
import axios from "axios";
import { getAllCarType, getAllListCar ,showLoading, showPopupOkanhError } from "./createSlice-cartype";


// call lấy tất cả xe
// export function CallapiGetAllCar() {
//     return async (dispatch) => {
//         try {
//             let res = await axios.get(`http://localhost:8000/api/cartypes`);
//             console.log('all loại xe ', res);

=======

import axios from "axios";
import { getAllCarType, showLoading, getAllListCar, showPopupOk, showPopupError, getoneCarType } from "./createSlice-cartype";


>>>>>>> 1570958cbe7438dcd64be960beeea6f1a59284ee
// call lấy tất cả xe 
export function CallapiGetAllCar() {

  return async (dispatch) => {
    try {
      dispatch(showLoading(false));
      let res = await axios.get(`http://localhost:8000/api/cartypes`);
      console.log("all loại xe ", res.data.data);

<<<<<<< HEAD
  //post loai xe 
  export function CallapiPostCarType(dataform){
    return async (dispatch) => {
      try {
     
        let res = await axios.post(`http://localhost:8000/api/cartypes/create`,dataform
        );
        console.log("all loại xe ",res);
      
       dispatch(getAllCarType(res.data.data))
       dispatch(showPopupOkanhError(true));
      } catch (error) {
        console.log(error);
      } 
    };
  }
=======
      dispatch(getAllCarType(res.data.data))
      dispatch(showLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
}

//post loai xe 
export function CallapiPostCarType(dataform) {
  return async (dispatch) => {
    try {

      let res = await axios.post(`http://localhost:8000/api/cartypes/create`, dataform
      );
      console.log("all loại xe ", res);

      dispatch(getAllCarType(res.data.data))
      dispatch(showPopupOk(true));
    } catch (error) {
      console.log("erooor", error.response.data.message);
      dispatch(showPopupError(true));
    } finally {
      setTimeout(() => {
        dispatch(showPopupError(false));
        dispatch(showPopupOk(false));
      }, 3000);

    }
  };
}


>>>>>>> 1570958cbe7438dcd64be960beeea6f1a59284ee


// lấy all xe
export function CallapiGetAllListCar() {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/car`);
      console.log('all ds xe ', res.data.data.cars.data);
<<<<<<< HEAD
      dispatch(getAllListCar(res.data.data.cars.data));
  } catch (error) {
      console.log(error);
  }
};
}
=======

      dispatch(getAllListCar(res.data.data.cars.data));
    } catch (error) {
      console.log(error);
    }
  };
}

//delete loại xe 
export function CallapiGetDeleteCar(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/cartypes/delete/${id}`);
      console.log('all ds xe ', res);

    } catch (error) {
      console.log(error);
    }
  };
}

// lấy 1 loại xe để sửa 
export function CallapiGetOneCarType(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/cartypes/${id}`);
      dispatch(getoneCarType(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}
export function CallapiUpdateCarType(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/cartypes/update/${id}`,formdata);
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

>>>>>>> 1570958cbe7438dcd64be960beeea6f1a59284ee
