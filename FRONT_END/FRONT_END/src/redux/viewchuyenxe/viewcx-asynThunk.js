import axios from "axios";
import { cartriptheocarhouseid, cartriptheoid, changeIsLoadcx, getAllChuyenXeSearch, reDataCx } from "./createSlice";



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
        "http://localhost:8000/api/car-trip/search?",{
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
        `http://localhost:8000/api/car-trip/${id_car_trip}`);
      let data = res.data.data;
      dispatch(cartriptheoid(data));

    } catch (error) {
      console.log(error);
    }
  };
}

// export function getSearchChuyenxecarhouseid(formSearch) {
//   return async (dispatch) => {
//     try {
//       dispatch(changeIsLoadcx(true));

//       // Lấy token từ localStorage
//       const token = localStorage.getItem('access_token');
//       if (!token) {
//         throw new Error('Token không tồn tại. Vui lòng đăng nhập.');
//       }

//       let res = await axios.get(
//         "http://localhost:8000/api/cartrip/search-by-date-and-route/",
//         {
//           params: {
//             car_route_id: formSearch.car_route_id,
//             departure_date: formSearch.departure_date,
//           },
//           headers: {
//             Authorization: `Bearer ${token}`, // Định dạng chính xác
//           },
//         }
//       );

//       let data = res.data.data;
//       console.log("asyncthunkcatripdncsnds ", data);
//       dispatch(cartriptheocarhouseid(data));
//     } catch (error) {
//       if (error.response) {
//         console.error('Backend Error:', error.response.data.message || error.response.data);
//       } else {
//         console.error('Error:', error.message);
//       }
//     } finally {
//       dispatch(changeIsLoadcx(false));
//     }
//   };
// }
export function getSearchChuyenxecarhouseid(formSearch) {
  return async (dispatch) => {
    try {
      dispatch(changeIsLoadcx(true));
      let res = await axios.get(
        "http://localhost:8000/api/car-trip/search/car-route-and-date/",
        {
          params: {
            car_route_id: formSearch.car_route_id,
            departure_date: formSearch.departure_date,
          },
        }
      );

      let data = res.data.data;
      console.log("asyncthunkcatripdncsnds ", data);
      dispatch(cartriptheocarhouseid(data));
    } catch (error) {
      if (error.response) {
        console.error('Backend Error:', error.response.data.message || error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    } finally {
      dispatch(changeIsLoadcx(false));
    }
  };
}
