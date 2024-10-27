import React, { lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import NavBar from "./ComponentsUI/NavBar";
import Footer from "./ComponentsUI/Footer";
import UploadFiles from "./ComponentsUI/UploadFiles";
import UserData from "./ComponentsUI/UserData";
import LoginNew from "./ComponentsUI/LoginNew";
import "./App.css";
import "./assets/css/tailwind.css";

const Layout = lazy(() => import("./containers/Layout"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  const [showNavAndFooter, setShowNavAndFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hiddenRoutes = [
      "/dashboard",
      "/all-schools",
      "/add-school",
      "/users",
      "/admins",
      "/all-quizes",
      "/add-quiz",
      "/manage-profile",
      /^\/edit-school\/\d+$/, // Matches /edit-school/:id where :id is a number
      /^\/school\/\d+$/, // Matches /school/:id where :id is a number
      /^\/quiz\/\d+$/ // Matches /quiz/:id where :id is a number
    ];

    const isHiddenRoute = hiddenRoutes.some(route => {
      if (typeof route === "string") {
        return route === location.pathname;
      } else if (route instanceof RegExp) {
        return route.test(location.pathname);
      }
      return false;
    });

    setShowNavAndFooter(!isHiddenRoute);
  }, [location]);

  return (
    <div className="App">
      <AccessibleNavigationAnnouncer />
      {showNavAndFooter && <NavBar />}

      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<LoginNew show={setShowNavAndFooter} />} />
        <Route path="/upload" element={<UploadFiles show={setShowNavAndFooter} />} />
        <Route path="/user-data" element={<UserData show={setShowNavAndFooter} />} />
      </Routes>

      {showNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
