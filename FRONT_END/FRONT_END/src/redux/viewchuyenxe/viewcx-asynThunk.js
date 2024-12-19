import axios from "axios";
import { cartriptheoid, changeIsLoadcx, getAllChuyenXeSearch, reDataCx } from "./createSlice";



// export function getAllDataCategory() {
//     return async (dispatch) => {
//       try {
//       //   dispatch(loading(true));
//         let res = await axios.get(
//           "http://localhost:3000/categorys"
//         );
//         let data = res.data.data;
//         console.log("asyncthunk",data);
//         dispatch(getAllChuyenXeTheoTuyen(data));
//       //   dispatch(loadDataErr(""));
//       } catch (error) {
//       //   dispatch(loadDataErr(error.message));
//       } finally {
//       //   dispatch(loading(false));
//       }
//     };
//   }


// call api khi nhận form từ người dùng gủiư lên như nơi đi nới đến và ngày đi
export function getSearchChuyenxe(formSearch){
  return async (dispatch) => {
    try {
      dispatch(changeIsLoadcx(true))
      dispatch(reDataCx())
      let res = await axios.get(
        "http://localhost:8000/api/cartrip/search?",{
        params: {
          city_from: formSearch.city_from,
          city_to:formSearch.city_to,
          departure_date: formSearch.departure_date,
          return_date: formSearch.return_date
        }
      }

      );
      let data = res.data.data;
      console.log("asyncthunk", data);
      dispatch(getAllChuyenXeSearch(data));

    } catch (error) {
      dispatch(getAllChuyenXeSearch([]));
      console.log(error);
    } finally{
      dispatch(changeIsLoadcx(false))
    }
  };
}


export function getChuyenxebyid(id_car_trip){
  return async (dispatch) => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/cartrip/${id_car_trip}`);
      let data = res.data.data;
      dispatch(cartriptheoid(data));

    } catch (error) {
      console.log(error);
    }
  };
}