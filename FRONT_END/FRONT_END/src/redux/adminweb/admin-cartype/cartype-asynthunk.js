import axios from 'axios';
import {
    getAllCarType,
    showLoading,
    getAllListCar,
    showPopupOk,
    showPopupError,
    getoneCarType,
    getoneCarofCarHouse,
    showPopupOk1,
    showPopupError1,
    getAllListCarbyCarHouseID,
    getAllCarTypenopt,
} from './createSlice-cartype';
import { updateError } from '../../error/creaslice_error';

////////////////////////////// lấy all xe of nhà xe XE CỦA NHÀ XE
export function CallapiGetAllListCar(id, page) {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));

            let res = await axios.get(`http://localhost:8000/api/car/car_house_id/${id}?page=${page}`);
            console.log('all ds xe ', res);

            dispatch(getAllListCar(res.data.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}

export function CallapiGetAllListCarofcarhouseid(car_house_id) {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:8000/api/car/car-house/${car_house_id}`);
            console.log('all ds xe ', res);
            dispatch(getAllListCarbyCarHouseID(res.data.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}
export function CallapiPostCarofCarHouse(dataform) {
    return async (dispatch) => {
        try {
            dispatch(updateError())
            let res = await axios.post(`http://localhost:8000/api/car/`, dataform);
            console.log('all loại xe ', res);

            dispatch(showPopupOk1(true));
        } catch (error) {
            console.log('erooor', error);
            dispatch(updateError(error.response.data))
            dispatch(showPopupError1(true));
        } finally {
            setTimeout(() => {
                dispatch(showPopupError1(false));
                dispatch(showPopupOk1(false));
            }, 3000);
        }
    };
}

export function CallapiGetDeleteCarofCarHouse(id) {
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:8000/api/car/delete/${id}`);
            console.log('deletecar', res);
        } catch (error) {
            console.log(error);
        }
    };
}

export function CallapiGetOneCarOfCarHouse(id) {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:8000/api/car/${id}`);
            dispatch(getoneCarofCarHouse(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

export function CallapiUpdateCarofCarHouse(id, formdata) {
    return async (dispatch) => {
        try {
            dispatch(updateError())
            let res = await axios.post(`http://localhost:8000/api/car/${id}`,formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            dispatch(showPopupOk1(true));
        } catch (error) {
            dispatch(updateError(error.response.data))
            dispatch(showPopupError1(true));
            console.log(error);
        } finally {
            setTimeout(() => {
                dispatch(showPopupError1(false));
                dispatch(showPopupOk1(false));
            }, 3000);
        }
    };
}




////// LOẠI XE CARTYPE
// call lấy tất cả xe
export function CallapiGetAllCarType(page) {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://localhost:8000/api/car-type?per_page=2=${page}`);
            console.log('all loại xe ', res.data.data);

            dispatch(getAllCarType(res.data.data));
            dispatch(showLoading(true));
        } catch (error) {
            console.log(error);
        }
    };
}


export function CallapiGetAllCarTypenopt() {
    return async (dispatch) => {
        try {
            dispatch(showLoading(false));
            let res = await axios.get(`http://127.0.0.1:8000/api/car-type?all=true`);
            console.log('all loại xe ', res.data.data);

            dispatch(getAllCarTypenopt(res.data.data));
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
            let res = await axios.post(`http://localhost:8000/api/car-type/`, dataform);
            console.log('all loại xe ', res);

            dispatch(getAllCarType(res.data.data));
            dispatch(showPopupOk(true));
        } catch (error) {
            console.log('erooor', error.response.data.message);
            dispatch(showPopupError(true));
        } finally {
            setTimeout(() => {
                dispatch(showPopupError(false));
                dispatch(showPopupOk(false));
            }, 3000);
        }
    };
}

////////////////////////delete loại xe
export function CallapiGetDeleteCar(id) {
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:8000/api/car-type/${id}`);
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
            let res = await axios.get(`http://localhost:8000/api/car-type/${id}`);
            dispatch(getoneCarType(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

export function CallapiUpdateCarType(id,formdata) {
    return async (dispatch) => {
        try {
            console.log("><<>><><>",formdata);
            for (let [key, value] of formdata.entries()) {
                console.log(`${key}:`, value);
            }
            let res = await axios.post(`http://localhost:8000/api/car-type/${id}`,formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(">>PP:::",res);
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
