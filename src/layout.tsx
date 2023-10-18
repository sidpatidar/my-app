import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Header } from "./Components/Header/Header";
export const Layout = (props: any) => {
  const [marginLeft, setMarginLeft] = useState("270px");

  const updateMarginLeft = (data: string) => {
    setMarginLeft(data);
  };
  return (
    <>
      <Sidebar updateMarginLeft={updateMarginLeft} />
      <div
        style={{ marginTop: "5%", marginLeft: marginLeft, marginRight:"5%" }}
      >
       <Header/>
        {props.children}
      </div>
    </>
  );
};
