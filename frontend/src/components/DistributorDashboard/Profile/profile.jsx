import React from 'react'

import './profile.css'
import EditIcon from "@material-ui/icons/Edit";
function Profile() {

    return (
        <div className="profile_container">
             <div className="user_info_box">
               <div className="edit_icon_information"><EditIcon style={{padding:4,margin:6}}/></div>
                  <h1>Profile Information</h1>
                 
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" style={{width:160,height:160,borderRadius:"100%"}}/>
                    <div className="profile_line"></div>
               
              <div className="profile_label_input">
                <label htmlFor="">Your ID Number</label>
                <div>543218765</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
                <div className="profile_label_input">
                <label htmlFor="">Name</label>
                <div>Muhammad Faizan</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>

                <div className="profile_label_input">
                <label htmlFor="">Father Name</label>
                <div>Shafquat Hussain</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
                <div className="profile_label_input">
                <label htmlFor="">Email</label>
                <div>faizanpasha10044@gmail.com</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
                <div className="profile_label_input">
                <label htmlFor="">Address</label>
                <div>Transport Nagar</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
              </div>
          
              <div className="user_info_box">
              <div className="edit_icon_account"><EditIcon style={{padding:4,margin:6}}/></div>
                  <h1>Account Details</h1>

                 
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" style={{width:160,height:160,borderRadius:"100%"}}/>
                    <div className="profile_line"></div>
               
              <div className="profile_label_input">
                <label htmlFor="">Account Number</label>
                <div>543218765</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
                <div className="profile_label_input">
                <label htmlFor="">Account Holder Name</label>
                <div>Muhammad Faizan</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>

                <div className="profile_label_input">
                <label htmlFor="">IFSC Code</label>
                <div>BARB0SAMBHA</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
                <div className="profile_label_input">
                <label htmlFor="">Bank Name</label>
                <div>Bank Of Baroda</div>
                {/* <input type="text" placeholder="Faizan"/> */}
                </div>
              </div>
            </div>
    )
}

export default Profile
