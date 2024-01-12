export const LOGIN_USER = 'LOGIN_USER';

// --- ENVIA E-MAIL AO HEADER---

export const loginUser = (email) => {
    return {
      type: LOGIN_USER,
      email,
    };
};

// ---ATUALIZA AS DESPESAS NO ESTADO GLOBAL---

export const SEND_FORM = (state) => ({
    type: 'SEND_FORM',
    state,
});