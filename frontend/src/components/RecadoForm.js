import { useState } from "react";

function RecadoForm({ onCriar }) {

    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        onCriar({
            titulo,
            texto,
        });

        setTitulo("");
        setTexto("");

    }

    return (

        <form onSubmit={handleSubmit}>

            <h2>Novo Recado</h2>

            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />

            <br /><br />

            <textarea
                placeholder="Texto do recado"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                required
            />

            <br /><br />

            <button type="submit">
                Salvar
            </button>

        </form>

    );

}

export default RecadoForm;