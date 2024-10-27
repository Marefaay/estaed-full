import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import PageTitle from "../components/Typography/PageTitle";
import { HomeIcon, AddIcon, PublishIcon, StoreIcon } from "../icons";
import {
  Card,
  CardBody,
  Label,
  Input,
  Textarea,
  Button,
  Select,
} from "@windmill/react-ui";
import "./AddSchool.css";
const FormTitle = ({ children }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
  const navigate=useNavigate()
  const [school, setSchool] = useState("");
  const [manager, setManager] = useState("");
  const [students, setStudents] = useState("");
  const [city, setCity] = useState("");
  const [managment, setManagemt] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolError, setSchoolError] = useState(null);
  const [managerError, setManagerError] = useState(null);
  const [studentsError, setStudentsError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [managmentError, setManagmentError] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passswordError, setPassworddError] = useState(null);
  const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const schoolChange = (event) => {
    const value = event.currentTarget.value;
    console.log(value);
    setSchool(value);
    if (school.length < 10) {
      setSchoolError("للأسف ,هذا الحقل يجب أن يحتوي علي الأقل علي ١٠ أحرف");
    } else {
      setSchoolError(null);
    }
  };
  const managerChange = (event) => {
    const value = event.currentTarget.value;
    setManager(value);
    if (manager.length < 10) {
      setManagerError("للأسف ,هذا الحقل يجب أن يحتوي علي الأقل علي ١٠ أحرف");
    } else {
      setManagerError(null);
    }
  };
  const studentsChange = (event) => {
    const value = event.currentTarget.value;
    setStudents(value);
    if (value < 0) {
      setStudentsError("للأسف, قيمة هذا الحقل لا يجب أن يقل عن صفر");
    } else {
      setStudentsError(null);
    }
  };
  const cityChange = (event) => {
    const value = event.currentTarget.value;
    setCity(value);
    if (city.length < 5) {
      setCityError("للأسف ,هذا الحقل يجب أن يحتوي علي الأقل علي ٥ أحرف");
    } else {
      setCityError(null);
    }
  };
  const managemtChange = (event) => {
    const value = event.currentTarget.value;
    setManagemt(value);
    if (value < 0) {
      setManagmentError("للأسف, قيمة هذا الحقل لا يجب أن يقل عن صفر");
    } else {
      setManagmentError(null);
    }
  };
  const timeChange = (event) => {
    const value = event.currentTarget.value;
    setTime(value);
    if (value < 0) {
      setTimeError("للأسف, قيمة هذا الحقل لا يجب أن يقل عن صفر");
    } else {
      setTimeError(null);
    }
  };
  const emailChange = (event) => {
    const value = event.currentTarget.value;
    setEmail(value);
    if (emailRegEx.test(value) === false) {
      setEmailError("للأسف! ,الايميل لابد ان يكون هكذا 'name@gamil.com'");
    } else {
      setEmailError(null);
    }
  };
  const passwordChange = (event) => {
    const value = event.currentTarget.value;
    setPassword(value);
    if (passwordRegEx.test(value) === false) {
      setPassworddError("للأسف! ,كلمة المرور غير صحيحة");
    } else {
      setPassworddError(null);
    }
  };
  const url = "http://localhost:5000/schools";
  // const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json();
      })
      .then((data) => setData(data));
  },[]);
 
  const addSchool = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: "2",
        schoolName: school,
        managerName: manager,
        studentsNumber: students,
        cityName: city,
        managmentNumber: managment,
        time: time,
        mail: email,
        pass: password,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then(() => {
        console.log("ADDED");
        // navigate("/all-schools")
      });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (school.length === 0) {
      setSchoolError("للأسف,هذا الحقل لا يجب أن يكون فارغ");
    }
    if (manager.length === 0) {
      setManagerError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }

    if (students.length === 0) {
      setStudentsError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }

    if (city.length === 0) {
      setCityError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (managment.length === 0) {
      setManagmentError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (time.length === 0) {
      setTimeError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (email.length === 0) {
      setEmailError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (password.length === 0) {
      setPassworddError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    // if (
    //   school.length.length > 0 &&
    //   manager.length > 0 &&
    //   students.length > 0 &&
    //   city.length > 0 &&
    //   managment.length > 0 &&
    //   time.length > 0 &&
    //   email.length > 0 &&
    //   password.length > 0
    // ) {
    //   // event.currentTarget.submit();
    //   console.log("DOne");
    //   // navigate("/upload", { replace: true });
    // }
    addSchool();
    navigate("/all-schools")
    // history.push("/app/all-schools");
  };
  return (
    <div>
      <PageTitle>إضافة مدرسة جديدة</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800  dark:text-gray-300">
        <div className="d-flex justify-content-center link">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/dashboard" className="mx-2 text-decoration-none" style={{color:"var(--main-color)"}}>
            لوحةالتحكم
          </NavLink>
        </div>
       <span style={{color:"var(--text-color"}}> {">"}</span>
        <p className="mx-2" style={{color:"var(--text-color"}}>إضافة مدرسة جديدة</p>
      </div>

      <div className="w-100   ">
        <Card className="bg-transparent" id="card-body">
          <CardBody id="form">
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-school"></i>
              </span>
              <Input
                className="mb-4"
                placeholder=" اسم المدرسة"
                onChange={schoolChange}
              />
              {schoolError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {schoolError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{schoolError}</span>
                <span>{school.length}</span>
              </div>
            ) : null}

            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-user-tie"></i>
              </span>
              <Input
                onChange={managerChange}
                className="mb-4"
                placeholder=" اسم المدير"
              />
              {managerError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {managerError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{managerError}</span>
                <span>{manager.length}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-users"></i>
              </span>
              <Input
                type="number"
                className="mb-4"
                placeholder=" عدد الطلاب"
                onChange={studentsChange}
              />
              {studentsError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {studentsError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                {" "}
                <span>{studentsError}</span> <span>{students}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-city"></i>
              </span>
              <Input
                className="mb-4"
                placeholder=" اسم المدينة"
                onChange={cityChange}
              />
              {cityError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {cityError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{cityError}</span>
                <span>{city.length}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-building"></i>
              </span>
              <Input
                type="number"
                className="mb-4"
                placeholder=" رقم الاداره"
                onChange={managemtChange}
              />
              {managmentError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {managmentError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{managmentError}</span> <span>{managment}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-calendar"></i>
              </span>
              <Input
                type="number"
                className="mb-4"
                placeholder=" مدة الاشتراك"
                onChange={timeChange}
              />
              {timeError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {timeError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{timeError}</span>
                <span>{time}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <Input
                type="text"
                className="mb-4"
                placeholder=" البريد الالكتروني"
                onChange={emailChange}
              />
              {emailError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {emailError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                <span>{emailError}</span>
              </div>
            ) : null}
            <Label id="label">
              <span id="icon">
                <i class="fa-solid fa-lock"></i>
              </span>
              <Input
                type="text"
                className="mb-4"
                placeholder=" كلمة المرور"
                onChange={passwordChange}
              />
              {passswordError != null ? (
                <svg
                  id="wrong"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
              ) : (
                <svg
                  id="check"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              )}
            </Label>
            {passswordError != null ? (
              <div
                className="flex justify-between w-9/12 mr-3"
                style={{ color: "red" }}
              >
                {" "}
                <span>{passswordError}</span>
              </div>
            ) : null}

            <div className="w-100 d-flex">
              {/* <Button size="large" iconLeft={AddIcon}>
                أضف مدرسة
              </Button> */}
              <button id="add-school-btn" onClick={handleFormSubmit}>
                أضف مدرسة
              </button>
            </div>
          </CardBody>
        </Card>

        {/* <Card className="h-48">
          <CardBody>
            <div className="flex mb-8">
              <Button layout="primary" className="mr-3" iconLeft={PublishIcon}>
                Publish
              </Button>
              <Button layout="link" iconLeft={StoreIcon}>
                Save as Draft
              </Button>
            </div>
            <Label className="mt-4">
              <FormTitle>Select Product Category</FormTitle>
              <Select className="mt-1">
                <option>Electronic</option>
                <option>Fashion</option>
                <option>Cosmatics</option>
                <option>Food and Meal</option>
              </Select>
            </Label>
          </CardBody>
        </Card> */}
      </div>
    </div>
  );
};

export default AddProduct;
