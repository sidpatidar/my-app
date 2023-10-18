import React from "react";
import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";
import { ChartData } from "../../Model/PropsModel";
const Chart = ({ dataPoints }: { dataPoints: ChartData[] }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);

  return (
    <>
      <div className="row">
        <p>
          <span style={{ fontWeight: "bolder" }}>Overview</span>{" "}
          <small className="text-muted">Monthely earning</small>
        </p>
      </div>

      <div className={styles.chart}>
        {dataPoints.map((dataPoint: ChartData) => (
          <ChartBar
            data={{
              value: dataPoint.value,
              maxValue: totalMaximun,
              label: dataPoint.label,
              key: dataPoint.label,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default Chart;
