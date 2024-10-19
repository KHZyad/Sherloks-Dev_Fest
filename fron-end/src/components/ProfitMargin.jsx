// import Stack from "@mui/material/Stack";
// import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
// import styles from "./ProfitMargin.module.css";

// const settings = {
//   width: 250,
//   height: 200,
//   value: 60,
// };

// export default function ProfitMargin() {
//   return (
//     <div className={styles.profitMarginContainer}>
//       <h2 className={styles.profitMarginH2}>Profit Margin (KPI)</h2>
//       <Stack
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           backgroundColor: "#111c44",
//           borderRadius: "15px",
//           padding: "20px",
//           width: "330px",
//           height: "190px",
//         }}
//       >
//         <Gauge
//           {...settings}
//           cornerRadius="0%"
//           aria-labelledby="battery_level_label"
//           sx={{
//             "& .MuiGauge-valueText tspan": {
//               fill: "#fff !important", // Force white color for the tspan text
//               fontSize: 40, // Set the font size if needed
//             },
//             [`& .${gaugeClasses.valueArc}`]: {
//               fill: "#39B8FF",
//             },
//             [`& .${gaugeClasses.referenceArc}`]: {
//               fill: "whiteSmoke",
//               opacity: 0.5,
//             },
//           }}
//         />
//       </Stack>

//       <div className={styles.Stats}>
//         <div className={styles.profitPercentage}>
//           <p className={styles.label}>Profit Percentage :</p>
//           <p className={styles.value}>{settings.value}%</p>
//         </div>
//         <div className={styles.lossPercentage}>
//           <p className={styles.label}>Loss Percentage :</p>
//           <p className={styles.value}>{100 - settings.value}%</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js";
import styles from "./ProfitMargin.module.css";

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

export default function ProfitMargin() {
  const [profitMargin, setProfitMargin] = useState(0); // State for profit margin value
  const [loading, setLoading] = useState(true); // Loading state
  const [startDate, setStartDate] = useState(dayjs("2024-01-01")); // State for start date
  const [endDate, setEndDate] = useState(dayjs("2024-12-08")); // State for end date

  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      if (startDate && endDate) {
        const { data, error } = await supabase.rpc("get_profit_margin", {
          start_date: startDate,
          end_date: endDate,
        });

        if (error) {
          throw error; // Handle Supabase RPC error
        }

        if (data) {
          // Assuming the RPC returns an object with a property 'profit_margin'
          setProfitMargin((data.profit_margin * 100).toFixed(2) || 0); // Set the profit margin value
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

  const settings = {
    width: 250,
    height: 200,
    value: Number(profitMargin) || 0, // Use the fetched profit margin value
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.profitMarginContainer}>
        <h2 className={styles.profitMarginH2}>Profit Margin (KPI)</h2>
        <div className={styles.datePickers}>
          <DatePicker
            label="Start Date"
            value={startDate ? dayjs(startDate) : null}
            onChange={handleStartDateChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                width: 140,
                height: 50,
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
                width: 140,
                height: 50,
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
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#111c44",
              borderRadius: "15px",
              padding: "20px",
              width: "330px",
              height: "190px",
            }}
          >
            <Gauge
              {...settings}
              cornerRadius="0%"
              aria-labelledby="battery_level_label"
              sx={{
                "& .MuiGauge-valueText tspan": {
                  fill: "#fff !important", // Force white color for the tspan text
                  fontSize: 40, // Set the font size if needed
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: "#39B8FF",
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: "whiteSmoke",
                  opacity: 0.5,
                },
              }}
            />
          </Stack>
        )}

        <div className={styles.Stats}>
          <div className={styles.profitPercentage}>
            <p className={styles.label}>Profit Percentage :</p>
            <p className={styles.value}>{profitMargin}%</p>
          </div>
          <div className={styles.lossPercentage}>
            <p className={styles.label}>Loss Percentage :</p>
            <p className={styles.value}>{100 - profitMargin}%</p>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
}
