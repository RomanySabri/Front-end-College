import React from "react";
import { Link } from "react-router-dom";

export default function Schedules() {
  return (
    <div className="schedules">
      <div className="all">
        <div className="buttons">
          <Link className="btn" to="/lecschedules">
            Lecture schedules
          </Link>
          <Link className="btn" to="/secschedules">
            Section schedules
          </Link>
        </div>
      </div>
    </div>
  );
}
