import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState("2021");

  const showFiteredData = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // conditional rendering option 3
  let expenseContent = <p>No expenses found!</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterSelect={showFiteredData}
      />
      {/* conditional rendering option 1 */}
      {/* {filteredExpenses.length === 0 ? <p>No expenses found</p> : filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* conditional rendering option 2 */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )) } */}

      {/* conditional rendering option 3 */}
      {expenseContent}
    </Card>
  );
};

export default Expenses;
