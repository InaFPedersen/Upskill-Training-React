const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

export default function accountReducer(state = initialStateAccount, action) {
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

export function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}

/// TO TEST THE FUNCTIONALITY!!!! ///
// store.dispatch({ type: 'account/deposit', payload: 500 });

// console.log('Hallo from store.js deposit functionality');
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 300 });

// console.log('Hallo from store.js withdraw functionality');
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy a mini cooper car!' },
// });

// console.log('Hallo from store.js requestLoan functionality');
// console.log(store.getState());

// store.dispatch({ type: 'account/payLoan' });

// console.log('Hallo from store.js payLoan functionality');
// console.log(store.getState());

// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(1000, 'Buy a cheap and solid car'));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());
