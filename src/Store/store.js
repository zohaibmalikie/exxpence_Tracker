import {createStore, combineReducers} from 'redux';


let initialData = []

function transactionData(state = initialData, newData) {
  state = [...state]
  if (newData.type === 'Transaction_Data') {
    state.push(newData.payload)
  }
  return state
}

let reducer = combineReducers({ transactionData })
let store = createStore(reducer)

export default store