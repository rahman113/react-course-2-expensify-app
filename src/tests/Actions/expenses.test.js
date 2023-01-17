import {addExpense, editExpense, removeExpense} from '../../Actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({id:'123abshdg'})

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abshdg'
    });
});
 
test('should setup edit expense expense action object', () => {
    const action = editExpense("142146vhgwd",{description: 'Plumber'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'142146vhgwd',
        updates: {
            description: 'Plumber'
        }
    });
});        

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109656,
        createdAt: 1000,
        note: 'This was the last month rent'
    } 

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
test('should setup add expense action object with default values', () => {

    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});