import Arrow from "./componentes/Arrow";
import Header from "./contenedores/Header";
import Main from "./contenedores/Main";
import Footer from "./contenedores/Footer"
// import { useEffect, useState } from "react";


const App = () => {
  // const [theme, setTheme] = useState(() =>{
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     return "dark";
  //   }
  //   return "light";
  // })

  // useEffect(() => {
  //   if (theme == "dark") {
  //     document.querySelector('html').classList.add('dark')
  //   } else {
  //     document.querySelector('html').classList.remove('dark')
  //   }
  // }, [theme])

  // const handleChangeTheme = () => {
  //   setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  // }

  return (
    <div className="p-4 pb-3 flex flex-col gap-10 md:gap-0">
      {/* <button onClick={handleChangeTheme} className="absolute right-3 top-2">
        <img width="40" height="40" src="https://img.icons8.com/dotty/80/day-and-night.png" alt="day-and-night" />
      </button> */}
      <Arrow />
      <Header />
      <Main />
      <Footer/>
    </div>
  );
};

export default App;
