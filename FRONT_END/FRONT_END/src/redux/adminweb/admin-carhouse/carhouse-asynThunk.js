import axios from 'axios';
import {
    getAllCarHouse,
    getOneCarHouse,
    showPopupError,
    showPopupOk,
    showPopupError2,
    showPopupOk2,
    showLoading,
} from './createSlice-carhouse';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

// call  lấy tất cả  nhà xe
export function CallapiGetAllCarHouse(page) {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));

            let res = await axios.get(`http://localhost:8000/api/carhouse?page=${page}`);
            console.log('all nhà xe ', res);

            dispatch(getAllCarHouse(res.data.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}

// call add thêm nhà xe
export function CallapiAddCarHouse(formcarhouse) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/carhouse/create/`, formcarhouse);
            console.log('all nha xe ', res);

            dispatch(showPopupOk2(true));
        } catch (error) {
            console.log('erooor', error);
            dispatch(showPopupError2(true));
        } finally {
            setTimeout(() => {
                dispatch(showPopupError2(false));
                dispatch(showPopupOk2(false));
            }, 3000);
        }
    };
}

// call api lấy  nhà xe
export function CallapiGetOneCarHouse(id) {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:8000/api/carhouse/${id}`);
            console.log(res);
            dispatch(getOneCarHouse(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

// call api chỉnh sửa nhà xe
export function CallapiEditCarHouse(id, formData) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/carhouse/update/${id}`, formData);
            console.log(res);
            dispatch(showPopupOk(true));
        } catch (error) {
            dispatch(showPopupError(true));
            console.log(error);
        } finally {
            setTimeout(() => {
                dispatch(showPopupError(false));
                dispatch(showPopupOk(false));
            }, 3000);
        }
    };
}

export function CallapiGetDeleteCarHouse(id) {
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:8000/api/carhouse/delete/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
}
