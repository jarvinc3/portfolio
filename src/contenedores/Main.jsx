import About from "../componentes/About";
import Works from "../componentes/Works";


export default function Main() {
  return (
    <div className="main flex flex-col items-center justify-center gap-10 md:gap-28 mb-8" >
      <About />
      <Works />
    </div>
  )
}
