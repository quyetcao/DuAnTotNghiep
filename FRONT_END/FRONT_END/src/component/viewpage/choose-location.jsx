import GppGoodIcon from '@mui/icons-material/GppGood';
import '../css/css-view-all-chuyen-xe/choose-location.css';
import { useEffect, useState } from 'react';
export default function ChooseLocation({car_id,itemallthongtincx}) {

    console.log("itemallthongtincx", itemallthongtincx);
    const [selectedValuediemdon , setSelectedValuediemdon] = useState(null);
    const [selectedValuediemtra , setSelectedValuediemtra] = useState(null);

    useEffect(() => {
        if (selectedValuediemdon !== null) {
          localStorage.setItem("setdiemdon", selectedValuediemdon);
        }
      }, [selectedValuediemdon]); 
    
   
      useEffect(() => {
        if (selectedValuediemtra !== null) {
          localStorage.setItem("setdiemtra", selectedValuediemtra);
        }
      }, [selectedValuediemtra]);
    
    const handleRadioChange1  = (event) => {
        setSelectedValuediemdon(event.target.value); 
      };
      const handleRadioChange2  = (event) => {
        setSelectedValuediemtra(event.target.value); 
      };

      console.log("selectedValuediemdon",selectedValuediemdon+selectedValuediemtra);
    
    return (
        <>

            <div className="note-go-bus-2">
                <GppGoodIcon sx={{ color: '#27AE60' }} />
                <p style={{ frontSize: '12px' }}>An tâm được đón đúng nơi, trả đúng chỗ đã chọn và dễ dàng thay đổi khi cần.</p>
            </div>
            <div className="diem-don-diem-tra">
                <div className="diem-don">
                    <div className="diem-don-top ">
                        <div className="ddxe diemdon ">
                            <div>Điểm đón</div>
                        </div>
                        {itemallthongtincx && itemallthongtincx?.pickup_points?.map((itemdiemdon) => {
                            return <div className="form-check" key={itemdiemdon.id}>
                                <label className="form-check-label" >
                                    <input type="radio" className="form-check-input"  onChange={handleRadioChange1}  name="" id="" value={itemdiemdon?.pivot?.pickup_point_id} />
                                    <li style={{ fontWeight: '500' }}>
                                        {itemdiemdon.pivot.pickup_time}
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>{itemdiemdon.address}</li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                        })
                        }
                    </div>
                   

                </div>
                <div className="diem-tra ">
                    <div className="diem-tra-top ">
                        <div className="ddxe diemtra">
                            <div>Điểm trả</div>
                        </div>
                        {itemallthongtincx && itemallthongtincx?.dropoff_points?.map((itemdiemdon) => {
                            return <div className="form-check" key={itemdiemdon.id}>
                                <label className="form-check-label" >
                                    <input type="radio" className="form-check-input"  name="" id=""   onChange={handleRadioChange2}  value={itemdiemdon?.pivot?.dropoff_point_id} />
                                    <li style={{ fontWeight: '500' }}>
                                        {itemdiemdon.pivot.dropoff_time}
                                        <ul>
                                            <li className='trung-chuyen'>Có trung chuyển</li>
                                            <li>{itemdiemdon.address}</li>
                                        </ul>
                                    </li>
                                </label>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>





        </>
    )
}