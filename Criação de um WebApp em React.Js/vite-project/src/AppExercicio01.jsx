// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const AppExercicio01 = () => {
  const dados = luana;

  let totalGasto = dados.compras.map((item) => +item.preco.replace('R$ ', '')).reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0)

  return <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação:{' '}
      <span style={{ color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
    </p>
    <p>Total gasto: R$ {totalGasto.toFixed(2)}</p>
    {totalGasto > 10000 && <p>Você está gastando muito.</p>}
  </div>;
};

export default AppExercicio01;

