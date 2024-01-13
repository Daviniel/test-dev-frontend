export const LOGIN_USER = 'LOGIN_USER';
export const SEND_FORM = 'SEND_FORM';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';
export const FAILED_COINS = 'FAILED_COINS';
export const BUTTON_DELETE = 'BUTTON_DELETE';
const API = 'https://economia.awesomeapi.com.br/json/all';


// --- ENVIA E-MAIL AO HEADER---

export const loginUser = (email) => {
    return {
      type: LOGIN_USER,
      email,
    };
};

// ---- EXCLUI A DESPESA ------
export const buttonDelete = (id) => ({
  type: BUTTON_DELETE,
  payload: id,
});

// ---ATUALIZA AS DESPESAS NO ESTADO GLOBAL---
export const sendForm = (state, editMode = false) => ({
  type: SEND_FORM,
  state,
  editMode,
});

// ---- REQUISIÇÃO API ----
const requestApi = () => ({
  type: REQUEST_API,
});

const getCoins = (json) => ({
  type: GET_COINS,
  payload: Object.keys(json),
});

const failedRequest = (error) => ({
  type: FAILED_COINS,
  payload: error,
});

export function fetchCoin() {
  return (dispatch) => {
    dispatch(requestApi());
    return fetch(API)
      .then((response) => response.json())
      .then((json) => dispatch(getCoins(json)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}