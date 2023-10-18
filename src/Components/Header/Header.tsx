import React from "react";
import styles from "./Header.module.css";
import { SearchBar } from "./SearchBar";
export const Header = () => {
  return (
    <div className="row" style={{ marginBottom: "4%" }}>
      <div className="col-lg-6 col-md-6  col-sm-6">
        <span className={styles.user}> HELLO SIDDHARTH</span>
      </div>
      <div className="col-lg-6 col-md-6  col-sm-6">
        <SearchBar />
      </div>
    </div>
  );
};
