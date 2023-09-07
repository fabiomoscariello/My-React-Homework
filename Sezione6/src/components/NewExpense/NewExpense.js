import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isInserting, setIsInserting] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsInserting(false)
  };
  const insertHandler = () => {
    setIsInserting(true);
  }
  const cancelHandler = () => {
    setIsInserting(false);
  }
  return (
    <div className='new-expense'>
      {!isInserting && <button onClick={insertHandler}>Add New Expense</button>}{
        isInserting &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler} />
      }
    </div>
  );
};

export default NewExpense;
