import React from "react";
// import {FaEdit}  from "react-icons/lib/fa";
// import {MdBorderColor} from "react-icons/lib/md/border-color";
// import {MdCameraAlt} from "react-icons/lib/md/camera-alt";




const Profile  =  () => {


    return (
        <div className="profile">
            <div className="profile_img_div">
                <a className="profile_edit" src="#"></a>
                <img className="profile_img" src=""/>
            </div>

            <p>Name</p>
            <p>Chicago, IL</p>
            <p>juanthethird.c@gmail.com</p>
            <div className="profile_member">
                <p>Member Since</p>
                <p>December 2019</p>
            </div>

            <div className="profile_options">
                <div>{}<span> Reviews</span></div>
                <div><span>{} Photos</span></div>
            </div>
        </div>
    )
}


export default Profile;
