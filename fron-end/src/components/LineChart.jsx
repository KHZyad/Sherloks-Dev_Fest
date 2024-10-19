import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart"; // Ensure this import is correct
import { createClient } from "@supabase/supabase-js"; // Import Supabase client
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Import the date adapter
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import styles from "./LineChart.module.css"; // Your styles

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

export default function CashFlowChart() {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("2024-01-01"); // Set default start date
  const [endDate, setEndDate] = useState("2024-12-08"); // Set default end date

  const fetchData = async () => {
    setLoading(true); // Set loading state to true at the beginning
    try {
      if (startDate && endDate) {
        const { data: jsonData, error } = await supabase.rpc(
          "get_financial_metricsb",
          {
            start_date: startDate,
            end_date: endDate,
          }
        );

        if (error) {
          throw error; // Handle Supabase RPC error
        }

        if (Array.isArray(jsonData)) {
          setData(jsonData);
        } else {
          setData([jsonData]); // Wrap it in an array if it's a single object
        }
      } else {
        console.warn("Start date and end date must be provided.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or dates change
  }, [startDate, endDate]);

  // Handlers for date input changes
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure the correct date format
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure the correct date format
  };

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  const months = data.map((entry) => {
    const monthString = entry.month;
    return new Date(monthString).getMonth() + 1;
  });

  const incomeData = data.map((entry) => entry.total_income);
  const expenseData = data.map((entry) => entry.total_expenses);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.LineChartContainer}>
        <h2 className={styles.cashFlowH2}>Cash Flow</h2>
        <div className={styles.selectStartEndDate}>
          <div className={styles.selectStartDate}>
            <DatePicker
              label="Start Date"
              value={startDate ? dayjs(startDate) : null}
              onChange={handleStartDateChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
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
          <div className={styles.selectEndDate}>
            <DatePicker
              label="End Date"
              value={endDate ? dayjs(endDate) : null}
              onChange={handleEndDateChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
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
        </div>
        <LineChart
          xAxis={[
            {
              data: months,
              label: "Month",
              tickLabelStyle: { fill: "white", fontSize: 12 },
              tickLineProps: { stroke: "white" },
              labelStyle: { fill: "white" },
            },
          ]}
          yAxis={[
            {
              label: "Amount",
              tickLabelStyle: { fill: "white", fontSize: 12 },
              tickLineProps: { stroke: "white" },
              labelStyle: {
                fill: "white",
                transform: "translateY(-170px) translateX(5px)",
                textAnchor: "middle",
                fontSize: 12,
              },
            },
          ]}
          series={[
            {
              label: "Total Income",
              data: incomeData,
              area: false,
            },
            {
              label: "Total Expenses",
              data: expenseData,
              area: false,
            },
          ]}
          width={700}
          height={300}
          sx={{ backgroundColor: "#111c44", borderRadius: "15px" }}
          legend={{
            labelStyle: { fill: "white", fontSize: 12 },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
