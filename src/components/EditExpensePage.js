import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../Actions/expenses';

const EditExpensePage = (props) => {
  console.log(props)
  return(
    <div>
          <ExpenseForm 
          expense = {props.expense}
          onSubmit = {(expense) => {
            props.dispatch(editExpense(props.expense.id, expense))
            // Dispatch the action to edit the response
            // Redirec to the dashboard
            props.history.push("/")
           
          }}
          
        />
        <button onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/")
      }}>Remove</button>
   </div>
  );
};
const mapStateToProps = (state,props) => {
     return {
       expense: state.expenses.find((expense) => expense.id === props.match.params.id)

     };
    }
  export default connect(mapStateToProps)(EditExpensePage);