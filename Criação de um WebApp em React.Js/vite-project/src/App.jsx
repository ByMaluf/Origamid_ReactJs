import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

const App = () => {

  const { pathname } = window.location;
  return <section>
    <Header />
    {pathname === '/produtos' ? <Produtos /> : <Home />}
  </section>;
};

export default App;