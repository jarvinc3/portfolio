import "../../css/cards.css"

export default function Cards() {
    return (
        <section className="flex flex-col gap-8 pb-5">
            <div className="hover:text-black cards flex flex-col md:flex-row items-center text-center md:text-right gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="app-clima.png" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 pr-6 md:gap-14">
                    <h2 className="text-xl font-semibold " >Weather App</h2>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://github.com/jarvinc3/AppDelClima"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                        <a href="https://app-del-clima-alpha.vercel.app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
                    </div>
                    <div className="flex flex-col items-center gap-2 pl-1 md:items-end">
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                HTML5
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                CSS3
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                            </h5>

                        </div>
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                Next Js
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="next-js" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>

            <div className="hover:text-black cards flex flex-col items-center md:flex-row-reverse text-center md:text-left gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="/eshop-app.png" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 md:gap-14">
                    <h2 className="text-xl font-semibold transition duration-500 " >Online Shop</h2>
                    <div className="flex justify-center md:justify-start">
                        <a href="https://github.com/jarvinc3/melon-shop"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                        <a href="https://melon-shop.vercel.app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
                    </div>
                    <div className="flex flex-col items-center gap-2 pl-1 md:items-start">
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                HTML5
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                CSS3
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                TailwindCSS
                                <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss" />
                            </h5>
                        </div>
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                REACT
                                <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>

            <div className="hover:text-black cards flex flex-col md:flex-row items-center text-center md:text-right gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="/user-registrer.png" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 pr-6 md:gap-14">
                    <h2 className="text-xl font-semibold " >User registrer</h2>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://github.com/jarvinc3/usuarios-registrer"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                        <a href="https://usuarios-registrer.vercel.app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
                    </div>
                    <div className="flex flex-col items-center gap-2 pl-1 md:items-end">
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                HTML5
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                CSS3
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                            </h5>

                        </div>
                        <div className="flex gap-3">
                            <h5 className="flex items-center px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                            <h5 className="flex items-center px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-900 text-slate-950 dark:text-slate-50">
                                REACT
                                <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}
