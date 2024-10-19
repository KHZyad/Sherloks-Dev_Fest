// AddTransaction.js
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const AddTransaction = ({ onAddTransaction }) => {
  const [companyId, setCompanyId] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      company_id: companyId,
      amount: parseFloat(amount),
      type,
      transaction_date: transactionDate,
      description,
    };

    onAddTransaction(newTransaction); // Call the parent function to add the transaction

    // Clear the form fields
    setCompanyId("");
    setAmount("");
    setType("");
    setTransactionDate("");
    setDescription("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField
        label="Company ID"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
        required
        sx={{ marginRight: 1 }}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        sx={{ marginRight: 1 }}
      />
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
        sx={{ marginRight: 1 }}
      />
      <TextField
        label="Transaction Date"
        type="date"
        value={transactionDate}
        onChange={(e) => setTransactionDate(e.target.value)}
        required
        sx={{ marginRight: 1 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        sx={{ marginRight: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Transaction
      </Button>
    </Box>
  );
};

AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default AddTransaction;
