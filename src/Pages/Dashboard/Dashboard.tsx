import React from "react";
import { InconeCard } from "../../Components/DisplayCards/IconeCards";
import { Layout } from "../../layout";
import { CirculaGraphData, ProductData, iconCardData } from "../../data";
import { IconeCardModel } from "../../Model/PropsModel";
import ExpenseChart from "./ExpenseChart";
import CircularChart from "../../Components/Chart/CircularChart";
import { Table } from "../../Components/Table/Table";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="row">
        {iconCardData.map((item: IconeCardModel, index: number) => {
          return (
            <div className="col-md-4 col-xl-3" key={item.value + index}>
              <InconeCard data={item} />
            </div>
          );
        })}
      </div>
      <div className="row" style={{ height: "400px" }}>
        <div className="col-8">
          {" "}
          <ExpenseChart />
        </div>
        <div
          className="col-4  rounded"
          style={{ marginBottom: "5%", backgroundColor: "white" }}
        >
          <CircularChart data={CirculaGraphData} />
        </div>
      </div>
      <div className="row">
        <div className="col-12  rounded" style={{ backgroundColor: "white" }}>
          <Table
            data={ProductData}
            title="Product Sell"
            columns={["Product Name", "Stock", "Price", "Sale"]}
          />
        </div>
      </div>
    </Layout>
  );
};
