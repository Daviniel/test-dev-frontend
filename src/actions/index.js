export const LOGIN_USER = 'LOGIN_USER';
export const SEND_FORM = 'SEND_FORM';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';
const API = 'https://economia.awesomeapi.com.br/json/all';


// --- ENVIA E-MAIL AO HEADER---

export const loginUser = (email) => {
    return {
      type: LOGIN_USER,
      email,
    };
};

// ---ATUALIZA AS DESPESAS NO ESTADO GLOBAL---

export const sendForm = (state) => ({
    type: 'SEND_FORM',
    state,
});

// ---- EXCLUI A DESPESA ------
export const buttonDelete = (state) => ({
  type: 'BUTTON_DELETE',
  payload: state,
});

// ----REQUISIÇÃO API----

const requestApi = () => ({
  type: 'REQUEST_API',
});

const getCoins = (json) => ({
  type: 'GET_COINS',
  payload: Object.keys(json),
});

export function fetchCoin() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(API)
      .then((response) => response.json())
      .then((json) => dispatch(getCoins(json)))
  }
}