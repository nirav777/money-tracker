import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Footer() {
  const income = useSelector((state) => state.incomeReducer);
  const expense = useSelector((state) => state.expenseReducer);
  const [incomeSum, setIncomeSum] = useState(0);
  const [expenseSum, setExpenseSum] = useState(0);

  useEffect(() => {
    if (income.length !== 0) {
      let sum = 0;
      for (let i = 0; i < income.length; i++) {
        sum = sum + income[i].incomeAmount;
      }
      setIncomeSum(sum);
    }
  }, [income.length]);

  useEffect(() => {
    if (expense.length !== 0) {
      let sum = 0;
      for (let i = 0; i < expense.length; i++) {
        sum = sum + expense[i].expenseAmount;
      }
      setExpenseSum(sum);
    }
  }, [expense.length]);

  return (
    <div className="footer">
      <div className="total-income-expense-division">
        <h2>Total Expense: ₹{expenseSum} </h2>
        <h2>Total Income: ₹{incomeSum} </h2>
      </div>
      <div className="total-profit-loss-division">
        <h2>Total Profit/Loss: ₹{incomeSum - expenseSum} </h2>
      </div>
    </div>
  );
}

export default Footer;
