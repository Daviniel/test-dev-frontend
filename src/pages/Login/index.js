import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser as loginUserAction } from '../../actions/index';
import { Link } from 'react-router-dom';

import { Container } from './styles';

class Login extends Component {
    state = {
        buttonIsDisabled: true,
        email: '',
        password: '',
    }

    handleChange = (event) => {
        const { target } = event;
        const { value, name } = target;
    
        this.setState(
            {
                [name]: value,
            },
            () => {
                const { email, password } = this.state;
                const numMin = 6;
                if (
                    password.length >= numMin
                    && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
                ) {
                    this.setState({ buttonIsDisabled: false });
                } else {
                    this.setState({ buttonIsDisabled: true });
                }
            }
        );
    };

    render() {
        const { loginUser } = this.props;
        const { email, buttonIsDisabled, password } = this.state;
        return (
            <Container>          
                <div className="login-page">
                    <form className="form-login">
                        <h1>Login</h1>
                        <div className="form-login-input">
                            <input
                                type="text"
                                placeholder="Digite seu e-mail"
                                name="email"
                                data-testid="email-input"
                                onChange={ this.handleChange }
                                value={ email }
                            />
                        </div>
                        <label className="form-login-input" htmlFor='password'>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                name="password"
                                data-testid="passwords-input"
                                onChange={ this.handleChange }
                                value={ password }
                            />
                        </label>
                        <div className="button-form-login">
                            <Link to={'/carteira'}>
                                <button
                                    className="button-form-login"
                                    type="submit"
                                    disabled={ buttonIsDisabled }
                                    onClick={ () => loginUser(email) }
                                    style={{
                                        opacity: buttonIsDisabled ? 0.5 : 1,
                                        boxShadow: buttonIsDisabled ? 'none' : '0 10px 40px -12px #fff',
                                        cursor: buttonIsDisabled ? '' : 'pointer',
                                    }}
                                >
                                    Entrar
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </Container>
        );
    }
}

const mapDispatchProps = (dispatch) => ({
   loginUser: (email) => dispatch(loginUserAction(email)),
});
    
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,

};

export default connect(null, mapDispatchProps)(Login);
export const LOGIN_USER = 'LOGIN_USER';
