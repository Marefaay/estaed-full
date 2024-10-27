import { Col, Container, Row } from "react-bootstrap";
import UserDataImage from "../images/user-data-ms.png";
import "./UserDataMainSection.css";
const UserDataMainSection = () => {
  return (
    <Container >
      <Row className="align-items-center p-3" xs={1} md={2} lg={2}>
        <Col>
          <div className="user-data-ms-text text-end">
            <h1>أهلا بك</h1>
            <p>
              يمكنك إدخال البيانات من هذه الصفحه وبعدها تستطعي رفع المفات التي
              تريد رفع المفات لكي يقوم الموقع بعمل الاحصائيات
            </p>
          </div>
        </Col>
        <Col>
          <div className="usertdata-ms-image">
            <img
              src={UserDataImage}
              className="img-fluid image"
              alt="User data main section image"
            />
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};
export default UserDataMainSection;
