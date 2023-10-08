

export default function Skills() {
    return (
        <section className="md:flex md:flex-row md:gap-10 md:justify-around flex flex-col gap-7">
            <div className="cardsk flex flex-col gap-3 items-center justify-center">
                <img width="64" height="64" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/code--v2.png" alt="code--v2" />
                <h2 className="text-3xl font-semibold">Front-end</h2>
                <div className="flex gap-3">
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        HTML5
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" />
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        CSS3
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3" />
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        TailwindCSS
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss" />
                    </h5>
                </div>
                <div className="flex gap-3">
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        javaScript
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1" />
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        REACT
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native" />
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        NextJS
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/>
                    </h5>
                </div>
                <div className="flex gap-3">
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        Bootstrap5
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="bootstrap"/>
                    </h5>
                </div>
            </div>

            <div className="cardsk flex flex-col gap-3 items-center justify-center pb-5 md:pb-0">
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/database.png" alt="database"/>
                <h2 className="text-3xl font-semibold">Back-end</h2>
                <div className="flex gap-3">
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        PHP
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/parakeet/48/php.png" alt="php"/>
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        Laravel
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/fluency/48/laravel.png" alt="laravel"/>
                    </h5>
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        SQL
                        <img className="w-[20px]" width="48" height="48" src="https://img.icons8.com/color/48/sql.png" alt="sql"/>
                    </h5>
                </div>
                <div className="flex gap-3">
                    <h5 className="flex items-center bg-slate-200 dark:bg-slate-900 py-1 px-2 rounded-md text-slate-950 dark:text-slate-50">
                        MySQL
                        <img className="w-[20px]" width="24" height="24" src="https://img.icons8.com/material-two-tone/24/mysql-logo.png" alt="mysql-logo"/>
                    </h5>
                    
                </div>
            </div>
        </section>
    )
}
