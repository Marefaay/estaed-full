import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon } from "../icons";
import { Card, CardBody, Badge, Button, Avatar } from "@windmill/react-ui";
// import { genRating } from "../utils/genarateRating";
import "./SingleSchool.css";
const SingleQuiz = () => {
  const [data, setData] = useState(); // Correctly initialize state
  const { id } = useParams();
  const url = "http://localhost:5000/quizes";

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
  }, [id]); // id should be used here

  // Get product by id
  // let school = data.find((school) => school.id === parseInt(id));
  console.log(data);
  if (!data) {
    return <p>Loading school data...</p>;
  }
  const quiz = data;

  return (
    <div>
      <PageTitle>تفاصيل الاختبار</PageTitle>

      {/* Breadcrumb */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="d-flex justify-content-center text-purple-600" id="dash">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="dashboard" className="mx-2 text-decoration-none" style={{color:"var(--main-color)"}}>
            لوحة التحكم
          </NavLink>
        </div>
      
        <span style={{color:"var(--text-color)"}}>  {">"}</span>
        <NavLink
          exact
          to="all-quizes"
          className="mx-2 text-purple-600 text-decoration-none"
          id="all-schools"
        >
          كل الاختبارات
        </NavLink>
        <span style={{color:"var(--text-color)"}}>  {">"}</span>
        {/* {">"} */}
        <p className="mx-2" style={{color:"var(--li-color)"}}>{quiz.quizName}</p>
      </div>

      {/* Product overview */}
      <Card className="my-8 shadow-md">
        <CardBody style={{backgroundColor:"var(--dash-nav) !important"}}>
          <div>
            <div className="mx-8 pt-5 md:pt-0 relative">
              <h1 className="text-4xl heading p-5 text-center mb-4 font-semibold text-gray-700 dark:text-gray-200" style={{color:"var(--text-color)"}}>
                {quiz.quizName}
              </h1>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleQuiz;
