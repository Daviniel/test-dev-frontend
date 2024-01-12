import { SEND_FORM } from '../actions/index';

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
    // ... outros casos aqui ...

    default:
      return state;
  }
};

export default wallet;
