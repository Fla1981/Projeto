function RecadoItem({ recado, onExcluir }) {

    return (

        <div>
            
            <h3>{recado.titulo}</h3>

            <p>{recado.texto}</p>

            <button onClick={() => onExcluir(recado.id)}>
                Excluir
            </button>

            <hr />

        </div>

    );

}

export default RecadoItem;