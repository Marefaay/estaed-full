import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from "../icons";
import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { Link } from "react-router-dom";
import response from "../utils/demo/profileData";
import "./Header.css"
function Header() {
  // const { mode, toggleMode } = useContext(WindmillContext);
  const { toggleSidebar } = useContext(SidebarContext);
  const [mode, setMode] = useState("");
  // const [email, setEmail] = useState("");

  // Effect to set initial mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light"; // Default to light mode
    setMode(savedMode);
    document.body.classList.toggle("dark", savedMode === "dark");
  }, []);



  // Function to toggle between light and dark modes
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.body.classList.toggle("dark", newMode === "dark");
  };
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className=" py-4  shadow-bottom dark:bg-gray-800 " style={{zIndex:20000,top:"10px"}} id="header">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 hamburger rounded-md lg:hidden focus:outline-none focus:shadow-outline-none"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 ml-16 lg:mr-30">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute right-15 inset-y-0 flex items-center pl-2">
              <SearchIcon id="search-icon" className="w-10 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pr-8 text-gray-700 search"
              placeholder="ابحث عن المدارس"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6 ">
        <li className="relative   " style={{left:"50px"}}>
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <Avatar
                className="align-middle"
                src={response.avatar}
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
            style={{position:"absolute",left:"10px"}}
              align="center"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="/manage-profile" className="text-decoration-none" style={{color:"var(--li-color)"}} >
                <OutlinePersonIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>الحساب الشخصي</span>
              </DropdownItem>
              <DropdownItem tag="a" href="/settings" className="text-decoration-none"style={{color:"var(--li-color)"}}>
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>الإعدادات</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Log out!")} style={{color:"var(--li-color)"}}a>
                <OutlineLogoutIcon
                  className="w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span>تسجييل الخروج</span>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            {/* <button
              className="rounded-md toggler focus:outline-none focus:shadow-outline-orangred"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === "dark" ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button> */}
          </li>
          {/* <!-- Notifications menu --> */}
          {/* <li className="relative"> */}
            {/* <button
              className="relative notifications align-middle rounded-md focus:outline-none focus:shadow-outline-purple mr-5 ml-5"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            > */}
              {/* <BellIcon className="w-5 h-5" aria-hidden="true" /> */}
              {/* <!-- Notification badge --> */}
              {/* <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span> */}
            {/* </button> */}

            {/* <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem
                tag="a"
                href="/app/chats"
                className="justify-between"
              >
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/app/orders"
                className="justify-between"
              >
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert("Alerts!")}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown> */}
          {/* </li> */}
          {/* <!-- Profile menu --> */}
         
        </ul>
      </div>
    </header>
  );
}

export default Header;
