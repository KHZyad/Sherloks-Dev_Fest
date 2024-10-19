// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";

// const columns = [
//   { id: "month", label: "Month", minWidth: 170 },
//   { id: "revenue", label: "Revenue ($)", minWidth: 170, align: "right" },
//   { id: "expenses", label: "Expenses ($)", minWidth: 170, align: "right" },
//   { id: "net_income", label: "Net Income ($)", minWidth: 170, align: "right" },
// ];

// // Your data rows
// const rows = [
//   { month: "2024-01", revenue: 50000, expenses: 30000, net_income: 20000 },
//   { month: "2024-02", revenue: 60000, expenses: 35000, net_income: 25000 },
//   { month: "2024-03", revenue: 55000, expenses: 32000, net_income: 23000 },
//   { month: "2024-04", revenue: 70000, expenses: 40000, net_income: 30000 },
//   { month: "2024-05", revenue: 75000, expenses: 42000, net_income: 33000 },
//   { month: "2024-06", revenue: 80000, expenses: 45000, net_income: 35000 },
//   { month: "2024-07", revenue: 72000, expenses: 37000, net_income: 35000 },
//   { month: "2024-08", revenue: 78000, expenses: 46000, net_income: 32000 },
//   { month: "2024-09", revenue: 82000, expenses: 48000, net_income: 34000 },
//   { month: "2024-10", revenue: 90000, expenses: 50000, net_income: 40000 },
//   { month: "2024-11", revenue: 95000, expenses: 52000, net_income: 43000 },
//   { month: "2024-12", revenue: 100000, expenses: 55000, net_income: 45000 },
// ];

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(6); // Set rows per page

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper
//       sx={{
//         width: "1100px",
//         backgroundColor: "#111c44",
//         overflow: "hidden",
//         borderRadius: "15px",
//       }}
//     >
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{
//                     minWidth: column.minWidth,
//                     color: "#fff",
//                     backgroundColor: "#000",
//                   }} // Header color
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.month}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell
//                           key={column.id}
//                           align={column.align}
//                           sx={{ color: "#fff" }}
//                         >
//                           {value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Paper sx={{ backgroundColor: "#061b4600", padding: "5px" }}>
//         <TablePagination
//           rowsPerPageOptions={[6, 10, 25]} // Options for rows per page
//           component="div"
//           count={rows.length} // Total number of rows
//           rowsPerPage={rowsPerPage} // Rows displayed per page
//           page={page} // Current page
//           onPageChange={handleChangePage} // Handle page change
//           onRowsPerPageChange={handleChangeRowsPerPage} // Handle rows per page change
//           sx={{ color: "#fff" }} // Text color
//         />
//       </Paper>
//     </Paper>
//   );
// }

import * as React from "react";
import styles from "./Table.module.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

const columns = [
  { id: "month", label: "Month", minWidth: 170 },
  { id: "revenue", label: "Revenue ($)", minWidth: 170, align: "right" },
  { id: "expenses", label: "Expenses ($)", minWidth: 170, align: "right" },
  { id: "net_income", label: "Net Income ($)", minWidth: 170, align: "right" },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const [financialData, setFinancialData] = useState([]); // State for financial data
  const [loading, setLoading] = useState(true); // Loading state
  const [startDate, setStartDate] = useState(dayjs("2024-01-01")); // State for start date
  const [endDate, setEndDate] = useState(dayjs("2024-12-08")); // State for end date

  const fetchData = async () => {
    setLoading(true);
    try {
      if (startDate && endDate) {
        const { data, error } = await supabase.rpc("get_income_statement", {
          start_date: startDate,
          end_date: endDate,
        });

        if (error) {
          throw error;
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or dates change
  }, [startDate, endDate]); // Trigger fetch when dates change

  if (loading) {
    return <p>Loading...</p>; // Loading state
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure correct date format
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue ? newValue.format("YYYY-MM-DD") : null); // Ensure correct date format
  };

  // Prepare rows for the table based on fetched financial data
  const rows = financialData.map((item) => ({
    month: item.month,
    revenue: item.revenue,
    expenses: item.expenses,
    net_income: item.net_income,
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        sx={{
          width: "1100px",
          backgroundColor: "#111c44",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <h2 className={styles.incomeStatementH2}>Income Statement</h2>
        <div className={styles.datePickers} style={{ paddingBottom: "20px" }}>
          <DatePicker
            label="Start Date"
            value={startDate ? dayjs(startDate) : null}
            onChange={handleStartDateChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px",
                width: 250,
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
                color: "white",
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
                width: 250,
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
                color: "white",
              },
            }}
          />
        </div>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      color: "#fff",
                      backgroundColor: "#000",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.month}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ color: "#fff" }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <Paper sx={{ backgroundColor: "#061b4600", padding: "5px" }}>
          <TablePagination
            rowsPerPageOptions={[6, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ color: "#fff" }}
          />
        </Paper>
      </Paper>
    </LocalizationProvider>
  );
}
