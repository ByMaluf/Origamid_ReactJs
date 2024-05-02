<center>
<img src="./img/Reactjs.png" alt="Símbolo React" style="width: 150px; height: 150px; margin: 0 auto; display: flex;" />
</center>

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
