import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../redux/actions/incomeAction";

function IncomePage() {

  const [incomeType, setIncomeType] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDate, setIncomeDate] = useState("");
  const dispatch = useDispatch();

  let incomeData = {
    incomeType: incomeType,
    incomeAmount: incomeAmount,
    incomeDate: incomeDate,
    key: Math.random()*1000
  };


  return (
    <div className="income-division">
      
      <Link to="/">
        <button className="back-to-home">Back to Home</button>
      </Link>
      <div className="income-form">
        <p>Enter Income Type:</p>
        <input
          value={incomeType}
          placeholder="..."
          onChange={(e) => setIncomeType(e.target.value)}
        />
        <p>Enter Amount</p>
        <input
          value={incomeAmount}
          type="number"
          placeholder="$$$"
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <p>Enter Date</p>
        <input
          value={incomeDate}
          placeholder="DD/MM/YYYY"
          onChange={(e) => setIncomeDate(e.target.value)}
        />
        <br />
        <button className="add-income-btn"
          onClick={() => {
            dispatch(addIncome(incomeData));
            setIncomeType("");
            setIncomeAmount("");
            setIncomeDate("");
          }}
        >
          Add Income
        </button>
      </div>
    </div>
  );
}

export default IncomePage;
