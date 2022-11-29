import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import useDarkMode from './Hook/useDarkMode';


export default function Menu() {

    const [open, setOpen] = useState(true);

    const [largeur, setLargeur] = useState(window.innerWidth);

    const [colorTheme, setTheme] = useDarkMode();

    function toggleMenu() {
        setOpen(!open);
    }

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 768) {
                setOpen(true);
            } else{
                setOpen(false);
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return (
        <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLink to="/" 
                        className="flex items-center ml-8">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cuisine search</span>
                </NavLink>
                <div className='flex items-center md:block'>
                    <button className='md:hidden' onClick={() => setTheme(colorTheme)}>
                        {colorTheme === 'dark' ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6text-black dark:text-white hover:text-blue-500 dark:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black dark:text-white hover:text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        }
                    </button>
                    <NavLink
                                to="/recettes-save"
                                className={({ isActive }) => ` ${isActive ? 'text-blue-500 dark:text-blue-500' : ''}`}
                            >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block md:hidden w-6 h-6 ml-3 md:ml-0 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 hover:cursor-pointer ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </NavLink>
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 mr-8 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    {open && <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `text-gray-900 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500  ${isActive ? ' text-blue-500 dark:text-gray-200' : ''}`}
                            >
                                Recettes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) => `text-gray-900 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500 ${isActive ? 'text-blue-500 dark:text-gray-200' : ''}`}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recettes-save"
                                className={({ isActive }) => ` ${isActive ? 'text-blue-500 dark:text-blue-500' : ''}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden md:block w-6 h-6 hover:text-blue-500 dark:text-white dark:hover:text-blue-500 hover:cursor-pointer ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </NavLink>
                        </li>
                        <button className='hidden md:block' onClick={() => setTheme(colorTheme)}>
                            {colorTheme === 'dark' ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black dark:text-white md:hover:text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black dark:text-white dark:hover:text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        }
                        </button>
                    </ul>}
                </div>
            </div>
        </nav>
    );
}