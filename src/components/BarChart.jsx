// import React from "react";
// import { useTheme } from "@mui/material";
// import { ResponsiveBar } from "@nivo/bar";
// import { tokens } from "../theme";
// import { mockBarData as data } from "../data/mockData";

// const BarChart = ({ isDashboard = false }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const g1 = data
//     .filter((student) => student.G1 !== undefined)
//     .slice(0, 10)
//     .map((student) => student.G1);

//   const g2 = data
//     .filter((student) => student.G2 !== undefined)
//     .slice(0, 10)
//     .map((student) => student.G2);

//   const g3 = data
//     .filter((student) => student.G3 !== undefined)
//     .slice(0, 10)
//     .map((student) => student.G3);

//   const resultArray = [];

//   for (let i = 0; i < 10; i++) {
//     const newObj = {
//       g1: g1[i],
//       g2: g2[i],
//       g3: g3[i],
//     };

//     resultArray.push(newObj);
//   }

 
  
//    const barData = [
    
//     {
//       country: "AE",
      
//       burger:resultArray.g1 ,
//       burgerColor: "hsl(111, 70%, 50%)",
//       kebab: resultArray.g2,
//       kebabColor: "hsl(273, 70%, 50%)",
//       donut: resultArray.g3,
//       donutColor: "hsl(275, 70%, 50%)",
//     },
//     {
//       country: "AF",
//       "hot dog": 109,
//       "hot dogColor": "hsl(72, 70%, 50%)",
//       burger: resultArray.g1,
//       burgerColor: "hsl(96, 70%, 50%)",
//       kebab:  resultArray.g2,
//       kebabColor: "hsl(106, 70%, 50%)",
//       donut: resultArray.g3,
//       donutColor: "hsl(256, 70%, 50%)",
//     },
//     {
//       country: "AG",
     
//       burger: resultArray.g1,
//       burgerColor: "hsl(326, 70%, 50%)",
//       kebab:  resultArray.g2,
//       kebabColor: "hsl(110, 70%, 50%)",
//       donut: resultArray.g3,
//       donutColor: "hsl(9, 70%, 50%)",
//     },
//     {
//       country: "AI",
     
//       burger: resultArray.g1,
//       burgerColor: "hsl(325, 70%, 50%)",
//       kebab:  resultArray.g2,
//       kebabColor: "hsl(54, 70%, 50%)",
//       donut: resultArray.g3,
//       donutColor: "hsl(285, 70%, 50%)",
//     },
//     {
//       country: "AL",
      
//       burger: resultArray.g1,
//       burgerColor: "hsl(334, 70%, 50%)",
//       kebab:  resultArray.g2,
//       kebabColor: "hsl(182, 70%, 50%)",
//       donut: resultArray.g3,
//       donutColor: "hsl(76, 70%, 50%)",
//     },
//     {
//       country: "AM",
     
//       burger: resultArray.g1,
//       burgerColor: "hsl(141, 70%, 50%)",
//       kebab:  resultArray.g2,
//       kebabColor: "hsl(224, 70%, 50%)",
//       donut:  resultArray.g3,
//       donutColor: "hsl(274, 70%, 50%)",
//     },
//   ];
  
  

//   return (
//     <ResponsiveBar
//     data={barData}
//     theme={{
//       // Your theme settings
//     }}
//     keys={["burger", "kebab", "donut"]}
//     indexBy="country"
//     margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//     padding={0.3}
//     valueScale={{ type: "linear" }}
//     indexScale={{ type: "band", round: true }}
//     colors={{ scheme: "nivo" }}
//     defs={[
//       {
//         id: "dots",
//         type: "patternDots",
//         background: "inherit",
//         color: "#38bcb2",
//         size: 4,
//         padding: 1,
//         stagger: true,
//       },
//       {
//         id: "lines",
//         type: "patternLines",
//         background: "inherit",
//         color: "#eed312",
//         rotation: -45,
//         lineWidth: 6,
//         spacing: 10,
//       },
//     ]}
//     borderColor={{
//       from: "color",
//       modifiers: [["darker", "1.6"]],
//     }}
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: isDashboard ? undefined : "country",
//       legendPosition: "middle",
//       legendOffset: 32,
//     }}
//     axisLeft={{
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: isDashboard ? undefined : "food",
//       legendPosition: "middle",
//       legendOffset: -40,
//     }}
//     enableLabel={false}
//     labelSkipWidth={12}
//     labelSkipHeight={12}
//     labelTextColor={{
//       from: "color",
//       modifiers: [["darker", 1.6]],
//     }}
//     legends={[
//       {
//         dataFrom: "keys",
//         anchor: "bottom-right",
//         direction: "column",
//         justify: false,
//         translateX: 120,
//         translateY: 0,
//         itemsSpacing: 2,
//         itemWidth: 100,
//         itemHeight: 20,
//         itemDirection: "left-to-right",
//         itemOpacity: 0.85,
//         symbolSize: 20,
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//     role="application"
//     barAriaLabel={function (e) {
//       return (
//         e.id +
//         ": " +
//         e.formattedValue +
//         " in country: " +
//         e.indexValue
//       );
//     }}
//     groupMode="grouped"
//   />

//   );
// };

// export default BarChart;

import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const g1 = data.filter((student) => student.G1 !== undefined).slice(0, 10).map((student) => student.G1);
  
    const g2 = data.filter((student) => student.G2 !== undefined).slice(0, 10).map((student) => student.G2);
  
    const g3 = data.filter((student) => student.G3 !== undefined).slice(0, 10).map((student) => student.G3);
  
    const resultArray = [];
  
    for (let i = 0; i < 10; i++) {
      const newObj = {
        g1: g1[i],
        g2: g2[i],
        g3: g3[i],
      };
  
      resultArray.push(newObj);
    }

    


  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["G1", "G2", "G3", ]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;

