import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await api.post("/register", {
                name: nome,
                email: email,
                password: senha,
            });

            alert("Cadastro realizado com sucesso!");

            navigate("/login");

        } catch (error) {
            console.log(error);
            console.log(error.response);

            alert(JSON.stringify(error.response?.data));

            setErro(error.response?.data?.message || "Erro ao cadastrar usuário.");
        }

    }

    return (

        <div>

            <h1>Cadastro</h1>

            {erro && <p>{erro}</p>}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                <br /><br />

                <button type="submit">
                    Cadastrar
                </button>

            </form>

            <br />

            <p>
                Já possui conta?{" "}
                <Link to="/login">
                    Fazer Login
                </Link>
            </p>

        </div>

    );

}

export default Register;
