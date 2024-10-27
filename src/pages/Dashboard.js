import React, { useEffect, useState } from "react";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { AdminIcon, QuizIcon, SchoolIcon, UserIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";
// import OrdersTable from "../components/OrdersTable";
import {
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
import { Link } from "react-router-dom"; // Corrected import

function Dashboard() {
  // setSowNavAndFooter(true)
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [adminData, setAdminData] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const url = "http://localhost:5000/schools";
  const userUrl = "http://localhost:5000/users";
  const adminUrl = "http://localhost:5000/admins";
  const quizUrl = "http://localhost:5000/quizes";

  useEffect(() => {
    fetch(url)
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
    
    fetch(userUrl)
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
        setUserData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    fetch(adminUrl)
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
        setAdminData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    
    fetch(quizUrl)
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
        setQuizData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <PageTitle>لوحة التحكم</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="عدد المدارس" value={data.length}>
          <RoundIcon
            icon={SchoolIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4 ml-4"
          />
        </InfoCard>

        <InfoCard title="المستخدمين" value={userData.length}>
          <RoundIcon
            icon={UserIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4 ml-4"
          />
        </InfoCard>

        <InfoCard title="المسؤلين" value={adminData.length}>
          <RoundIcon
            icon={AdminIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4 ml-4"
          />
        </InfoCard>

        <InfoCard title="الاختبارات" value={quizData.length}>
          <RoundIcon
            icon={QuizIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4 ml-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="احصائيات المستخدمين">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="الأرباح">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>
      </div>

      <PageTitle>المدارس</PageTitle>
      <TableContainer className="mb-8">
        <Table>
        <TableHeader style={{backgroundColor:"var(--dash-nav) !important"}}>
            <TableRow className="text-center" style={{backgroundColor:"var(--dash-nav) !important"}}>
              <TableCell style={{color:"var(--li-color)"}}>اسم المدرسة</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>اسم المدير</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>عدد الطلاب</TableCell>
              <TableCell style={{color:"var(--li-color)"}}>اسم المدينة</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody style={{backgroundColor:"var(--dash-nav) !important"}}>
          {data.map((school) => (
              <TableRow key={school.id}>
                <TableCell style={{color:"var(--text-color)"}}>{school.schoolName}</TableCell>
                <TableCell style={{color:"var(--text-color)"}}>{school.managerName}</TableCell>
                <TableCell style={{color:"var(--text-color)"}}>{school.studentsNumber}</TableCell>
                <TableCell style={{color:"var(--text-color)"}}>{school.cityName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter> */}
      </TableContainer>
    </>
  );
}

export default Dashboard;
