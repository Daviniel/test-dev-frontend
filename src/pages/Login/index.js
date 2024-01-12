import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendEmail } from '../../actions/index';
import { Link } from 'react-router-dom';

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
                const { email, password } = this.state
                const numMin = 6;
                if (
                    password.length >= numMin
                    && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
                ) {
                    this.setState({ buttonIsDisabled: false });
                } else {
                    this.setState({ buttonIsDisabled: true });
                }
            },
        );
    };

    
    handleClick = () => {
        const { email } = this.state;
        const { dispatch } = this.props;
        dispatch(sendEmail(email));
    }
    

    render() {
        const { email, buttonIsDisabled, password } = this.state;
        return (
            <div className="login-page">
                <form className="form-login">
                    <h1>Login</h1>
                    <div className="form-login-email-input">
                        <input
                            className="input100"
                            type="text"
                            placeholder="Digite seu e-mail"
                            name="email"
                            data-testid="email-input"
                            onChange={ this.handleChange }
                            value={ email }
                        />
                    </div>
                    <label className="form-login-password-input" htmlFor='password'>
                        <input
                            className="input100"
                            type="password"
                            placeholder="Digite sua senha"
                            name="password"
                            data-testid="passwords-input"
                            onChange={ this.handleChange }
                            value={ password }
                        />
                    </label>
                    <div className="form-login-button">
                        <Link to={'/carteira'}>
                            <button
                                className="button-form-login"
                                type="submit"
                                disabled={ buttonIsDisabled }
                                onClick={ this.handleChange }
                            >
                                Entrar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}
    
Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
};

export default connect()(Login);