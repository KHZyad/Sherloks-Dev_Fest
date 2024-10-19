import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js"; // Import Supabase client
import styles from "./ExpenseBreakdown.module.css";

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

export default function ExpenseBreakdown() {
  const [chartData, setChartData] = useState([["Category", "Total Expense"]]);
  const [loading, setLoading] = useState(true); // Loading state
  const [startDate, setStartDate] = useState(dayjs("2024-01-01")); // State for start date
  const [endDate, setEndDate] = useState(dayjs("2024-12-08")); // State for end date

  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      if (startDate && endDate) {
        const { data, error } = await supabase.rpc("get_expense_breakdown", {
          start_date: startDate,
          end_date: endDate,
        });

        if (error) {
          throw error; // Handle Supabase RPC error
        }

        // Transform the data into the format needed for the chart
        const formattedData = data.map((item) => [
          item.category_name,
          item.total_expense,
        ]);

        // Set the chart data with headers
        setChartData([["Category", "Total Expense"], ...formattedData]);
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

  const options = {
    slices: {
      0: { offset: 0.1, color: "#2E073F" }, // Salaries
      1: { color: "#7A1CAC" }, // Rent
      2: { color: "#AD49E1" }, // Utilities
      3: { color: "#5c008d" }, // Marketing
      4: { color: "#EBD3F8" }, // Supplies
      5: { color: "#05aff9" }, // Miscellaneous
      6: { color: "#ae88f6" }, // Miscellaneous
      7: { color: "#4e08aa" }, // Miscellaneous
      8: { color: "#036995" }, // Miscellaneous
      9: { color: "#380a8e" }, // Miscellaneous
      10: { color: "#2b2242" }, // Miscellaneous
    },
    pieSliceText: "value",
    pieSliceTextStyle: {
      color: "white", // Change text color for activities to white
      fontSize: 12,
    },
    titleTextStyle: {
      color: "white", // Change title text color to white
      fontSize: 15,
    },
    backgroundColor: "#111c44", // Chart background
    legend: {
      textStyle: {
        color: "white", // Set legend text color to white
        fontSize: 16,
      },
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          backgroundColor: "#111c44",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <h2 className={styles.expenseBreakdownH2}>Expense Breakdown</h2>
        <div className={styles.datePickers}>
          <DatePicker
            label="Start Date"
            value={startDate ? dayjs(startDate) : null}
            onChange={handleStartDateChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                width: 180,
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
                width: 180,
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
          <Chart
            chartType="PieChart"
            data={chartData}
            options={options}
            width={500}
            height={330}
          />
        )}
      </div>
    </LocalizationProvider>
  );
}
