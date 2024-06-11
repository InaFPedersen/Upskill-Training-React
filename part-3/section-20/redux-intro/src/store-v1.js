// Here we write pure Redux code!!

import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      // if (state.loan > 0) return state;
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// // testing deposit
// store.dispatch({ type: 'account/deposit', payload: 500 });

// console.log('Hallo from store.js deposit functionality');
// console.log(store.getState());

// // testing withdraw
// store.dispatch({ type: 'account/withdraw', payload: 300 });

// console.log('Hallo from store.js withdraw functionality');
// console.log(store.getState());

// // testing request loan
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy a mini cooper car!' },
// });

// console.log('Hallo from store.js requestLoan functionality');
// console.log(store.getState());

// // testing pay loan
// store.dispatch({ type: 'account/payLoan' });

// console.log('Hallo from store.js payLoan functionality');
// console.log(store.getState());

function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: 'account/payLoan' };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy a cheap and solid car'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}

store.dispatch(createCustomer('Nora Nordmann', '01010101'));
console.log(store.getState());

store.dispatch(updateName('Nora Nordsjø'));
console.log(store.getState());
