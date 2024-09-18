import "./Home.css";
import img from "../image/Untitled_design_1.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="HomePage">
      <div className="all">
        <div className="text">
          <h1>Welcome in Techno Table</h1>
          <p>Join our to get the latest news in your table</p>
          <div className="buttons">
            <Link className="btn" to="/loginadmin">
              Administrator
            </Link>
            <Link className="btn">Staff</Link>
            <Link className="btn" to="/loginstudent">
              Student
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
