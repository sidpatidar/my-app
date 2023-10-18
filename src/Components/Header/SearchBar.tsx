import React from "react";
import styles from "./Header.module.css";
export const SearchBar = () => {
  return (
    <form className="container-fluid">
      <div style={{ float: "right" }}>
        <span className={styles.icone} id="basic-addon1">
          <i className="fa fa-search"></i>
        </span>
        <input
          type="text"
          className={styles.search}
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};
