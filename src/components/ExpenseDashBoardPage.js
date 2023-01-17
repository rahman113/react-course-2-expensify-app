import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFiletrs from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
          <ExpenseListFiletrs />
          < ExpenseList />
    </div>
  
  );

  export default ExpenseDashBoardPage;