/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { SubItem } from "./SubItem";

const Sidebar = ({updateMarginLeft}:{updateMarginLeft:(data:string)=>void}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [actionClass, setActionClass] = useState(styles.open);
  const toggleSidebar = () => {
  
    if (isSidebarOpen) {
        updateMarginLeft("70px")
      setActionClass(styles.close);
    } else {
        updateMarginLeft("270px")
      setActionClass(styles.open);
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div id="mySidepanel" className={styles.sidepanel + " " + actionClass}>
        <a
          href="javascript:void(0)"
          className={styles.closebtn}
          onClick={() => {
            toggleSidebar();
          }}
        >
          {isSidebarOpen ? <h3> Dashboard</h3> : <span> ☰</span>}
        </a>
        {isSidebarOpen ? (
          <div>
            <a href="#">
              <i className={"fa-solid fa-house " + styles.icone}></i>Dashboard
            </a>
            <SubItem
              title="Products"
              icone="fa-solid fa-cube "
              items={["Product1", "Product2"]}
            />
            <SubItem
              title="Customers"
              icone="fa-solid fa-user-group "
              items={["Customers1", "Customers2"]}
            />
            <SubItem
              title="Income"
              icone="fa-solid fa-wallet "
              items={["Income1", "Income2"]}
            />
            <SubItem
              title="Promote"
              icone="fa-solid fa-atom  "
              items={["Promote1", "Promote2"]}
            />
            <SubItem
              title="Help"
              icone="fa-solid fa-circle-info   "
              items={["Help1", "Help2"]}
            />
          </div>
        ) : (
          <div style={{ textAlign: "left" }}>
            <a href="#">
              <i className={"fa-solid fa-house " + styles.icone}></i>
            </a>
            <a href="#">
              <i className={"fa-solid fa-cube " + styles.icone}></i>
            </a>
            <a href="#">
              <i className={"fa-solid fa-user-group " + styles.icone}></i>
            </a>
            <a href="#">
              <i className={"fa-solid fa-wallet " + styles.icone}></i>
            </a>
            <a href="#">
              <i className={"fa-solid fa-atom " + styles.icone}></i>
            </a>
            <a href="#">
              <i className={"fa-solid fa-circle-info " + styles.icone}></i>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
