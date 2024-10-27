import React, { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import ProfileImage from "../assets/img/WhatsApp Image 2024-10-09 at 13.37.39_502b1e40.jpg";
import "./Profile.css";
import { Col, Row } from "react-bootstrap";

const Profile = () => {
  // const saveBtn = document.getElementById("profile-data-save");
  const [editable, setEditable] = useState(false);
  const edit = (e) => {
    const clickedIcon = e.target;
    clickedIcon.style.color = "red";
    document.getElementsByTagName("input")[0].readOnly = "false";
    console.log(clickedIcon);
  };

  return (
    <div>
      <PageTitle>الحساب الشخصي</PageTitle>
      <div className="admin-data p-2">
        {/* <Row xl={1} md={1} lg={2}> */}
        {/* <Col> */}
            <div className="profile-img w-100">
              <img src={ProfileImage} alt="addmin profile image" />
              <button>تغيير الصورة</button>
            </div>
          {/* </Col> */}
          {/* <Col> */}
            <div className="profile-data w-100 m-0">
              <form>
                <div className="relative">
                  <input value={"الاسم الأول:- محمود"} />
                  <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
                </div>
                <div className="relative">
                  <input value={"الاسم الأخير:- رفاعي"} />
                  <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
                </div>
                <div className="relative">
                  <input value={"الايميل:- mrefaay271@gmail.com"} />
                  <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
                </div>
                <div className="relative">
                  <input value={"كلمة المرور:- 010hHH@@gmail.com"} />
                  <i class="fa-solid fa-pen-to-square" onClick={edit}></i>
                </div>
                <button id="profile-data-save">حفظ</button>
              </form>
            </div>
          {/* </Col> */}
        
        {/* </Row> */}
      </div>
    </div>
  );
};

export default Profile;
