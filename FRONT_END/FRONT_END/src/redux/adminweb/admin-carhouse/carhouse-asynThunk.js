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
import { updateError } from '../../error/creaslice_error';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

// call  lấy tất cả  nhà xe


export function CallapiGetAllCarHouse() {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://localhost:8000/api/car-house/`);
            dispatch(getAllCarHouse(res.data.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}

export function CallapiGetAllCarHousephantrang(page) {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://localhost:8000/api/car-house?per_page=${page}`);
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
            dispatch(updateError())
            let res = await axios.post(`http://localhost:8000/api/car-house/`, formcarhouse);

            dispatch(showPopupOk2(true));
        } catch (error) {
            console.log('erooor', error);
            dispatch(updateError(error.response.data.data))
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
            let res = await axios.get(`http://localhost:8000/api/car-house/${id}`);
            console.log(res);
            dispatch(getOneCarHouse(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

// call api chỉnh sửa nhà xe
export function CallapiEditCarHouse(id,formData) {
    return async (dispatch) => {
        try {
            let res = await axios.put(`http://localhost:8000/api/car-house/${id}`,formData);
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
            let res = await axios.delete(`http://localhost:8000/api/car-house/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
}
