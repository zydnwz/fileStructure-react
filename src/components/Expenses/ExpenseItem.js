import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseLocation from './ExpenseLocation';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">Amount: ${props.amount}</div>
      </div>
      <ExpenseDate date={props.date} />
      <ExpenseLocation location={props.location} />
    </div>
  );
}

export default ExpenseItem;
