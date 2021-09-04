import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

    const [isformvisible, setFormVisible] = useState(false);

    const formVisibleHandler= () => {
        setFormVisible(true);
    }

    const cancelForm = () =>
    {
        setFormVisible(false)
    }

    const saveFormData = (newExpenseData) =>{
        const expenseData ={
            id: Math.random().toString(),
            ...newExpenseData
        };
        props.onNewExpense(expenseData);
    }

return (
    <div className="new-expense">
        {!isformvisible && <button onClick={formVisibleHandler}>Add Expense</button>}
        {isformvisible && <ExpenseForm cancelButtonHandler={cancelForm} onFormSubmit={saveFormData}></ExpenseForm>}
    </div>
)
};

export default NewExpense;