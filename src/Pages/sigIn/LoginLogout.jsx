import React from "react"
import Button from "../../components/Button"

const LoginLogout = () => {
    return (
        <div>

            <form action="">
                <h1>Entrar</h1>
                <h3>Digite seu e-mail e senha</h3>
                <input type="text" />
                <input type="text" />
                <div>
                    <a href="/">Esqueci minha senha</a>
                    <h5>Não tem uma conta? <Button>Crie agora</Button></h5>
                </div>
                <Button>Entrar</Button>
            </form>

            <form action="" className="">
                <h1>Cadastre-se</h1>
                <h3>Digite seus dados</h3>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <Button>Crie sua conta</Button>
            </form>

        </div>
    )
}

export default LoginLogout