import "../../css/cards.css"

export default function Cards() {
    return (
        <section className="flex flex-col gap-8 pb-5">
            <div className="cards flex flex-col md:flex-row items-center text-center md:text-right gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="https://scontent.fhex10-1.fna.fbcdn.net/v/t39.30808-6/386419488_3488590241412129_5933797524420217084_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeEYI4GGm3yzXaWCUo96KzrJFZT1zDU2hqAVlPXMNTaGoOWK-4Oo9HWgSmuGBf_klbYLb4TGfryhHLKx3Pg-GMZi&_nc_ohc=DUq09xTUAOwAX826cCD&_nc_ht=scontent.fhex10-1.fna&oh=00_AfAN6ajKWhMigl7eUkUHVeDALb3O-8RdMdQGvG_SVw0rVw&oe=652723FA" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 md:gap-14 pr-6">
                    <h2 className=" text-xl font-semibold" >Weather App</h2>
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

                        </div>
                        <div className="flex gap-3">
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                Next Js
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="next-js" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>

            <div className="cards flex flex-col items-center md:flex-row-reverse text-center md:text-left gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="/todo-app.png" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 md:gap-14">
                    <h2 className=" text-xl font-semibold" >Todo App</h2>
                    <div className="flex justify-center md:justify-start">
                        <a href="https://github.com/jarvinc3/todo-app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                        <a href="https://todo-app-jarvinc3.vercel.app/"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2 pl-1">
                        <div className="flex gap-3">
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                HTML5
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                            </h5>
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                CSS3
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                            </h5>

                        </div>
                        <div className="flex gap-3">
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                        </div>
                    </div>
                </section>
            </div>

            <div className="cards flex flex-col md:flex-row items-center text-center md:text-right gap-5 md:gap-[100px] bg-gradient-to-r from-yellow-100 via-transparent to-transparent border border-gray-200 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-900 dark:via-transparent dark:to-black px-4 dark:shadow-md dark:md:shadow-lg dark:lg:shadow-xl dark:xl:shadow-2xl shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
                <img className="max-w-[300px] md:max-w-[700px] rounded-lg" src="https://scontent.fhex10-1.fna.fbcdn.net/v/t39.30808-6/387810483_3488590214745465_8092718027605365195_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeHWOEfRvMP7a0pGFZW-FBLxCfpJRd9F7wwJ-klF30XvDCrUZ1a3iNve4JyQZ8-Zk9M77s4rMTJXAacnckArh6fm&_nc_ohc=CUGPXlnVMioAX-Z0qsV&_nc_ht=scontent.fhex10-1.fna&oh=00_AfCzT6ch0S87YfQBp9A9z8VIGgZB5OH-XpAzW_YCY52m7g&oe=6527A447" alt="App del clima" />
                <section className="flex flex-col justify-center gap-5 md:gap-14 pr-6">
                    <h2 className=" text-xl font-semibold" >User registrer</h2>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://github.com/jarvinc3/usuarios-registrer"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png" alt="github" /></a>
                        <a href="https://usuarios-registrer.vercel.app"><img width="40" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/external-link.png" alt="external-link" /></a>
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

                        </div>
                        <div className="flex gap-3">
                            <h5 className="text-xs flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                                javaScript
                                <img className="w-[16px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                            </h5>
                            <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
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
