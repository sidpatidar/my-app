import React, { useEffect } from "react";
import styles from "./style.module.css";
import { IconeCardModel } from "../../Model/PropsModel";
export const InconeCard = ({ data }: { data: IconeCardModel }) => {
  const mainCardStyle = data.cardStyle;

  return (
    <div className={styles.card + " " + styles.orderCard} style={mainCardStyle}>
      <div className={styles.cardBlock}>
        <h6 className="m-b-20">{data.title}</h6>
        <h2 className={styles.textRigth}>
          <i className={`${data.icone} ` + styles.fLeft}></i>
          <span>{data.value}</span>
        </h2>
        <p className="m-b-0">
          {data.subTitle}
          <span className={styles.fRight}>{data.footerData}</span>
        </p>
      </div>
    </div>
  );
};
