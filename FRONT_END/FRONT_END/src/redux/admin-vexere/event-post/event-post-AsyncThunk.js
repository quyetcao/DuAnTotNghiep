
import axios from "axios";
import { getAllArticles, getAllTitleEvent, getOneArticles, getoneEvent, showLoading, showLoading1, showPopupError, showPopupError1, showPopupOk, showPopupOk1 } from "./event-post-createSlice";
import { updateError } from "../../error/creaslice_error";


// call lấy tất cả xe 
export function CallapiGetAllTitleEvent() {

  return async (dispatch) => {
    try {
      dispatch(showLoading(false));
      let res = await axios.get(`http://localhost:8000/api/event/`);
      console.log("all list ", res.data.data.data);

      dispatch(getAllTitleEvent(res.data.data.data))
      dispatch(showLoading(true));
    } catch (error) {
      console.log(error);
    }
  };
}

//post Bài viết 
export function CallapiPostEvent(dataform) {
  return async (dispatch) => {
    try {

      let res = await axios.post(`http://localhost:8000/api/event/`, dataform
      );
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


//delete Event
export function CallapiGetDeleteEvent(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/event/${id}`);
      console.log('delete xóa sự kiện', res);

    } catch (error) {
      console.log(error);
    }
  };
}

// lấy 1 loại xe để sửa 
export function CallapiGetOneEvent(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/event/${id}`);
      dispatch(getoneEvent(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiUpdateEvent(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.put(`http://localhost:8000/api/event/${id}`,formdata,{
        headers: {
          'Content-Type': 'application/json', 
        },
      });
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


///////////////////////////////Articles

export function CallapiGetAllArticles() {

  return async (dispatch) => {
    try {
      dispatch(showLoading1(false));
      let res = await axios.get(`http://localhost:8000/api/article/`);
      console.log("all post ", res.data.data.data);

      dispatch(getAllArticles(res.data.data.data))
      dispatch(showLoading1(true));
    } catch (error) {
      console.log(error);
    }
  };
}

//post Bài viết 
export function CallapiPostArticles(dataform1) {
  return async (dispatch) => {
    try {
     dispatch(updateError())
      let res = await axios.post(`http://localhost:8000/api/article/`, dataform1
      );
      dispatch(showPopupOk1(true));
    } catch (error) {
      console.log("erooor", error.response.data.message);
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


//delete Event
export function CallapiGetDeleteArticles(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8000/api/article/${id}`);
      console.log('delete xóa sự kiện', res);

    } catch (error) {
      console.log(error);
    }
  };
}

// lấy 1 post xe để sửa 
export function CallapiGetOneArticles(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/article/${id}`);
      dispatch(getOneArticles(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiUpdateArticles(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/article/${id}`,formdata);
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
