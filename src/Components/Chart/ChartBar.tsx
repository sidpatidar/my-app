import React from "react";
import styles from  "./ChartBar.module.css"
const ChartBar=({data}:{data:propsData})=>{
   
    let barFillHeight='0%';
   
    if(data.maxValue>0)
    {
        
    
        barFillHeight=Math.round((data.value/ data.maxValue)*100) +'%';   
        
       
    }
return(
    <div className={styles.chartBar}>
        <div className={styles.chartBarInner}>
            <div className={styles.chartBarFill} style={{height:barFillHeight}}></div>
        </div>
        <div className={styles.chartBarLabel}>{data.label}</div>
    </div>
)
}
export default ChartBar;

interface propsData{
    value:number
    maxValue:number
    label:string
    key:string
}