import "../../css/about.css"
import Skills from "./Skills"

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center justify-center gap-10 h-screen">
            <div className="flex flex-col items-center md:flex-row nd:gap-8 gap-4 ">
                <div className="code-container float-animation">
                    <img className="md:w-36 w-28 mb-3 rounded-full shadow-lg" width={170} src="/img/yo.png" alt="Jarvin" />
                </div>
                <section className="cardi flex flex-col items-center pb-3 bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Something about me:</h5>
                        <p>I am a full stack web developer. I like to learn and can learn very quickly, organized, fast solving problems, friendly and cooperative.
                        </p>
                    </div>
                    <button className="cssbuttons-io-button md:right-[-5px] md:top-[50px]">
                        View more
                        <div className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    fill="currentColor"
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                />
                            </svg>
                        </div>
                    </button>
                </section>
            </div>
            <Skills />
        </div>
    ) 
}
