import Arrow from "./componentes/Arrow";
import Header from "./contenedores/Header";
import Main from "./contenedores/Main";




const App = () => {


  return (
    <div className="p-4 pb-3 flex flex-col gap-10 md:gap-0">
      <Arrow />
      <Header />
      <Main />
    </div>
  );
};

export default App;
