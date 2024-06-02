import React, { useEffect } from 'react';
import Button from './components/Button';
import ProdutoHook from './components/ProdutoHook';

const AppExercicio04 = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    if (response) {
      carregando
    }
    setDados(json);
    setCarregando(false);
  }

  return <section>
    <Button onClick={handleClick} texto={'notebook'} />
    <Button onClick={handleClick} texto={'smartphone'} />
    <Button onClick={handleClick} texto={'tablet'} />

    {carregando && <p>Carregando...</p>}
    {!carregando && dados && <ProdutoHook dados={dados} />}
  </section>;
};

export default AppExercicio04;