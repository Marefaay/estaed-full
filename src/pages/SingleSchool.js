import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon } from "../icons";
import { Card, Badge, Button } from "react-bootstrap"; // Importing from Bootstrap
import "./SingleSchool.css";

const SingleProduct = () => {
  const [data, setData] = useState(); // Correctly initialize state
  const { id } = useParams();
  const url = "http://localhost:5000/schools";

  // Change view component
  const [tabView, setTabView] = useState("reviews");
  const handleTabView = (viewName) => setTabView(viewName);

  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  if (!data) {
    return <p>Loading school data...</p>;
  }
  const school = data;

  const toglleSubscribe = () => {
    const subscribeBtn = document.getElementById("subcribe");
    // document.getElementById("subcribe").classList.toggle("green2");
    if (subscribeBtn.classList.contains("green2")) {
      console.log("Contain");
      subscribeBtn.classList.remove("green2");
      localStorage.setItem("subsriber-class", "green2");
      // school.isSubscriber = true;
      fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: school.id,
          schoolName: school.schoolName,
          managerName: school.managerName,
          studentsNumber: school.studentsNumber,
          cityName: school.cityName,
          managmentNumber: school.managmentNumber,
          time: school.time,
          mail: school.mail,
          pass: school.pass,
          isSubscriber: false,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok: " + response.statusText
            );
          }
          return response.json();
        })
        .then((updatedData) => {
          console.log("Success:", updatedData); // Handle the updated data
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors
        });
    } else {
      console.log("Donot contain");
      subscribeBtn.classList.add("green2");
      localStorage.setItem("subsriber-class", "green2");

      // school.isSubscriber = true;
      fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: school.id,
          schoolName: school.schoolName,
          managerName: school.managerName,
          studentsNumber: school.studentsNumber,
          cityName: school.cityName,
          managmentNumber: school.managmentNumber,
          time: school.time,
          mail: school.mail,
          pass: school.pass,
          isSubscriber: true,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok: " + response.statusText
            );
          }
          return response.json();
        })
        .then((updatedData) => {
          console.log("Success:", updatedData); // Handle the updated data
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors
        });
    }
  };

  return (
    <div>
      <PageTitle>تفاصيل المدرسة</PageTitle>

      {/* Breadcrumb */}
      <div className="d-flex text-gray-800 align-items-center dark:text-gray-300">
        <div className="d-flex align-items-center text-purple-600" id="dash">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/dashboard" className="mx-2 text-decoration-none" id="dash">
            لوحة التحكم
          </NavLink>
        </div>
      <span style={{color:"var(--text-color)"}}>  {">"}</span>
        <NavLink
          exact
          to="/all-schools"
          className="mx-2 text-purple-600 text-decoration-none"
          id="all-schools"
        >
          كل المدارس
        </NavLink>
        {/* {">"} */}
      <span style={{color:"var(--text-color)"}}>  {">"}</span>

        <p className="mx-2 pt-3" style={{color:"var(--text-color)"}}>{school.schoolName}</p>
      </div>

      {/* Product overview */}
      <Card className="my-4 shadow-md" style={{backgroundColor:"var(--dash-nav)"}}>
        <Card.Body>
          <div className="mx-3 pt-5">
            <div className="d-flex justify-content-center align-items-center mb-3">
              {school.isSubscriber ? (
                <span
                  id="subcribe"
                  className="green2 "
                  onClick={toglleSubscribe}
                ></span>
              ) : (
                <span id="subcribe"  onClick={toglleSubscribe}></span>
              )}
              <h1 className="text-center font-weight-bold text-gray-700 dark:text-gray-200" style={{color:"var(--text-color)"}}>
                {school.schoolName}
              </h1>
            </div>

            <Badge className="mb-5 text-center bdg">
              <p id="school-badge" className="text-center">
                اسم المدينة: {school.cityName}
              </p>
            </Badge>

            <div className="d-flex justify-content-evenly">
              <div className="text-right" >
                <p className="mb-2 text-lg text-gray-800 dark:text-gray-300" style={{color:"var(--text-color)"}}>
                  <strong>اسم المدير:</strong> {school.managerName}
                </p>
                <p className="mb-3 text-lg text-gray-800 dark:text-gray-300" style={{color:"var(--text-color)"}}>
                  <strong>عدد الطلاب:</strong> {school.studentsNumber}
                </p>
                <p className="text-lg text-gray-900 dark:text-gray-400" style={{color:"var(--text-color)"}}>
                  <strong>الايميل:</strong> {school.mail}
                </p>
              </div>
              <div className="text-right">
                <p className="mb-2 text-lg text-gray-800 dark:text-gray-300" style={{color:"var(--text-color)"}}>
                  <strong>رقم الإدارة:</strong> {school.managementNumber}
                </p>
                <p className="mb-3 text-lg text-gray-800 dark:text-gray-300" style={{color:"var(--text-color)"}}>
                  <strong>مدة الاشتراك:</strong> {school.time} شهر
                </p>
                <p className="text-lg text-gray-900 dark:text-gray-400" style={{color:"var(--text-color)"}}>
                  <strong>كلمة المرور:</strong> {school.pass}
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
