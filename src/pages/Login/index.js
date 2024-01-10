import React from "react";

export default function Login() {


    return (
        <div className='container'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Seu e-mail"/>
                <input type="password" placeholder="Sua senha"/>
                <button type='submit'>Entrar</button>
            </form>
        </div>

    );
}

