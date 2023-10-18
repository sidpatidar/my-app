import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5/";
import * as am5percent from "@amcharts/amcharts5/percent";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const CircularChart = ({ data }: { data: any[] }) => {
  const chartRef = useRef<any>();
  useEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        radius: am5.percent(90),
        innerRadius: am5.percent(50),
        layout: root.horizontalLayout,
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country",
      })
    );
    chartRef.current = chart;
    chartRef.current.set("backgroundColor", "white");
    // ;
    series.data.setAll(data);

    // chart.children.push(am5.Label.new(root, {
    //   text: 'My Chart Title',
    //   fontSize: 15,
    //   textAlign:'left'
    // }));
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);

    series.slices.template.set("strokeOpacity", 0);
    series.slices.template.set(
      "fillGradient",
      am5.RadialGradient.new(root, {
        stops: [
          { brighten: -0.8 },
          { brighten: -0.8 },
          { brighten: -0.5 },
          { brighten: 0 },
          { brighten: -0.5 },
        ],
      })
    );

    // let legend = chart.children.push(am5.Legend.new(root, {
    //   centerY: am5.percent(50),
    //   y: am5.percent(50),
    //   layout: root.verticalLayout,
    // }));

    // legend.labels.template.setAll({
    //   maxWidth: 50,
    //   width: 50,
    //   oversizedBehavior: 'wrap',
    // });

    // legend.data.setAll(series.dataItems);

    series.appear(1000, 1000);

    return () => {
      if (root) {
        root.dispose();
      }
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "300px" }}>
      <p>
        <span style={{ fontWeight: "bolder" }}>Customers</span>{" "}
        <small className="text-muted">Customers that buy products</small>
      </p>
    </div>
  );
};

export default CircularChart;
