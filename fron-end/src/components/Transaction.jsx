// import React, { useEffect, useState } from "react";
// import styles from "./Transaction.module.css";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddTransaction from "./AddTransaction"; // Import the new component

// function createData(
//   id,
//   company_id,
//   amount,
//   type,
//   transaction_date,
//   description
// ) {
//   return {
//     id,
//     company_id,
//     amount,
//     type,
//     transaction_date,
//     description,
//     history: [
//       {
//         date: transaction_date,
//         amount: amount,
//         description: description,
//       },
//     ],
//   };
// }

// function Row({ row, onDelete }) {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? (
//               <KeyboardArrowUpIcon sx={{ color: "white" }} />
//             ) : (
//               <KeyboardArrowDownIcon sx={{ color: "white" }} />
//             )}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row" sx={{ color: "white" }}>
//           {row.id}
//         </TableCell>
//         <TableCell sx={{ color: "white" }}>{row.company_id}</TableCell>
//         <TableCell align="right" sx={{ color: "white" }}>
//           {row.amount}
//         </TableCell>
//         <TableCell align="right" sx={{ color: "white" }}>
//           {row.type}
//         </TableCell>
//         <TableCell align="right" sx={{ color: "white" }}>
//           {row.transaction_date}
//         </TableCell>
//         <TableCell align="right">
//           <IconButton aria-label="delete" onClick={() => onDelete(row.id)}>
//             <DeleteIcon sx={{ color: "red" }} />
//           </IconButton>
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography
//                 variant="h6"
//                 gutterBottom
//                 component="div"
//                 sx={{ color: "white" }}
//               >
//                 Transaction Details
//               </Typography>
//               <Table size="small" aria-label="transaction history">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ color: "white" }}>Date</TableCell>
//                     <TableCell sx={{ color: "white" }}>Description</TableCell>
//                     <TableCell align="right" sx={{ color: "white" }}>
//                       Amount
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell
//                         component="th"
//                         scope="row"
//                         sx={{ color: "white" }}
//                       >
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         {historyRow.description}
//                       </TableCell>
//                       <TableCell align="right" sx={{ color: "white" }}>
//                         {historyRow.amount}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     company_id: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//     type: PropTypes.string.isRequired,
//     transaction_date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         amount: PropTypes.number.isRequired,
//         description: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//   }).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default function CollapsibleTable() {
//   const [rows, setRows] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("src/assets/data/Transaction.json"); // Adjust the path based on your project structure
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         const formattedData = data.map((transaction) =>
//           createData(
//             transaction.id,
//             transaction.company_id,
//             transaction.amount,
//             transaction.type,
//             transaction.transaction_date,
//             transaction.description
//           )
//         );
//         setRows(formattedData);
//       } catch (error) {
//         console.error("Failed to fetch transactions:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAddTransaction = (newTransaction) => {
//     setRows((prevRows) => [
//       ...prevRows,
//       createData(
//         newTransaction.id,
//         newTransaction.company_id,
//         newTransaction.amount,
//         newTransaction.type,
//         newTransaction.transaction_date,
//         newTransaction.description
//       ),
//     ]);
//   };

//   const handleDeleteTransaction = (id) => {
//     setRows((prevRows) => prevRows.filter((row) => row.id !== id));
//   };

//   return (
//     <div className={styles.transactionContainer}>
//       <h2 className={styles.transactiontH2}>Transactions</h2>
//       {/* Include the form here */}
//       <AddTransaction onAddTransaction={handleAddTransaction} />
//       <div className={styles.tableButtons}>
//         <TableContainer
//           component={Paper}
//           sx={{
//             backgroundColor: "#111c44",
//             width: "100%",
//             margin: "3% auto",
//             borderRadius: "15px",
//           }}
//         >
//           <Table aria-label="collapsible table">
//             <TableHead sx={{ backgroundColor: "black" }}>
//               <TableRow>
//                 <TableCell />
//                 <TableCell sx={{ color: "white" }}>Transaction ID</TableCell>
//                 <TableCell sx={{ color: "white" }}>Company ID</TableCell>
//                 <TableCell align="right" sx={{ color: "white" }}>
//                   Amount
//                 </TableCell>
//                 <TableCell align="right" sx={{ color: "white" }}>
//                   Type
//                 </TableCell>
//                 <TableCell align="right" sx={{ color: "white" }}>
//                   Transaction Date
//                 </TableCell>
//                 <TableCell align="right" sx={{ color: "white" }}>
//                   Actions
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <Row
//                   key={row.id}
//                   row={row}
//                   onDelete={handleDeleteTransaction}
//                 />
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js"; // Import Supabase client
import styles from "./Transaction.module.css";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTransaction from "./AddTransaction"; // Import the new component

const supabase = createClient(
  "https://diciycznnutwtqxwkuzq.supabase.co", // Your Supabase URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpY2l5Y3pubnV0d3RxeHdrdXpxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTI3NTc2NSwiZXhwIjoyMDQ0ODUxNzY1fQ.1MRYQI-0kOcvBNmJprVzq3OUKNL-bZBvGPv9ekWtioE" // Replace with your Supabase public key
);

function createData(
  id,
  company_id,
  amount,
  type,
  transaction_date,
  description
) {
  return {
    id,
    company_id,
    amount,
    type,
    transaction_date,
    description,
    history: [
      {
        date: transaction_date,
        amount: amount,
        description: description,
      },
    ],
  };
}

function Row({ row, onDelete }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon sx={{ color: "white" }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ color: "white" }}>
          {row.id}
        </TableCell>
        <TableCell sx={{ color: "white" }}>{row.company_id}</TableCell>
        <TableCell align="right" sx={{ color: "white" }}>
          {row.amount}
        </TableCell>
        <TableCell align="right" sx={{ color: "white" }}>
          {row.type}
        </TableCell>
        <TableCell align="right" sx={{ color: "white" }}>
          {row.transaction_date}
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="delete" onClick={() => onDelete(row.id)}>
            <DeleteIcon sx={{ color: "red" }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ color: "white" }}
              >
                Transaction Details
              </Typography>
              <Table size="small" aria-label="transaction history">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Date</TableCell>
                    <TableCell sx={{ color: "white" }}>Description</TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Amount
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {historyRow.date}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {historyRow.description}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {historyRow.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company_id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    transaction_date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function CollapsibleTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        // Replace with your RPC function name
        const { data, error: fetchError } = await supabase.rpc(
          "create_transaction"
        ); // Call your RPC function here

        if (fetchError) throw fetchError; // Handle RPC errors

        const formattedData = data.map((transaction) =>
          createData(
            transaction.id,
            transaction.company_id,
            transaction.amount,
            transaction.type,
            transaction.transaction_date,
            transaction.description
          )
        );

        setRows(formattedData);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
        setError("Failed to fetch transactions");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setRows((prevRows) => [
      ...prevRows,
      createData(
        newTransaction.id,
        newTransaction.company_id,
        newTransaction.amount,
        newTransaction.type,
        newTransaction.transaction_date,
        newTransaction.description
      ),
    ]);
  };

  const handleDeleteTransaction = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  return (
    <div className={styles.transactionContainer}>
      <h2 className={styles.transactiontH2}>Transactions</h2>
      <AddTransaction onAddTransaction={handleAddTransaction} />
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={styles.tableButtons}>
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "#111c44",
            width: "100%",
            margin: "3% auto",
            borderRadius: "15px",
          }}
        >
          <Table aria-label="collapsible table">
            <TableHead sx={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell />
                <TableCell sx={{ color: "white" }}>Transaction ID</TableCell>
                <TableCell sx={{ color: "white" }}>Company ID</TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Amount
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Type
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Transaction Date
                </TableCell>
                <TableCell align="right" sx={{ color: "white" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  onDelete={handleDeleteTransaction}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
