import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Printer',
    amount: 114.12,
    date: new Date(2019, 8, 14),
  },
];

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses)

  //setting new expense which we got from expense form
  const getNewExpense = (newExpense) => {
    setExpenses((prevExpenses => { return [newExpense, ...prevExpenses] }));
  }

  const deleteExpense = (expenseID) => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== expenseID);
    });
  }

  return (
    <div>
      <NewExpense onNewExpense={getNewExpense} ></NewExpense>
      <Expenses item={expenses} delete={deleteExpense} />
    </div>
  );
}

export default App;


// https://www.linkedin.com/learning/react-js-building-an-interface-8551484/why-react-is-so-important?u=2154233


// https://www.linkedin.com/learning/learning-react-native/using-a-touchable-highlight?u=2154233