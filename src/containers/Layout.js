import React, { useContext, Suspense, useEffect, lazy, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "../routes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import Dashboard from "../pages/Dashboard";
import AllSchools from "../pages/AllSchools";
import AddSchool from "../pages/AddSchool";
import Users from "../pages/Users";
import Admins from "../pages/Admins";
import AllQuizes from "../pages/AllQuizes";
import AddQuiz from "../pages/AddQuiz";
import Profile from "../pages/Profile";
import EditSchool from "../pages/EditSchool";
import SingleProduct from "../pages/SingleSchool";
import SingleQuiz from "../pages/SingleQuiz";

const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  // const [showNavAndFooter, setSowNavAndFooter] = useState(false);
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen ? "overflow-hidden" : ""
      }`}
      style={{ backgroundColor: "var(--dash-bg)" }}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        {/* {showNavAndFooter ? : null} */}
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/all-schools" element={<AllSchools />} />
              <Route path="/add-school" element={<AddSchool />} />
              <Route path="/users" element={<Users />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/all-quizes" element={<AllQuizes />} />
              <Route path="/add-quiz" element={<AddQuiz />} />
              <Route path="/quiz/:id" element={<SingleQuiz />} />
              <Route path="/manage-profile" element={<Profile />} />
              <Route path="/edit-school/:id" element={<EditSchool />} />
              <Route path="/school/:id" element={<SingleProduct />} />
              {/* {routes.map((route, i) => (
                route.component ? (
                  <Route key={i} path={`/app${route.path}`} element={<route.component />} />
                ) : console.error(`Route at index ${i} is missing a component.`)
              ))} */}
              {/* <Route path="/dashboard" element={<Navigate to="/dashboard" replace />} /> */}
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
