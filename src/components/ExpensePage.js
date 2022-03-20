import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addExpense } from "../redux/actions/expenseAction";

function ExpensePage() {
  const [expenseType, setExpenseType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const dispatch = useDispatch();

  let expenseData = {
    expenseType: expenseType,
    expenseAmount: expenseAmount,
    expenseDate: expenseDate,
    key: Math.random()*1000
  };

  return (
    <div className="expense-division">
    
      <Link to="/">
        <button className="back-to-home">Back to Home</button>
      </Link>

      <div className="expense-form">
        <p>Enter Expense Type:</p>
        <input
          value={expenseType}
          placeholder="..."
          onChange={(e) => setExpenseType(e.target.value)}
        />
        <p>Enter Amount</p>
        <input
          value={expenseAmount}
          placeholder="$$$"
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <p>Enter Date</p>
        <input
          value={expenseDate}
          placeholder="DD/MM/YYYY"
          onChange={(e) => setExpenseDate(e.target.value)}
        />
        <br />
        <button className="add-expense-btn"
          onClick={() => {
            dispatch(addExpense(expenseData));
            setExpenseType("");
            setExpenseAmount("");
            setExpenseDate("");
          }}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default ExpensePage;
