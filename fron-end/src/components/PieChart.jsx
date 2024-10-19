// import { PieChart } from "@mui/x-charts/PieChart";

// const desktopOS = [
//   { id: "Windows", value: 60, color: "#7551FF" },
//   { id: "macOS", value: 25, color: "#39B8FF" },
//   { id: "Linux", value: 15, color: "red" },
// ];

// const valueFormatter = (value) => `${value}%`;

// export default function PieActiveArc() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#111c44",
//         padding: "20px",
//         borderRadius: "10px",
//         color: "#fff",
//       }}
//     >
//       <PieChart
//         series={[
//           {
//             data: desktopOS,
//             highlightScope: { fade: "global", highlight: "item" },
//             faded: { innerRadius: 30, additionalRadius: -30, color: "gray" }, // Optional effect
//             valueFormatter,
//           },
//         ]}
//         tooltip={{
//           trigger: "item", // You can use 'item' or 'axis'
//           formatter: (params) => {
//             // Log the params object for debugging
//             console.log("Tooltip Params:", params);

//             // Ensure we correctly access the data for the current hovered item
//             const item = params.data;
//             if (item) {
//               return `${item.id}: ${valueFormatter(item.value)}`;
//             }
//             return `${params.name}: ${valueFormatter(params.value)}`; // Fallback for safety
//           },
//         }}
//         width={300}
//         height={300}
//       />

//       <div style={{ marginLeft: "20px" }}>
//         <h4 style={{ color: "#fff" }}>OS Breakdown</h4>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {desktopOS.map((os) => (
//             <li
//               key={os.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginBottom: "8px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   backgroundColor: os.color,
//                   marginRight: "8px",
//                 }}
//               ></div>
//               <span>{os.id}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { PieChart } from "@mui/x-charts/PieChart";

// const desktopOS = [
//   { id: "Windows", value: 60, color: "#7551FF" },
//   { id: "macOS", value: 25, color: "#39B8FF" },
//   { id: "Linux", value: 15, color: "red" },
// ];

// const valueFormatter = (value) => `${value}%`;

// export default function PieActiveArc() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#111c44",
//         padding: "20px",
//         borderRadius: "10px",
//         color: "#fff",
//       }}
//     >
//       <PieChart
//         series={[
//           {
//             data: desktopOS,
//             highlightScope: { fade: "global", highlight: "item" },
//             faded: { innerRadius: 30, additionalRadius: -30, color: "gray" }, // Optional effect
//             valueFormatter,
//           },
//         ]}
//         tooltip={{
//           trigger: "item", // Trigger the tooltip on item hover
//           formatter: (params) => {
//             // Correctly access the name (id) and value from the hovered data
//             const { id, value } = params.data;
//             return `${id}: ${valueFormatter(value)}`;
//           },
//         }}
//         width={300}
//         height={300}
//       />

//       <div style={{ marginLeft: "20px" }}>
//         <h4 style={{ color: "#fff" }}>OS Breakdown</h4>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {desktopOS.map((os) => (
//             <li
//               key={os.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginBottom: "8px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   backgroundColor: os.color,
//                   marginRight: "8px",
//                 }}
//               ></div>
//               <span>{os.id}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// import { PieChart } from "@mui/x-charts/PieChart";

// const desktopOS = [
//   { id: "Windows", value: 60, color: "#7551FF" },
//   { id: "macOS", value: 25, color: "#39B8FF" },
//   { id: "Linux", value: 15, color: "red" },
// ];

// const totalValue = desktopOS.reduce((acc, os) => acc + os.value, 0);
// const valueFormatter = (value) => `${value}%`;

// export default function PieActiveArc() {
//   return (
//     <div
//     style={{
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#111c44",
//         padding: "20px",
//         borderRadius: "10px",
//         color: "#fff",
//       }}
//       >
//       <PieChart
//         series={[
//           {
//             data: desktopOS,
//             highlightScope: { fade: "global", highlight: "item" },
//             faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
//             valueFormatter,
//           },
//         ]}
//         tooltip={{
//           trigger: "item",
//           formatter: (params) => {
//             const id = params.data?.id || "Unknown";
//             const value = params.data?.value || 0;

//             // Calculate the percentage
//             const percentage = ((value / totalValue) * 100).toFixed(2);

//             // Return a formatted string
//             return `${id}: ${percentage}%`; // Ensure you're returning the id with percentage
//           },
//         }}
//         width={300}
//         height={300}
//         />

//       <div style={{ marginLeft: "20px" }}>
//         <h4 style={{ color: "#fff" }}>OS Breakdown</h4>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {desktopOS.map((os) => (
//             <li
//             key={os.id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginBottom: "8px",
//             }}
//             >
//               <div
//                 style={{
//                   width: "16px",
//                   height: "16px",
//                   backgroundColor: os.color,
//                   marginRight: "8px",
//                 }}
//                 ></div>
//               <span>{os.id}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import { Chart } from "react-google-charts";

export default function PieActiveArc() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
    slices: {
      0: { offset: 0.1, color: "#7551FF" }, // Work
      1: { color: "#39B8FF" }, // Eat
      2: { color: "#6AD2FF" }, // Commute
      3: { color: "#3d25c8" }, // Watch TV
      4: { color: "grey" }, // Sleep
    },
    pieSliceText: "value",
    pieSliceTextStyle: {
      color: "whiteSmoke", // Text color for activities
      fontSize: 16,
    },
    titleTextStyle: {
      color: "white", // Title text color
      fontSize: 15,
    },
    backgroundColor: "#111c44", // Chart background
  };

  return (
    <div
      style={{
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#111c44",
      }}
    >
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"50%"}
        height={"300px"}
      />
    </div>
  );
}
