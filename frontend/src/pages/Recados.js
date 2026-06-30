import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import RecadoForm from "../components/RecadoForm";
import RecadoItem from "../components/RecadoItem";

function Recados() {

    const navigate = useNavigate();

    const [recados, setRecados] = useState([]);

    useEffect(() => {
        buscarRecados();
    }, []);

    async function buscarRecados() {

        try {

            const { data } = await api.get("/recados");

            setRecados(data);

        } catch (error) {

            console.log(error);

        }

    }

    async function criarRecado(campos) {

        try {

            const { data } = await api.post("/recados", campos);

            setRecados((lista) => [data, ...lista]);

        } catch (error) {

            console.log(error);

        }

    }

    async function excluirRecado(id) {

        if (!window.confirm("Deseja excluir este recado?")) {
            return;
        }

        try {

            await api.delete(`/recados/${id}`);

            setRecados((lista) =>
                lista.filter((recado) => recado.id !== id)
            );

        } catch (error) {

            console.log(error);

        }

    }

    function logout() {

        localStorage.removeItem("token");

        navigate("/login");

    }

    return (

        <div>

            <h1>Lista de Recados</h1>

            <button onClick={logout}>
                Sair
            </button>

            <hr />

            <RecadoForm onCriar={criarRecado} />

            <hr />

            {recados.map((recado) => (

                <RecadoItem
                    key={recado.id}
                    recado={recado}
                    onExcluir={excluirRecado}
                />

            ))}

        </div>

    );

}

export default Recados;