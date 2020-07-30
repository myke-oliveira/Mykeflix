import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCadastro() {
  return (
    <PageDefault>
      <h1>Cadastro de Cadastro</h1>

      <form>
        Nome da Categoria:
        <input type="text"/>
        <button>
          Cadastrar
        </button>
      </form>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCadastro;
