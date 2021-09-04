import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    const deleteItem = (deleteId) => {
        props.deleteID(deleteId);
    }

    if (props.filtered.length === 0) {
        return <h2 className="expenses-list__fallback">No Expense Found </h2>
    }

    return (
        <ul className="expenses-list">
            {props.filtered.map(expense => <ExpenseItem
                key={expense.id}
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                getDeleteId={deleteItem}
            />)
            }
        </ul>
    );
};

export default ExpenseList;