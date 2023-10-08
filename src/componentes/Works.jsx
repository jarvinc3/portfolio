import Cards from "./Cards";
// import Other from "./Other";


export default function Works() {
  return (
    <div id="works" className=" pt-6 flex flex-col gap-10 justify-center items-center ">
      <section className="text-center">
        <h3>Some of my projects</h3>
        <h1 className=" md:text-7xl text-4xl font-semibold">My projects</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </section>
     
      <section className="">
        <Cards />
      </section>

      {/* <section>
        <Other/>
      </section> */}
    </div>
  )
}
