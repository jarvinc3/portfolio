import "../../css/about.css"
import Skills from "./Skills"

export default function About() {
    return (
        <div id="about" className="flex flex-col justify-center gap-10">
            <div className="flex flex-col items-center md:flex-row nd:gap-8 gap-4 ">
                <div className="code-container float-animation">
                    <img className="md:w-36 w-28 mb-3 rounded-full shadow-lg" width={170} src="/img/yo.jpg" alt="" />
                </div>
                <section className="card flex flex-col items-center bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Something about me:</h5>
                        <p>I am a full stack web developer. I like to learn and i can learn very quickly, i am organized, I am fast solving problems. <br />
                        Friendly and cooperative.
                        </p>
                    </div>
                </section>
            </div>
            <Skills />
        </div>
    )
}
