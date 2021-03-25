import React from "react";
import StudentMain from "./student/StudentMain";
import Header from "../Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div className="Background">
      <Header isLogin={false} />
      <StudentMain />
    </div>
  );
};

export default Main;
