import Cards from "./Cards";


export default function Works() {
  return (
    <div id="works" className="h-screen flex flex-col gap-5 justify-center items-center">
      <section className="text-center">
        <h3>Algunos de mis proyectos</h3>
        <h1 className=" md:text-7xl">Mis proyectos</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </section>
     
      <section>
        <Cards />
      </section>
    </div>
  )
}
