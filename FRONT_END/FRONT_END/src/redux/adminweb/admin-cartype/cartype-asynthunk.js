import axios from 'axios';
import { getAllCarType, getAllListCar } from './createSlice-cartype';

// call lấy tất cả xe
export function CallapiGetAllCar() {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:8000/api/cartypes`);
            console.log('all loại xe ', res);

            dispatch(getAllCarType(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

//post loai xe
export function CallapiPostCarType(dataform) {
    return async (dispatch) => {
        try {
            let res = await axios.post(`http://localhost:8000/api/cartypes/create`, dataform);
            console.log('all loại xe ', res);

            dispatch(getAllCarType(res.data.data));
        } catch (error) {
            console.log(error);
        }
    };
}

// lấy all xe
export function CallapiGetAllListCar() {
    return async (dispatch) => {
      try {
        let res = await axios.get(`http://localhost:8000/api/car`);
        console.log('all ds xe ', res.data.data.cars.data);

        dispatch(getAllListCar(res.data.data.cars.data));
    } catch (error) {
        console.log(error);
    }
};
}
