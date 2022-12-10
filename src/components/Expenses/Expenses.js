import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../Expenses/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
  const { expenses } = props;

  return (
    <div>
      <ExpensesFilter ExpensesFilter={ExpensesFilter} />
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
