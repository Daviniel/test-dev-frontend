import React from "react";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const minPwdLength = 5;

    let REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    data-testid="email-input"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input 
                    type="password"
                    name="password"
                    id="password "
                    placeholder="Digite a sua senha"
                    data-testid="password-input"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <button
                    type="submit"
                    disabled={!REGEX_EMAIL.test(email) || password.length <= minPwdLength}
                >
                    Entrar
                </button>
            </form>
        </div>

    );
}

