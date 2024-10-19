import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { createClient } from "@supabase/supabase-js"; // Import Supabase client
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // Import the date adapter
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import styles from "./NetIncomeProfit.module.css";

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

export default function NetIncomeProfit() {
  const [chartData, setChartData] = useState({ xAxis: [], series: [] });
  const [loading, setLoading] = useState(true); // State for loading
  const [startDate, setStartDate] = useState(dayjs("2024-01-01")); // Set default start date
  const [endDate, setEndDate] = useState(dayjs("2024-12-08")); // Set default end date

  // Function to fetch data
  const fetchData = async () => {
    setLoading(true); // Set loading state to true at the beginning
    try {
      // Check if both dates are present
      if (startDate && endDate) {
        const { data: jsonData, error } = await supabase.rpc(
          "get_net_income_metrics",
          {
            start_date: startDate,
            end_date: endDate,
          }
        );

        if (error) {
          throw error; // Handle Supabase RPC error
        }

        //console.log("Fetched Data:", jsonData); // Log the fetched data

        if (Array.isArray(jsonData)) {
          const months = jsonData.map((item) => item.month); // Extract months
          const netIncome = jsonData.map((item) => item.net_income); // Extract net income

          setChartData({
            xAxis: months,
            series: [
              { data: netIncome }, // Series for net income
            ],
          });
        } else {
          console.warn("Data is not an array:", jsonData);
        }
      } else {
        console.warn("Start date and end date must be provided."); // Warn if dates are missing
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // End loading
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
    setStartDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure the correct date format
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure the correct date format
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.netIncomeContainer}>
        <h2 className={styles.netIncomeH2}>Net Income (Profit)</h2>
        <div className={styles.datePickers}>
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
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: chartData.xAxis,
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
          series={chartData.series}
          width={700}
          height={300}
          sx={{
            bgcolor: "#111c44", // Set the background color
            borderRadius: "15px", // Optional: add some border radius
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
