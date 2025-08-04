import React from 'react'

const Login = () => {
  return (
    <div>
        <h2>Estoque Alta Saúde</h2>
        <form>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Digite o email' />
            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder='**********' />
            </div>
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default Login