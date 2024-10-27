/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "لوحة التحكم", // name that appear in Sidebar
  },
  // {
  //   path: "/app/orders",
  //   icon: "CartIcon",
  //   name: "Orders",
  // },
  {
    icon: "SchoolIcon",
    name: "المدارس",
    routes: [
      {
        path: "/all-schools",
        name: "كل المدارس",
      },
      {
        path: "/add-school",
        name: "إضافة مدرسة",
      },
      
    ],
  },
  {
    path: "/users",
    icon: "GroupIcon",
    name: "المستخدمين",
  },
 
  {
    path: "/admins",
    icon: "AdminIcon",
    name: "المسؤلين",
  },
  {
    path: "/settings",
    icon: "QuizIcon",
    name: "الاختبارات",
    routes:[
      {
        path: "/all-quizes",
        name: "كل الاختبارات",
      },
      {
        path: "/add-quiz",
        name: "إضافة اختبار",
      },
      
    ]
  },
  {
    path: "/manage-profile",
    icon: "UserIcon",
    name: "الحساب الشخصي",
  },
 
  {
    path: "/logout",
    icon: "OutlineLogoutIcon",
    name: "تسجيل الخروج",
  },
];

export default routes;
