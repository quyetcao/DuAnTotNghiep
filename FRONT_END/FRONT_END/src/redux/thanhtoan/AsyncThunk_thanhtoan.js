import axios from "axios";




// call api lấy thông tin chuyến xe khi nhận props từ ds cx
export function callApiPostDonHang(formData){
  return async (dispatch) => {
    try {
   
      let res = await axios.post(`http://127.0.0.1:8000/api/orders/create/`,formData);
          console.log('res',res);
    } catch (error) {
      console.log(error);
    } 
  };
}

