import { lazy } from "react";
// import AllQuizes from "../pages/AllQuizes";
// import EditSchool from "../pages/EditSchool";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Orders = lazy(() => import("../pages/Orders"));
const AllSchools = lazy(() => import("../pages/AllSchools"));
const SingleSchool = lazy(() => import("../pages/SingleSchool"));
const AddSchool = lazy(() => import("../pages/AddSchool"));
const EditSchool = lazy(() => import("../pages/EditSchool"));
const Users = lazy(() => import("../pages/Users"));
const Admins = lazy(() => import("../pages/Admins"));
const Chats = lazy(() => import("../pages/Chats"));
const Profile = lazy(() => import("../pages/Profile"));
const Quizes = lazy(() => import("../pages/Quizes"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const AllQuizes = lazy(() => import("../pages/AllQuizes"));
const SingleQuiz = lazy(() => import("../pages/SingleQuiz"));
const AddQuiz = lazy(() => import("../pages/AddQuiz"));
// const Dashboard=require("../pages/Dashboard")
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/all-schools",
    component: AllSchools,
  },
  {
    path: "/add-school",
    component: AddSchool,
  },
  {
    path: "/school/:id",
    component: SingleSchool,
  },

  {
    path: "/edit-school/:id",
    component: EditSchool,
  },
  {
    path: "/users",
    component: Users,
  },
  // {
  //   path: "/admins",
  //   component: Admins,
  // },
  {
    path: "/admins",
    component: Admins,
  },
  {
    path: "/manage-profile",
    component: Profile,
  },
  {
    path: "/all-quizes",
    component: AllQuizes,
  },
  {
    path: "/quiz/:id",
    component: SingleQuiz,
  },
  {
    path: "/add-quiz",
    component: AddQuiz,
  },
  {
    path: "/settings",
    component: Quizes,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];
console.log(routes);
export default routes;
