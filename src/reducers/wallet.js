import {
  SEND_FORM,
  REQUEST_API,
  GET_COINS,
} from '../actions/index'

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_FORM:
      return {
        ...state,
        expenses: [...state.expenses, action.state],
      };
    case REQUEST_API:
      return { ...state, isLoading: true} ;
    case GET_COINS:
      return { ...state,
        currencies: action.payload,
      isLoading: false };
    // ... outros casos aqui ...

    default:
      return state;
  }
};

export default wallet;
