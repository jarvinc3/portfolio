import About from "../componentes/About";
import Works from "../componentes/Works";


export default function Main() {
  return (
    <div className="main flex flex-col items-center justify-center gap-10" >
      <hr />
      <About />
      <hr />
      <Works />
    </div>
  )
}
