import { combineReducers, createStore } from 'redux';
import uuid from "uuid";
//STEP :2
const expenceReducerDefaultValue = [];
// const store = createStore((state = { expenceReducerDefaultValue: [] }, action) => {
const ExpenseReducer = ((state = expenceReducerDefaultValue, action) => {
    switch (action.type) {
        case 'ADD-EXPENCE':
            return [...state, action.expences]
            break;
        case 'REMOVE-EXPENCE':
            if (action.id) {
                return state.filter((id) => id.id !== action.id)
            }
            break;
        case 'UPDATE-EXPENCE':
            if (action.id) {
                const updateData = state.filter((id) => id.id == action.id);
                const updateArray = updateData.map(a => {
                    if (a.id = action.expence.id) {
                        a.description = action.expence.description;
                        a.note = action.expence.note;
                    }
                    return a;
                });
                return updateArray
            }
            break;
        case 'EDIT-EXPENCE':
            return state.map((expence) => {
                if (expence.id === action.id) {
                    //1.one way
                    // expence.description = action.description,
                    //     expence.note = action.note
                    return {
                        //2.two way
                        ...expence, description: action.description, note: action.note
                    };
                } else {
                    return expence;
                }
            })
        default:
            return state
            break;
    }
})

const filtersReducerDefaultValue = {
    text: '',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
}
const filtersReducers = (state = filtersReducerDefaultValue, action) => {
    switch (action.type) {
        case 'SET-TEXT-FILTER':
            return { ...state, text: action.text }
            break;
        case 'SET-SORT-BY-DATE':
            return { ...state, sortBy: 'date' }
            break;
        case 'SET-SORT-BY-AMOUNT':
            return { ...state, sortBy: 'amount' }
            break;
        case 'START-DATE':
            return { ...state, startDate: action.date }
            break;
        case 'END-DATE':
            return { ...state, endDate: action.date }
            break;

        default:
            return state
            break;
    }
}
const store = createStore(combineReducers({
    exp: ExpenseReducer,
    filt: filtersReducers
}))
const getVisibleExpense = (expence, { text, sortBy, endDate, startDate }) => {
    return expence.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expence.createdAt >= startDate;
        const textMatch = expence.some((name) => {
            name.description === text
            return name
        })
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}
store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.exp, state.filt);
    console.log(visibleExpense)
})


const AddExpense = ({ description = '', note = '', createdAt = '' } = {}) => {
    return {
        type: 'ADD-EXPENCE',
        expences: {
            id: uuid.v4(),
            description: description,
            note: note,
            createdAt: createdAt
        }
    }
}
const removeExpence = ({ id }) => {
    return {
        type: 'REMOVE-EXPENCE',
        id: id,

    }
}
const editExpence = (id = '', { description = '', note = '' } = {}) => {
    return {
        type: 'EDIT-EXPENCE',
        id: id,
        description: description,
        note: note
    }
}

const setTextFilter = (text) => {  // ulilulla object ne edit cheyyunnnath..
    return {
        type: 'SET-TEXT-FILTER',
        text

    }
}
const setSortByDate = () => {
    return {
        type: 'SET-SORT-BY-DATE'
    }
}

const setSortByAmount = () => {
    return {
        type: 'SET-SORT-BY-AMOUNT'
    }
}
const setStartDate = (date) => {
    return {
        type: 'START-DATE',
        date: date
    }
}
const setEndDate = (date) => {
    return {
        type: 'END-DATE',
        date
    }
}
//ADD-EXPENCE
const AddExpencestore = store.dispatch(AddExpense({ description: 'Januvary rent', createdAt: -11000 }))

const AddExpencestore2 = store.dispatch(AddExpense({ description: 'februvary rent', note: "im crying", createdAt: -1000 }))
// const AddExpencestore3 = store.dispatch(AddExpense({ description: 'march rent', note: "Allahhh..help meeee" }))

// REMOVE-EXPENCE
// store.dispatch(removeExpence({ id: AddExpencestore.expences.id }))

//EDIT-EXPENCE 
// store.dispatch(editExpence(AddExpencestore2.expences.id, { description: 'december rent', note: 'plsss help me' }))

// SET-TEXT-FILTER
// store.dispatch(setTextFilter('februvar?y rent'))

//SET-SORT-BY-DATE
store.dispatch(setSortByDate())
//SET-SORT-BY-AMOUNT
store.dispatch(setSortByAmount())
//START-DATE
// store.dispatch(setStartDate(120))
//END-DATE
// store.dispatch(setEndDate(100))
// console.log(store.getState())
//STEP :3
// store.subscribe(() => {
//     console.log(store.getState())
// })

// // STEP :1 
// store.dispatch({
//     type: 'ADD-EXPENCE',
//     expences: {
//         id: uuid.v4(),
//         description: 'januvary rent',
//         note: 'final rent'
//     }
// })

// store.dispatch({
//     type: 'ADD-EXPENCE',
//     expences: {
//         id: uuid.v4(),
//         description: 'Februvary rent',
//         note: 'Februvary final'
//     }
// })

// store.dispatch({
//     type: 'REMOVE-EXPENCE',
//     id: store.getState().map((id) => (id.id))[0]
// })

// store.dispatch({
//     type: 'ADD-EXPENCE',
//     expences: {
//         id: uuid.v4(),
//         description: 'April rent',
//         note: 'April final'
//     }
// })

// store.dispatch({
//     type: 'UPDATE-EXPENCE',
//     id: store.getState().map((id) => (id.id))[0],
//     expence: {
//         id: uuid.v4(),
//         description: 'March rent',
//         note: 'last and final'
//     }
// })