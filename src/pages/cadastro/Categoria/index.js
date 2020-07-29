import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCadastro() {
  return (
    <PageDefault>
      <h1>Pagina de Cadastro de Cadastro</h1>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCadastro;
