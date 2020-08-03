import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Menu/components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [lista, setLista] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }

  useEffect(async () => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://mykeflix.herokuapp.com/categorias';
    const response = await fetch(URL);
    const categorias = await response.json();
    setLista(categorias);
  }, []);

  async function createCategoria(categoria) {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://mykeflix.herokuapp.com/categorias';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const jsondata = JSON.stringify(categoria);
    console.log(jsondata);
    const response = await fetch(
      URL,
      {
        method: 'PUT',
        headers,
        mode: 'cors',
        cache: 'default',
        body: jsondata,
      },
    );
    if (response.status !== 200) {
      return false;
    }
    const data = await response.json();
    console.log('(data)', data);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        onSubmit={(infosDoEvento) => {
          infosDoEvento.preventDefault();
          console.log(values);
          createCategoria(values);
          setLista([...lista, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
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
