import React, { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
} from "@windmill/react-ui";
// import { Button} from "react-bootstrap"
import {
  EditIcon,
  EyeIcon,
  GridViewIcon,
  HomeIcon,
  ListViewIcon,
  TrashIcon,
} from "../icons"; // Assuming you have Material UI icons or similar
import {
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "react-bootstrap";
import response from "../utils/demo/productData";
import Icon from "../components/Icon";
import "./AllSchools.css";

const ProductsAll = () => {
  const [view, setView] = useState("شبكة");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const url = "http://localhost:5000/schools";

  const getAllSchools = () => {
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
  };

  useEffect(() => {
    getAllSchools();
  }, []);

  const [resultsPerPage, setResultsPerPage] = useState(10);
  const totalResults = data.length;
  const [selectedDeleteSchool, setSelectedDeleteSchool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (schoolId) => {
    const school = data.find((school) => school.id === schoolId);
    setSelectedDeleteSchool(school);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteSchool = (schoolId) => {
    fetch(`http://localhost:5000/schools/${schoolId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        closeModal();
        getAllSchools();
        console.log("Deleted successfully");
      });
  };

  const handleChangeView = () => {
    setView((prevView) => (prevView === "قائمة" ? "شبكة" : "قائمة"));
  };

  return (
    <div className="overflow-hidden">
      <PageTitle>كل المدارس</PageTitle>

      {/* Breadcrumb */}
      <div className="d-flex text-gray-800 align-items-center  dark:text-gray-300 mb-3">
        <div className="d-flex align-items-center " id="dash-link">
          <Icon className="w-5 h-5" aria-hidden="true" icon={HomeIcon} />
          <NavLink exact to="/dashboard" className="mx-2 text-decoration-none ">
            لوحة التحكم
          </NavLink>
        </div>

        <span style={{ color: "var(--text-color" }}> {">"}</span>
        <p
          className="mx-2 pt-3"
          style={{ color: "var(--li-color) !important" }}
        >
          كل المدارس
        </p>
      </div>

      {/* Sort and View Selection */}
      <Card
        className="mt-5 mb-5 shadow-md"
        style={{ backgroundColor: "var(--dash-nav)" }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="" style={{ color: "var(--li-color) !important" }}>
              كل المدارس
            </h5>
            <div
              className=" me-5"
              style={{
                fontSize: "18px",
                color: "var(--text-color) !important",
              }}
            >
              {" "}
              النتائج في {view}{" "}
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <button
                variant="outline-secondary"
                className="ms-2 view"
                onClick={handleChangeView}
              >
                {view === "قائمة" ? <ListViewIcon /> : <GridViewIcon />}
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Delete School Modal */}
      <Modal show={isModalOpen} onHide={closeModal}>
        <ModalHeader closeButton>
          <Icon icon={TrashIcon} className="w-6 h-6 ms-2" />
          <Modal.Title>حذف المدرسة</Modal.Title>
        </ModalHeader>
        <ModalBody>
          أنت متأكد أنك تريد حذف هذه المدرسه{" "}
          {selectedDeleteSchool && `"${selectedDeleteSchool.schoolName}"`}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={closeModal}>
            إلغاء
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteSchool(selectedDeleteSchool.id)}
          >
            حذف
          </Button>
        </ModalFooter>
      </Modal>

      {/* School Views */}
      {view === "قائمة" ? (
        <>
          <TableContainer className="mb-8   ">
            <Table className="table w-100">
              <TableHeader
                style={{ backgroundColor: "var(--dash-nav) !important" }}
                className="text-center"
              >
                {" "}
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  مشترك
                </TableCell>
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  اسم المدرسة
                </TableCell>
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  اسم المدير
                </TableCell>
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  عدد الطلاب
                </TableCell>
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  اسم المدينة
                </TableCell>
                <TableCell
                  style={{ color: "var(--li-color)" }}
                  className="text-center"
                >
                  تعديل
                </TableCell>
              </TableHeader>
              <TableBody
                id="tbody"
                style={{ backgroundColor: "var(--dash-nav)!important " }}
              >
                {data.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell
                      style={{
                        color: "var(--text-color)",
                     backgroundColor: "var(--dash-nav)!important "
                      }}
                    >
                      {school.isSubscriber ? (
                        <span
                          id="circletable"
                          className="green ctable m-auto"
                          // onClick={isSubscriber}
                        ></span>
                      ) : (
                        <span
                          id="circletable"
                          className="ctable red  m-auto"
                          // onClick={isSubscribers}
                        ></span>
                      )}
                    </TableCell>
                    <TableCell style={{ color: "var(--text-color)" ,backgroundColor: "var(--dash-nav)!important "}}>
                      {school.schoolName}
                    </TableCell>
                    <TableCell style={{ color: "var(--text-color)",backgroundColor: "var(--dash-nav)!important " }}>
                      {school.managerName}
                    </TableCell>
                    <TableCell style={{ color: "var(--text-color)",backgroundColor: "var(--dash-nav)!important " }}>
                      {school.studentsNumber}
                    </TableCell>
                    <TableCell style={{ color: "var(--text-color)" ,backgroundColor: "var(--dash-nav)!important "}}>
                      {school.cityName}
                    </TableCell>
                    <TableCell style={{ color: "var(--text-color)",backgroundColor: "var(--dash-nav)!important " }}>
                      <div className="d-flex justify-content-center">
                        <Link to={`/school/${school.id}`}>
                          <Button className="me-2 view-btn">
                            {/* <EyeIcon /> */}

                            <Icon icon={EyeIcon} className="w-6 h-6 eye " />
                          </Button>
                        </Link>
                        <Link to={`/edit-school/${school.id}`}>
                          <Button className="me-2" id="edit-icon">
                            {/* <EditIcon /> */}
                            <Icon icon={EditIcon} className="w-6 h-6 " id="edit" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline-danger"
                          onClick={() => openModal(school.id)}
                          id="delete-icon"
                        >
                          {/* <TrashIcon /> */}

                          <Icon icon={TrashIcon} className="w-6 h-6 trash" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <>
          {/* Grid view */}
          <div className="row mb-8">
            {data.map((school) => (
              <div className="col-md-6 col-lg-4 mb-4" key={school.id}>
                <Card
                  id="school-card"
                  style={{ backgroundColor: "var(--dash-nav)" }}
                >
                  <Card.Body>
                    <div className="d-flex justify-content-evenly align-items-center mb-3">
                      {school.isSubscriber === true ? (
                        <span id="circle" className="green d-block"></span>
                      ) : (
                        <span id="circle" className="red"></span>
                      )}

                      <h5
                        className="school-name"
                        style={{ color: "var(--text-color)" }}
                      >
                        {school.schoolName}
                      </h5>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <p
                          className="font-weight-bold"
                          style={{ color: "var(--li-color)" }}
                        >
                          {school.cityName}
                        </p>
                        <Badge id="badge">{school.studentsNumber}</Badge>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between  mt-3 ">
                      <Link to={`/school/${school.id}`}>
                        <Button className="me-2 view-btn">
                          {/* <EyeIcon className="view-btn"/> */}
                          <Icon icon={EyeIcon} className="w-6 h-6 eye " />
                        </Button>
                      </Link>
                      <div>
                        <Link to={`/edit-school/${school.id}`}>
                          <Button className="me-2" id="edit-icon">
                            {/* <EditIcon /> */}
                            <Icon icon={EditIcon} className="w-6 h-6 " id="edit" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline-danger"
                          onClick={() => openModal(school.id)}
                          id="delete-icon"
                        >
                          <Icon icon={TrashIcon} className="w-6 h-6 trash " />

                          {/* <TrashIcon /> */}
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsAll;
