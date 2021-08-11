import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expenseButtonClicked, setExpenseButtonClicked] = useState(false);

  const handleButtonClicked = () => {
    setExpenseButtonClicked((prevState) => !prevState);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseHandler(expenseData);
    // setExpenseButtonClicked((prevState) => !prevState);
    handleButtonClicked();
  };

  // if (expenseButtonClicked === false) {
  //   return (
  //     <div className="new-expense">
  //       <button onClick={handleButtonClicked}>Add New Expense</button>
  //     </div>
  //   );
  // }

  return (
    <div className="new-expense">
      {!expenseButtonClicked && (
        <button onClick={handleButtonClicked}>Add New Expense</button>
      )}
      {expenseButtonClicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={handleButtonClicked}
        />
      )}
    </div>
  );
};

export default NewExpense;
