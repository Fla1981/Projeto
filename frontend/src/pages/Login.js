import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password: senha
            });

            console.log(response.data);

            // salva token
            localStorage.setItem("token", response.data.token);

            // vai para recados
            navigate("/recados");

        } catch (error) {
            console.log(error);
            alert("Erro ao fazer login");
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <br /><br />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
