import "../../css/about.css"
import Skills from "./Skills"

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center gap-4 md:flex-row nd:gap-8 ">
                <div className="code-container float-animation">
                    <img className="mb-3 rounded-full shadow-lg md:w-36 w-28" width={170} src="yo.png" alt="Jarvin" />
                </div>
                <section className="flex flex-col items-center px-4 pb-3 border border-gray-200 rounded-lg shadow-md hover:text-black cardi bg-gradient-to-r from-yellow-100 via-transparent to-transparent md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">Something about me:</h5>
                        <p>I am a full stack web developer. I like to learn and can learn very quickly, organized, fast solving problems, friendly and cooperative.
                        </p>
                    </div>
                </section>
            </div>
            <Skills />
        </div>
    ) 
}
