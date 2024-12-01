import axios from 'axios';
import { getAllBanner, getoneBanner, showLoading, showPopupOk, showPopupError } from './createSlice-banner';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`;

// banner
// call  lấy tất cả banner
export function CallapiGetAllBanner() {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://localhost:8000/api/banner/`);
            console.log('list banner jvhdfjghfdjkghfdsjkg ', res.data.data);

            dispatch(getAllBanner(res.data.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}

// call add banner
export function CallapiAddBanner(formbanner) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/banner/create/`, formbanner);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
}

//delete banner
export function CallapiGetDeleteBanner(id) {
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:8000/api/banner/delete/${id}`);
            console.log('all banner ', res);
        } catch (error) {
            console.log(error);
        }
    };
}

// lấy 1 Banner để sửa
export function CallapiGetOneBanner(id) {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:8000/api/banner/${id}`);
            dispatch(getoneBanner(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

//post banner
export function CallapiPostBanner(dataform) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/banner/create`, dataform);
            console.log('all loại xe ', res);

            dispatch(getAllBanner(res.data.data));
            dispatch(showPopupOk(true));
        } catch (error) {
            console.log('erooor', error.res.data.message);
            dispatch(showPopupError(true));
        } finally {
            setTimeout(() => {
                dispatch(showPopupError(false));
                dispatch(showPopupOk(false));
            }, 3000);
        }
    };
}
