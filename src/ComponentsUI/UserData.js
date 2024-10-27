import { Col, Container, Row } from "react-bootstrap";
import "./UserData.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataMainSection from "./UserDataMainSection";
const UserData = ({show}) => {
  show(true)
  const [educationManagement, setEducationManagement] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [manager, setManager] = useState("");
  const [semester, setSemester] = useState("");
  const [excuteors, setExcutors] = useState("");
  const [absence, setAbsence] = useState("");
  const [totalGrade, setTotalGrade] = useState("");
  const [educationManagementError, setEducationManagementError] =
    useState(null);
  const [schoolError, setSchoolError] = useState(null);
  const [gradeError, setGradeError] = useState(null);
  const [subjectError, setSubjectError] = useState(null);
  const [teacherError, setTeacherError] = useState(null);
  const [managerError, setManagerError] = useState(null);
  const [semsterError, setSemesterError] = useState(null);
  const [excutorsError, setExcutorsError] = useState(null);
  const [absenceError, setAbsenceError] = useState(null);
  const [totalGradeError, setTotalGradeError] = useState(null);
  const navigate = useNavigate();
  const handleEducationManagamentChange = (event) => {
    const value = event.currentTarget.value;
    setEducationManagement(value);
    if (value.length < 10) {
      setEducationManagementError(
        "  للأسف , هذا الحقل يجب أن يحتوي علي الأقل علي   ١٠أحرف"
      );
    } else {
      setEducationManagementError(null);
    }
  };

  const handleSchoolChange = (event) => {
    const value = event.currentTarget.value;
    setSchool(value);
    if (value.length < 8) {
      setSchoolError("للأسف, هذا الحقل يجب أن يحتوي علي الأقل علي ٨أحرف");
    } else {
      setSchoolError(null);
    }
  };
  const handleGradeChange = (event) => {
    const value = event.currentTarget.value;
    setGrade(value);
    if (value.length < 10) {
      setGradeError("لأسف,هذا الحقل يجب أن يحتوي علي الأقل علي ١٠ أحرف");
    } else {
      setGradeError(null);
    }
  };
  const handleSubjectChange = (event) => {
    const value = event.currentTarget.value;
    setSubject(value);
    if (value.length < 4) {
      setSubjectError("للأسف, هذا الحقل يجب أن يحتوي علي ألاقل علي ٤ أحرف ");
    } else {
      setSubjectError(null);
    }
  };
  const handleTeahcerChange = (event) => {
    const value = event.currentTarget.value;
    setTeacher(value);
    if (value.length < 5) {
      setTeacherError("للأسف, هذا الحقل يجب أن يحتوي علي الأقل علي ٥ أحرف");
    } else {
      setTeacherError(null);
    }
  };
  const handleManagerChange = (event) => {
    const value = event.currentTarget.value;
    setManager(value);
    if (value.length < 5) {
      setManagerError("للأسف ,هذا الحقل يجب أن يحتوي علي الأقل علي ٥ أحرف");
    } else {
      setManagerError(null);
    }
  };
  const handleSemsterChange = (event) => {
    const value = event.currentTarget.value;
    setSemester(value);
    if (value.length < 10) {
      setSemesterError("للأسف ,هذا الحقل يجب أن يحتوي علي الأقل علي ١٠ أحرف");
    } else {
      setSemesterError(null);
    }
  };
  const handleExcuterosChange = (event) => {
    const value = event.currentTarget.value;
    setExcutors(value);
    if (value < 0) {
      setExcutorsError("للأسف, قيمة هذا الحقل يجب ان تكون أكبر من صفر");
    } else if (value > 30) {
      setExcutorsError("للاسف, قيمة هذا الحقل يجب أن تكون أقل من ٣٠");
    } else {
      setExcutorsError(null);
    }
  };
  const handleAbsenceChange = (event) => {
    const value = event.currentTarget.value;
    setAbsence(value);
    if (value < 0) {
      setAbsenceError("للأسف, قيمة هذا الحقل يجب ان تكون أكبر من صفر");
    } else if (value > 30) {
      setAbsenceError("للاسف, قيمة هذا الحقل يجب أن تكون أقل من ٣٠");
    } else {
      setAbsenceError(null);
    }
  };
  const handleTotalGrade = (event) => {
    const value = event.currentTarget.value;
    setTotalGrade(value);
    if (value < 0) {
      setTotalGradeError("للأسف, قيمة هذا الحقل يجب ان تكون أكبر من صفر");
    } else if (value > 20) {
      setTotalGradeError("للاسف, قيمة هذا الحقل يجب أن تكون أقل من ٢٠");
    } else {
      setTotalGradeError(null);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (educationManagement.length === 0) {
      setEducationManagementError("للأسف,هذا الحقل لا يجب أن يكون فارغ");
    }
    if (school.length === 0) {
      setSchoolError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }

    if (grade.length === 0) {
      setGradeError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }

    if (subject.length === 0) {
      setSubjectError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (teacher.length === 0) {
      setTeacherError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (manager.length === 0) {
      setManagerError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (semester.length === 0) {
      setSemesterError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (excuteors.length === 0) {
      setExcutorsError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (absence.length === 0) {
      setAbsenceError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (totalGrade.length === 0) {
      setTotalGradeError("للأسف, هذا الحقل لا يجب أن يكون فارغ");
    }
    if (
      educationManagement.length > 0 &&
      school.length > 0 &&
      grade.length > 0 &&
      subject.length > 0 &&
      teacher.length > 0 &&
      manager.length > 0 &&
      semester.length > 0 &&
      excuteors.length > 0 &&
      absence.length > 0 &&
      totalGrade.length > 0
    ) {
      //   event.currentTarget.submit();

      navigate("/upload", { replace: true });
    }
  };
  return (
    <div className="user-data-page">
        <UserDataMainSection />
      <Container className="p-5">
      <form onSubmit={handleFormSubmit}>
        <Row xs={1} md={2} lg={2}>
          <Col>
            <div className="input">
              <label>
                <i class="fa-solid fa-building-columns"></i>
              </label>
              <input
                type="text"
                placeholder="إداة التعليم"
                onChange={handleEducationManagamentChange}
              />
              {educationManagementError != null ? (
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
            </div>
            {educationManagementError != null ? (
              <div
                className="d-flex justify-content-evenly align-items-center m-auto error"
                style={{ color: "red" }}
              >
                <p>{educationManagementError}</p>
                <p>{educationManagement.length}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-school"></i>
              </label>
              <input
                type="text"
                placeholder="المدرسة"
                onChange={handleSchoolChange}
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
            </div>
            {schoolError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{schoolError}</p>
                <p>{school.length}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-graduation-cap"></i>
              </label>
              <input
                type="text"
                placeholder="الصف"
                onChange={handleGradeChange}
              />
              {gradeError != null ? (
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
            </div>
            {gradeError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{gradeError}</p>
                <p>{grade.length}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-book"></i>
              </label>
              <input
                type="text"
                placeholder="المادة"
                onChange={handleSubjectChange}
              />
              {subjectError != null ? (
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
            </div>
            {subjectError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{subjectError}</p>
                <p>{subject.length}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-person-chalkboard"></i>
              </label>
              <input
                type="text"
                placeholder="المعلمة"
                onChange={handleTeahcerChange}
              />
              {teacherError != null ? (
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
            </div>
            {teacherError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{teacherError}</p>
                <p>{teacher.length}</p>
              </div>
            ) : null}
          </Col>
          <Col>
            <div className="input">
              <label>
                <i class="fa-solid fa-user-tie"></i>
              </label>
              <input
                type="text"
                placeholder="مديرة المدرسة"
                onChange={handleManagerChange}
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
            </div>
            {managerError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{managerError}</p>
                <p>{manager.length}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-calendar"></i>
              </label>
              <input
                type="text"
                placeholder="العام الدراسي"
                readOnly
                value="1446ه"
              />
              <svg
                id="check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
            </div>
            <div className="input">
              <label>
                <i class="fa-solid fa-award"></i>
              </label>
              <input
                type="text"
                placeholder="الفصل الدراسي"
                onChange={handleSemsterChange}
              />
              {semsterError != null ? (
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
            </div>
            {semsterError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{semsterError}</p>
                <p>{semester.length}</p>
              </div>
            ) : null}

            <div className="input">
              <label>
                <i class="fa-solid fa-people-group"></i>
              </label>
              <input
                type="number"
                min={1}
                max={30}
                placeholder="عدد المنفذون/ات"
                onChange={handleExcuterosChange}
              />
              {excutorsError != null ? (
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
            </div>
            {excutorsError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{excutorsError}</p>
                <p>{excuteors}</p>
              </div>
            ) : null}
            <div className="input">
              <label>
                <i class="fa-solid fa-users-slash"></i>
              </label>
              <input
                type="number"
                min={1}
                max={30}
                placeholder="عدد الغائبون/ات"
                onChange={handleAbsenceChange}
              />

              {absenceError != null ? (
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
            </div>
            {absenceError != null ? (
              <div
                className="d-flex justify-content-evenly error m-auto align-items-center"
                style={{ color: "red" }}
              >
                <p>{absenceError}</p>
                <p>{absence}</p>
              </div>
            ) : null}
          </Col>
        </Row>
        <div className="input">
          <label>
            <i class="fa-solid fa-square-poll-vertical"></i>{" "}
          </label>
          <input
            id="total-grade"
            type="number"
            min={1}
            max={20}
            placeholder="الدرجه الكلية"
            onChange={handleTotalGrade}
          />
          {totalGradeError != null ? (
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
        </div>
        {totalGradeError != null ? (
          <div
            className="d-flex justify-content-evenly error m-auto align-items-center"
            style={{ color: "red" }}
          >
            <p>{totalGradeError}</p>
            <p>{totalGrade}</p>
          </div>
        ) : null}
        <button id="send" type="submit">
          إرسال
        </button>
      </form>
    </Container>
    </div>
  );
};
export default UserData;
