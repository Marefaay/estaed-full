import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import {
  lineOptions,
  lineLegends,
  realTimeUsersBarLegends,
  realTimeUsersBarOptions,
} from "../utils/demo/chartsData";
import UsersTable from "../components/UsersTable";
import AdminsTable from "../components/AdminsTable";

const Admins = () => {
  return (
    <div>
      <PageTitle>إدارة المسؤلين</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="تفاصيل المسؤلين">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="المشاهدون">
          <Bar {...realTimeUsersBarOptions} />
          <ChartLegend legends={realTimeUsersBarLegends} />
        </ChartCard>
      </div>

      <AdminsTable resultsPerPage={10} />
    </div>
  );
};

export default Admins;
