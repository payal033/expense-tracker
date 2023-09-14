import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // using multiple states
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");

  // using only one state
  const [userInput, setUserInput] = useState({
    enteredtitle: "",
    amount: "",
    date: "",
  });

  // const titleChangeHandler = (event) => {
  //   // updating state that depends on prev state - better way - use function form
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredtitle: event.target.value };
  //   });
  // };

  // const amountHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredamount: event.target.value,
  //   });
  // };

  // const dateHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     entereddate: event.target.value,
  //   });
  // };

  // shared handler function instead of multiple handler functions
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setTitle(value);
    } else if (identifier === "date") {
      setDate(value);
    } else {
      setAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredamount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={entereddate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
