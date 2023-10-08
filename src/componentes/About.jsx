import "../../css/about.css"
import Skills from "./Skills"

export default function About() {
    return (
        <div id="about" className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center md:flex-row nd:gap-8 gap-4 ">
                <div className="code-container float-animation">
                    <img className="md:w-36 w-28 mb-3 rounded-full shadow-lg" width={170} src="https://scontent.fhex10-1.fna.fbcdn.net/v/t39.30808-6/350497799_1232602794116819_9172894670090979473_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeEUCFkGJDEOFpsfDMrrFft89R0C2U4PLqL1HQLZTg8uosKKfwQ6zIpAf4dL0wXizyUrFc3FxIp6n9tL9rLmOZkr&_nc_ohc=HCXIh0asTEoAX9yF9nq&_nc_ht=scontent.fhex10-1.fna&oh=00_AfCZaOClBdC_VSQJwTDErKZFMXARW4CHJ12-wLZvETrfTg&oe=65274994" alt="Jarvin" />
                </div>
                <section className="cardi flex flex-col items-center pb-3 bg-gradient-to-r from-yellow-100 via-transparent to-transparent 
                    border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-800
                    dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 
                    dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Something about me:</h5>
                        <p>I am a full stack web developer. I like to learn and can learn very quickly, organized, fast solving problems, friendly and cooperative.
                        </p>
                    </div>
                </section>
            </div>
            <Skills />
        </div>
    ) 
}
