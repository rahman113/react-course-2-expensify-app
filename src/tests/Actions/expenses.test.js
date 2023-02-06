import { startAddExpense, addExpense, editExpense, removeExpense } from '../../Actions/expenses'

import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'



const createMockStore = configureMockStore([thunk])
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abshdg' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abshdg'
    });
});

test('should setup edit expense expense action object', () => {
    const action = editExpense("142146vhgwd", { description: 'Plumber' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '142146vhgwd',
        updates: {
            description: 'Plumber'
        }
    });
});

test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test("should add expense to database and sote", (done) => {
    const store = createMockStore({})
    const expnseData = {
        description: "Mouse",
        amount: 300,
        note: "This one is better",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expnseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expnseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expnseData)
        done();
    })
})
test("should add expense with default to  database and sote", (done) => {

    const store = createMockStore({})
    const expnseDefaults     = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expnseDefaults
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expnseDefaults)
        done();
    })

})
// test('should setup add expense action object with default values', () => {

//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });