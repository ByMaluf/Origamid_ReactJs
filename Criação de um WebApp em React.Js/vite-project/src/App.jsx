import React from 'react';
import Button from './components/Button';
import ProdutoHookUseEffect from './components/ProdutoHookUseEffect';

const App = () => {

  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  const [produto, setProduto] = React.useState(null);
  const [dados, setDados] = React.useState(null);


  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('Produto');
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if (produto != null)
      window.localStorage.setItem('Produto', produto)
  }, [produto]);

  React.useEffect(() => {
    async function fetchDados() {
      if (produto != null) {
        let response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const json = await response.json();
        setDados(json)
      }
    }
    fetchDados()
  }, [produto])

  async function handleClick({ target }) {
    setProduto(target.innerText);
    let produtoLocal = localStorage.getItem("Produto");
    console.log(produtoLocal)

  }

  return <section>
    <h1>Preferência: {produto}</h1>
    <Button onClick={handleClick} texto={'notebook'} />
    <Button onClick={handleClick} texto={'smartphone'} />
    {dados && <ProdutoHookUseEffect dados={dados} />}
  </section>;
};

export default App;