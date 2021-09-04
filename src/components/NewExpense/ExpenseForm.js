import React from 'react';
import './ExpenseForm.css';
import { useState, useRef } from 'react';

const ExpenseForm = (props) => {

    const inputTitle = useRef();
    const [amount, setAmount] = useState(" ");
    const [date, setDate] = useState(" ");

    const changeAmount = (event) => {
        setAmount(event.target.value);
    };
    const changeDate = (event) => {
        setDate(event.target.value);
    };

    const submitHandler= (event) =>{
        event.preventDefault();
        console.log(inputTitle);

        const expenseData={
            title: inputTitle.current.value,
            amount: amount,
            date: new Date(date)
        };

        props.onFormSubmit(expenseData);
        props.cancelButtonHandler();
        
    };

    return (
        <div>
            <form onSubmit={submitHandler} className="expense-form-container">
                <div className="expense-form__controls new-expense__controls">
                    <div className="new-expense__control expense-form__text">
                        <label>Text</label>
                        <input type="text" ref={inputTitle} />
                    </div>
                    <div className="new-expense__control expense-form__text">
                        <label>Amount</label>
                        <input type="number" onChange={changeAmount} />
                    </div>
                    <div className=" new-expense__control expense-form__text">
                        <label>Date</label>
                        <input type="date" onChange={changeDate} />
                    </div>
                </div>
                <div className="new-expense__actions expense-form__submit">
                    <button type="button" onClick={props.cancelButtonHandler}>Cancel</button>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;