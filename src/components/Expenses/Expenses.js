import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const {expenses} = props; 
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Card>
        {expenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={index}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
