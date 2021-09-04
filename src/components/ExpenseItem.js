import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseItem=(props) =>{

  //useState is a hook- hook starts with 'use'
  //useState returns array with two values
  //used array destructuring
  //const [value, setValue]

  const deleteItem = () => {
    const deleteID = props.id;
    props.getDeleteId(deleteID);
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <CloseButton className="close-button" variant="white" onClick={deleteItem} />
      </div>
    </div>
  );
}

export default ExpenseItem;
