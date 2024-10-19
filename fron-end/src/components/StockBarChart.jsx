// import { useState, useEffect } from "react";
// import { BarChart } from "@mui/x-charts";
// import styles from "./StockBarChart.module.css";

// export const addLabels = (data) => {
//   return data.map((item) => ({
//     ...item,
//     label: item.dataKey, // Example of adding a label
//   }));
// };

// export default function StockBarChart() {
//   const [financialData, setFinancialData] = useState([]);

//   useEffect(() => {
//     fetch("src\\assets\\data\\StackedBar.json")
//       .then((response) => response.json())
//       .then((data) => setFinancialData(data))
//       .catch((error) => {
//         console.error("Error fetching the data:", error);
//       });
//   }, []);

//   return (
//     <div className={styles.BalanceSheet}>
//       <h2 className={styles.BalanceSheetH2}>Balance Sheet</h2>
//       <BarChart
//         dataset={financialData}
//         series={addLabels([
//           { dataKey: "assets", stack: "financial", color: "#7551FF" },
//           { dataKey: "liabilities", stack: "financial", color: "#39B8FF" },
//           { dataKey: "equity", stack: "financial", color: "#3d25c8" },
//         ])}
//         xAxis={[
//           {
//             scaleType: "band",
//             dataKey: "month",
//             categoryGapRatio: 0.6,
//             barGapRatio: 0.1,
//             tickLabelStyle: { fill: "white", fontSize: 10 },
//             tickLineProps: { stroke: "white" },
//             labelStyle: { fill: "white" },
//           },
//         ]}
//         yAxis={[
//           {
//             tickLabelStyle: { fill: "white", fontSize: 10 },
//             tickLineProps: { stroke: "white" },
//             labelStyle: { fill: "white" },
//           },
//         ]}
//         slotProps={{
//           bar: { style: { borderRadius: "4px" } },
//           legend: { hidden: true },
//         }}
//         width={500}
//         height={330}
//         style={{
//           backgroundColor: "#111c44",
//           borderRadius: "15px",
//         }}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js";
import styles from "./StockBarChart.module.css";

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

export const addLabels = (data) => {
  return data.map((item) => ({
    ...item,
    label: item.dataKey, // Example of adding a label
  }));
};

export default function StockBarChart() {
  const [financialData, setFinancialData] = useState([]); // State for financial data
  const [loading, setLoading] = useState(true); // Loading state
  const [startDate, setStartDate] = useState(dayjs("2024-01-01")); // State for start date
  const [endDate, setEndDate] = useState(dayjs("2024-12-08")); // State for end date

  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      if (startDate && endDate) {
        const { data, error } = await supabase.rpc("get_balance_sheet", {
          start_date: startDate,
          end_date: endDate,
        });

        if (error) {
          throw error; // Handle Supabase RPC error
        }

        if (data) {
          setFinancialData(data); // Set financial data
        }
      } else {
        console.warn("Start date and end date must be provided.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or dates change
  }, [startDate, endDate]); // Trigger fetch when dates change

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  // Handlers for date input changes
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure correct date format
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure correct date format
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.BalanceSheet}>
        <h2 className={styles.BalanceSheetH2}>Balance Sheet</h2>

        <div className={styles.datePickers}>
          <DatePicker
            label="Start Date"
            value={startDate ? dayjs(startDate) : null}
            onChange={handleStartDateChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                width: 150,
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white", // Change icon color to white
              },
            }}
          />
          <DatePicker
            label="End Date"
            value={endDate ? dayjs(endDate) : null}
            onChange={handleEndDateChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                width: 150,
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "& .MuiSvgIcon-root": {
                color: "white", // Change icon color to white
              },
            }}
          />
        </div>

        {loading ? (
          <p>Loading...</p> // Loading state
        ) : (
          <BarChart
            dataset={financialData}
            series={addLabels([
              { dataKey: "assets", stack: "financial", color: "#7551FF" },
              { dataKey: "liabilities", stack: "financial", color: "#39B8FF" },
              { dataKey: "equity", stack: "financial", color: "#3d25c8" },
            ])}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "month",
                categoryGapRatio: 0.6,
                barGapRatio: 0.1,
                tickLabelStyle: { fill: "white", fontSize: 10 },
                tickLineProps: { stroke: "white" },
                labelStyle: { fill: "white" },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: { fill: "white", fontSize: 10 },
                tickLineProps: { stroke: "white" },
                labelStyle: { fill: "white" },
              },
            ]}
            slotProps={{
              bar: { style: { borderRadius: "4px" } },
              legend: { hidden: true },
            }}
            width={500}
            height={330}
            style={{
              backgroundColor: "#111c44",
              borderRadius: "15px",
            }}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}
