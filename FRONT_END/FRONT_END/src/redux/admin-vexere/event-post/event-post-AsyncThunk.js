
import axios from "axios";
import { getAllArticles, getAllTitleEvent, getoneEvent, showLoading, showLoading1, showPopupError, showPopupError1, showPopupOk, showPopupOk1 } from "./event-post-createSlice";


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

      let res = await axios.post(`http://localhost:8000/api/event/create`, dataform
      );
      // console.log("all loại xe ", res);

      // dispatch(getAllCarType(res.data.data))
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
      let res = await axios.delete(`http://localhost:8000/api/event/delete/${id}`);
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
      let res = await axios.post(`http://localhost:8000/api/event/update/${id}`,formdata);
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

      let res = await axios.post(`http://localhost:8000/api/article/create/`, dataform1
      );
      dispatch(showPopupOk1(true));
    } catch (error) {
      console.log("erooor", error.response.data.message);
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
      let res = await axios.delete(`http://localhost:8000/api/article/delete/${id}`);
      console.log('delete xóa sự kiện', res);

    } catch (error) {
      console.log(error);
    }
  };
}

// lấy 1 loại xe để sửa 
export function CallapiGetOneArticles(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:8000/api/article/${id}`);
      dispatch(getoneEvent(res.data.data))
    } catch (error) {
      console.log(error);
    }
  };
}

export function CallapiUpdateArticles(id,formdata) {
  return async (dispatch) => {
    try {
      let res = await axios.post(`http://localhost:8000/api/article/update/${id}`,formdata);
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
