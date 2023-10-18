import React from "react";
import styles from "./Table.module.css";
import { ProductModel } from "../../Model/PropsModel";
import { SearchBar } from "../Header/SearchBar";
export const Table = ({
  data,
  title,
  columns,
}: {
  data: ProductModel[];
  title: string;
  columns: string[];
}) => {
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr className="border-bottom">
            <th colSpan={4}>
              <span className={" fw-bold " + styles.size}></span>
              <SearchBar />
            </th>
          </tr>
          <tr>
            {columns.map((item: string, index: number) => {
              return (
                <th scope="col" className={index == 0 ? styles.mainCol : ""}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item: ProductModel, index: number) => {
            return (
              <tr>
                <td scope="row" className={styles.mainCol}>
                  <div className="row">
                    <div className="col-2">
                      <img
                        alt="Image placeholder"
                        src={item.image}
                        className={styles.image}
                      />
                    </div>
                    <div className="col-10">
                      <span className="fw-bold">{item.name}</span>
                      <br />
                      <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </small>
                    </div>
                  </div>
                </td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>{item.sales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
