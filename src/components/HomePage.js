import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function HomePage() {
  const expenses = useSelector((state) => state.expenseReducer);
  const income = useSelector((state) => state.incomeReducer);

  return (
    <div className="home-division">
      <div className="button-division">
        <Link to="/income">
          <button className="income-btn">Income</button>
        </Link>
        <Link to="/expense">
          <button className="expense-btn">Expense</button>
        </Link>
        <br />
      </div>

      <div className="display">
        <div className="display-expense">
          <h1>Expenses</h1>
          {expenses.map((item) => (
            <div className="expense-item">
              <p>{item.expenseDate}</p>
              <h3>
                {item.expenseType} ---- ₹{item.expenseAmount}{" "}
              </h3>
            </div>
          ))}
        </div>
        <div className="display-income">
          <h1>Income</h1>
          {income.map((item) => (
            <div className="income-item">
              <p>{item.incomeDate}</p>
              <h3>
                {item.incomeType} ---- ₹{item.incomeAmount}{" "}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
