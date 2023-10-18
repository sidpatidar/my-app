/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
export const SubItem = ({
  title,
  icone,
  items,
}: {
  title: string;
  icone: string;
  items: string[];
}) => {
  const [open, setOpen] = useState(false);
  return (
    <a
      href="#"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <i className={icone + " " + styles.icone}></i> {title}
      <span style={{"float":"right"}}>
      {open ? (
        <i className="fa-solid fa-caret-up"></i>
      ) : (
        <i className="fa-solid fa-caret-down"></i>
      )}</span> 
      {open && (
        <div>
          {items.map((item: string,index: number) => {
            return <a href="#" key={item+index}>{item}</a>;
          })}
        </div>
      )}
    </a>
  );
};
