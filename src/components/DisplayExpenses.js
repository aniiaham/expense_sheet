import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";

function DisplayExpenses(props) {
  const { expenses } = props;

  return (
    <div>
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
    </div>
  );
}
export default DisplayExpenses;
