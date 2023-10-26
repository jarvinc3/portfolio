import { useState } from 'react';
import '/css/info.css';

function Info() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const drawerClass = isDrawerOpen ? 'show' : ''; // Clase condicional para mostrar el cajón

    return (
        <div className="">
            <h5 onClick={toggleDrawer} id="drawer-label" className="md:fixed md:top-3 md:left-3 absolute right-14 top-[25px] text-lg cursor-pointer inline-flex items-center mb-4 font-semibold text-gray-500 dark:text-gray-400">
                <svg className="md:w-7 md:h-7 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            </h5>
            <div id="drawer-example" className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-80  bg-slate-50 rounded-lg shadow dark:bg-[#2e2e2e] ${drawerClass}`}>
                <div className='flex justify-between'>
                    <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        Info
                    </h5>
                    <button type="button" onClick={toggleDrawer} className="close-button">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <hr />
                <div className='flex flex-col gap-6 pt-10'>
                    <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
                        This page is 100% responsive.
                    </p>
                    <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
                        The dark mode works according to how you have it configured in your browser and system.
                    </p>
                    <p className="mb-6 text-xl text-gray-500 dark:text-gray-400">
                        This page is still under development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
