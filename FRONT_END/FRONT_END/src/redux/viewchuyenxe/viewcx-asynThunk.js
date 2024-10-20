import axios from "axios";
import { getAllChuyenXeTheoTuyen } from "./createSlice";


export function getAllDataCategory() {
    return async (dispatch) => {
      try {
      //   dispatch(loading(true));
        let res = await axios.get(
          "http://localhost:3000/categorys"
        );
        let data = res.data.data;
        console.log("asyncthunk",data);
        dispatch(getAllChuyenXeTheoTuyen(data));
      //   dispatch(loadDataErr(""));
      } catch (error) {
      //   dispatch(loadDataErr(error.message));
      } finally {
      //   dispatch(loading(false));
      }
    };
  }