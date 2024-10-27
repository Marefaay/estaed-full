import React from "react";
import routes from "../../routes/sidebar";
import { NavLink } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "react-bootstrap"; // Assuming you're using react-bootstrap
import "./SideBarConent.css";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        href="/login"
        style={{ fontSize: "25px" }}
        className="mr-6 text-decoration-none logo pr-10 text-lg font-bold text-gray-800 dark:text-gray-200 d-flex align-items-center"
      >
        منصة استعد
      </a>
      <ul className="list-unstyled mt-5">
        {routes.slice(0, -2).map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li id="list-item" className="nav-item" key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center text-lg font-semibold transition-colors duration-150 ${
                    isActive ? "text-gray-800 dark:text-gray-100" : ""
                  } hover:text-gray-800 dark:hover:text-gray-200`
                }
              >
                {/* <span
                  className="bg-orange-500 rounded-lg d-inline-block mr-2"
                  style={{ width: "5px", height: "20px" }}
                  aria-hidden="true"
                ></span> */}
                <Icon className="w-5 h-5 ms-3" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}

        <hr className="customeDivider mx-4 my-5" />

        {routes.slice(-2).map((route) => (
          <li id="list-item" className="nav-item" key={route.name}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `nav-link d-flex align-items-center text-lg font-semibold transition-colors duration-150 ${
                  isActive ? "text-gray-800 dark:text-gray-100" : ""
                } hover:text-gray-800 dark:hover:text-gray-200`
              }
            >
              {/* <span
                className="bg-orange-500 rounded-lg d-inline-block mr-2"
                style={{ width: "5px", height: "20px" }}
                aria-hidden="true"
              ></span> */}
              <Icon className="w-5 h-5 ms-3" aria-hidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarContent;