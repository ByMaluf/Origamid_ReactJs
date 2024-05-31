<div style="display: flex; justify-content: center;">
    <img src="./img/Reactjs.png" alt="Símbolo React" style="width: 150px; height: 150px;" />
</div>

<h2 style="text-align:center; color: yellow">Extensões Navegador</h2>

![React Developer Tools](./img/image.png)

<h2 style="text-align:center; color: yellow">Extensões Visual Studio Code</h2>

![Extensão 1](./img/image-1.png)
![Extensão 2](./img/image-2.png)
![Extensão 3](./img/image-3.png)
![Extensão 4](./img/image-4.png)

# Adicionando React ao meu arquivo HTML

[React Installation](https://react.dev/learn/installation)

## Código para adicionar React ao HTML

```html
<!-- Carrega o React, React Dom e Babel -->

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Não use isso em produção: -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React para Iniciantes</title>

    <!-- Carrega o React, React Dom e Babel -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Não use isso em produção: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>

  <body>
    <div id="app">App</div>
    <!-- Precisa indicar para o Babel que ele deve transpilar o código -->
    <script type="text/babel">
      // Cria um componente chamado App
      // O componente retorna JSX e por isso
      // o Babel irá transformar o mesmo
      function App() {
        return <div>Meu App</div>;
      }

      // Renderiza o componente App no elemento que tiver id = app
      ReactDOM.render(<App />, document.getElementById("app"));
    </script>
  </body>
</html>
```

## Anotações

<h3 style="color: #00BDEC">JSX</h3>

- Arquivos `JSX`: Eles não podem ser lidos pelo navegador. Você precisa de um transpilador para converter JSX para JavaScript.

<h3 style="color: #00BDEC">React Element</h3>

- Todo elemento React é criado com a função createElement. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React.

```javaScript
function App() {
  return <div id="container">Meu App</div>;
}
// É transformado em:
function App() {
  return React.createElement('div', { id: 'container' }, 'Meu App');
}
```

<img src="./img/image-5.png" alt="Transformação React" style="border: 1px dashed white"/>

<h3 style="color: #00BDEC">Componentes</h3>

- Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.

```javascript
// Function Component
const Button = () => {
  return <button>Comprar</button>;
};
```

- O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados.

```javascript
const Button = () => {
  return <button>Comprar</button>;
};

const MainNav = () => {
  return (
    <nav>
      <a href="#">Link 1</a>
      <Button />
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <MainNav />
      <Button />
    </div>
  );
};
```

- Utilizamos as {} para executar expressões de JavaScript e mostrar o resultado no DOM.

```javascript
const Produtos = () => {
  const produto1 = "Camisa";
  const produto2 = "Bermuda";

  return (
    <div>
      <button>
        Comprar {produto1} - R$ {Math.random()}
      </button>
      <button>
        Bermuda {produto2} - R$ {Math.random()}
      </button>
    </div>
  );
};
```

## Bundler

- Agrupa (bundle) o código do seu aplicativo

- Permite definirmos os componentes em diferentes arquivos para melhor organização

- Facilita a importação de código externo instalado via NPM

- `ESBuild (Recomendado)`, Rollup, Parcel, Turbopack, `Webpack() => Mais antigo e o mais lento. `

## Transpiler

- Transforma JSX return <div></div> em funções de React React.createElement()

- Transforma JavaScript novo const em JavaScript antigo var

- Babel, SWC, ESBuild

# Criação de um aplicativo React

### Vite

- Cria um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React.

- Na pasta que deseja instalar:

  ```javascript
   npm create vite@latest . (O ponto serve para indicar ao instalador para instalar os arquivos no atual diretório, se omitida ele vai pedir um nome para o diretório que vai criar com os arquivos.j)
   npm install
  ```

#### Comandos

- Inicia o desenvolvimento:
  `npm run dev`
- Cria a build final
  `npm run build`

<a href='https://vitejs.dev/'> Vite</a>

### Create React App

- É o mesmo princípio do Vite, mas é mais lento (usa webpack) e está gradativamente em desuso.

<a href='https://create-react-app.dev/'> Create React App</a>

## Modo Estrito

- Sem o modo estrito

```javascript
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

- Com o modo estrito

```javascript
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## JSX

- JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.

```javascript
const App = () => {
  return <button>Comprar</button>;
};
```

- É transformado em

```javascript
const App = () => {
  return React.createElement("button", null, "Comprar");
};
```

## Atributos - Casos Especiais

- O caso especial mais comum é o atributo class. Pelo fato de class ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className. Além dele existe o htmlFor.

```javascript
const App = () => {
  return <div className="grid">Origamid</div>;
};

const App = () => {
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
    </form>
  );
};
```

## CamelCase

- Atributos com nomes compostos devem ser utilizados como camelCase. Exemplo: autoplay vira autoPlay.

```javascript
const App = () => {
  return <video autoPlay />;
};
```

## Expressões/Variáveis

```javascript
const App = () => {
  const nome = "André";
  return <p>{nome}</p>;
};
```

```javascript
const App = () => {
  const ativo = true;
  return <p className={ativo ? "ativo" : "inativo"}>Estoque</p>;
};
```

- Também posso atribuir JSX direto a uma constante/variável

```javascript
const Titulo = <h1>Meu título</h1>;

const App = () => {
  return <div>{Titulo}</div>;
};
```

## Style (Estilo/Estilização)

- O style irá receber um objeto com as propriedades do elemento em camelCase.

```javascript
const App = () => {
  const estiloH1 = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica",
  };

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: "green" }}>Sempre aberta</p>
    </div>
  );
};
```

## JSX Arrays

- O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

```javascript
const App = () => {
  const produtos = ["Notebook", "Smartphone", "Tablet"];

  return <p>{produtos}</p>;
};
```

### Keys

- O JSX necessita de uma key única para cada elemento da Array.

```javascript
const App = () => {
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  return <ul>{empresas}</ul>;
};
```

- A probabilidade de usarmos um array dessa forma é praticamente nula. O jeito mais indicado seria da forma a seguir.

## Map

- É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.

```javascript
const App = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
```

## INFORMAÇÕES JAVASCRIPT

### A omissão de chaves nas arrow functions.

- Se você usa chaves {} em uma arrow function, ela é tratada como uma função de várias linhas, e você precisa explicitamente usar a palavra-chave return se deseja retornar algum valor. Se você pretende usar uma arrow function de uma linha, você pode omitir as chaves e o return, e o valor será retornado automaticamente.

### Exemplo - (As duas formas estão corretas)

```javascript
let totalGasto = dados.compras.map((item) => item.preco);
```

```javascript
let totalGasto = dados.compras.map((item) => {
  return item.preco;
});
```

### Funções de CallBack

- Uma função de callback em JavaScript é simplesmente uma função que é passada como um argumento para outra função. Isso permite que você especifique um comportamento personalizado que será executado quando uma determinada operação estiver concluída.

- Por exemplo, em métodos de array como map, filter, forEach, entre outros, uma função de callback é passada como argumento para especificar o que fazer com cada elemento do array. Essa função de callback é então executada para cada elemento do array, permitindo que você realize operações personalizadas em cada um deles.

- Um exemplo comum é o método map, que cria um novo array contendo os resultados de chamar uma função de callback em cada elemento do array original. Aqui está um exemplo de como você pode usar map com uma função de callback para dobrar cada número em um array:

```javascript
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((numero) => {
  return numero * 2;
});
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
```

### Funções de Ordem Superior e de Primeira Classe

- **_Funções de Ordem Superior_**: Em linguagens de programação, funções de ordem superior são aquelas que podem aceitar outras funções como argumentos e/ou retornar funções como resultados. Em JavaScript, isso é comum em funções como map, filter, reduce, forEach, entre outras, que recebem funções de callback como argumentos.

- **_Cidadãos de Primeira Classe_**: Em linguagens de programação, cidadãos de primeira classe referem-se a recursos que podem ser tratados como valores comuns. Em JavaScript, funções são cidadãos de primeira classe, o que significa que elas podem ser atribuídas a variáveis, passadas como argumentos para outras funções e retornadas como valores de outras funções. Isso permite uma grande flexibilidade na manipulação e utilização de funções em JavaScript.
