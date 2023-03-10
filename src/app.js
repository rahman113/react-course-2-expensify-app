
import React from 'react';
 import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'

const store = configureStore()
console.log("testing store");
// store.dispatch(addExpense({ description: 'Water bill', amount:4500}));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Rent', amount:109500}));

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
    < AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
 
// class oldSyntax {
//   constructor(){
//     this.name = 'Andrew Joseph Mead'
//     this.getGreeting = this.getGreeting.bind(this)
//   }
//   getGreeting(){
//     return `Hii. I am ${this.name} Welcome philadephia New York`
//   }
  
// }

// const object = new oldSyntax()
// const getGreeting = object.getGreeting;
// console.log(getGreeting())

// class newSyntax {
// name = 'Ataur Rahman'
//  getGreeting = () => {
//   return `Hii. I am ${this.name} Welcome to CapeTown Newzeland`
//  }
// }

// const newSyntaxObj = new newSyntax()
// const newSyntaxOb = newSyntaxObj.getGreeting;
// console.log(newSyntaxOb())