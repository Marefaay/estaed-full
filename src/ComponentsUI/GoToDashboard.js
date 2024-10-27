import { Link } from "react-router-dom";
import "./GoToDashboard.css";
const GoToDashBoard = () => {
  return (
    <>
      <Link to="/dashboard">
        <div className="go-to-dashboard">
          <i class="fa-solid fa-gauge"></i>
          <div className="paragrpah">
            {" "}
            <p>اذهب الي لوحة التحكم</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default GoToDashBoard;
