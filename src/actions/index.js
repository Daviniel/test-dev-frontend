export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (email) => {
    return {
      type: LOGIN_USER,
      email,
    };
  };