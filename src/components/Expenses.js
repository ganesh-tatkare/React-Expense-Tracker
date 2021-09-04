import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

  const deleteItem = (deleteId) => {
    props.delete(deleteId);
  }

  const [select, setSelect] = useState("2021");

  const getSeletctedYear = (selected) => {
    setSelect(selected);
  };

  const filteredYear = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === select
  });

  return (
    <div className="whole-container" >
      <ExpensesFilter iniSelected={select} onSelect={getSeletctedYear} />
      {/* part after && is rendered when first part is true */}
      {/* { filtredYear.length === 0 && <p>No Expenses Found</p> } */}
      <ExpenseChart filtered={filteredYear} ></ExpenseChart>
      <ExpenseList filtered={filteredYear} deleteID={deleteItem} />
    </div>
  );
}

export default Expenses;