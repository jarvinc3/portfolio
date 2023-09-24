import "../../css/cards.css"

export default function Cards() {
    return (
        <div className="cards flex flex-col md:flex-row items-center text-center md:text-right">
            <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="/img/app-clima.png" alt="App del clima" />
            <section className="flex flex-col justify-center gap-5">
                <h2>Weather App</h2>
                {/* <div className="md:absolute ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut assumenda neque sequi. Eos et repellendus dignissimos consectetur atque in neque.</p>
                </div> */}
                <div className="flex justify-center md:justify-end">
                    <a href="https://github.com/jarvinc3/AppDelClima"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                    <a href="https://app-del-clima-alpha.vercel.app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 pl-1">
                    <div className="flex gap-3">
                        <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                            HTML5
                            <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                        </h5>
                        <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                            CSS3
                            <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                        </h5>
                        <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                            javaScript
                            <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                        </h5>
                    </div>
                    <div className="flex gap-3">
                        <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                            REACT
                            <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                        </h5>
                    </div>
                </div>
            </section>
        </div>

    )
}
