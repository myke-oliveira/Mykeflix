import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
// import FormField from "../../../components/FormFields";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [values, setValues] = useState(valoresIniciais);
  const [lista, setLista] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form
        onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          setLista([...lista, values]);
          setValues(valoresIniciais);
        }}
      >
        <div>
          <label>Nome da Categoria:</label>
          <input
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cor:</label>
          <input
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </div>
        <button>Cadastrar</button>
      </form>
      <ul>
        {lista.map((value, indice) => (
          <li key={`${value.nome}${indice}`}>{value.nome}</li>
        ))}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
