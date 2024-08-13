import { useState } from "react";
import { fadeInAnimation } from "../../utils/animationConstants";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el SideBar está abierto o cerrado

    // Función para alternar entre abrir y cerrar el SideBar
    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const closeSideBar = () => {
        setIsOpen(false);
    };

    const location = useLocation();
    // Obtener los parámetros de consulta de la URL actual
    const queryParams = new URLSearchParams(location.search);
    // Verificar si hay parámetros de consulta y formatearlos como una cadena
    const appendParams = queryParams.toString() ? `?${queryParams.toString()}` : '';

    return (
        <>
            {/* Menu open SideBar */}
            <div id="menuOpen">
                <motion.button className="bg-green-400 fixed p-3 mt-5 ml-5 fill-white" onClick={toggleSideBar} {...fadeInAnimation}>
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                    </svg>
                </motion.button>
            </div>

            <div className={`bg-gray-100 fixed inset-y-0 left-0 w-full sm:w-80 p-4 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 uppercase text-gray-600 text-2xl tracking-widest`}>

                {/* Header SideBar */}
                <div id="headerSideBar" className="flex justify-end">
                    <button className="bg-green-400 p-3 fill-white" onClick={toggleSideBar}>
                        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                        </svg>
                    </button>
                </div>

                {/* Options SideBar */}
                <ul className="flex flex-col items-start text-3xl space-y-6 mt-8 sm:space-y-3 sm:mt-4 sm:text-2xl" onClick={closeSideBar} >

                    {/* Home option */}
                    <li id="homeOption">
                        <Link to={'/' + appendParams} className="w-full flex space-x-4">
                            <svg className="w-10 sm:w-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75" /></svg>
                            <span id="homeLabel">Inicio</span>
                        </Link>
                    </li>

                    {/* Next Match option */}
                    {/* <li id="liveMatchOption">
                        <Link to={'/next-match' + appendParams} className="w-full flex space-x-4">
                            <svg className="w-10 sm:w-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h7v2.13c-1.76.46-3 2.05-3 3.87a4.01 4.01 0 0 0 3 3.87V18H4v-2h3V8H4zm9 0h7v2h-3v8h3v2h-7v-2.13c1.76-.46 3-2.05 3-3.87a4.01 4.01 0 0 0-3-3.87zm-9 4h1v4H4zm15 0h1v4h-1zm-6 .27c.62.36 1 1.02 1 1.73s-.38 1.37-1 1.73zm-2 0v3.46c-.62-.36-1-1.02-1-1.73s.38-1.37 1-1.73" /></svg>
                            <span id="liveMatchLabel">En vivo</span>
                        </Link>
                    </li> */}


                    {/* Next Match option */}
                    <li id="nextMatchOption">
                        <Link to={'/next-match' + appendParams} className="w-full flex space-x-4">
                            <svg className="w-10 sm:w-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.76 3.7L2.14 4.88L4.43 8a8.23 8.23 0 0 1 1.92-.72M11 9v2h7v.29l-5 1.42v2.79A4.5 4.5 0 1 1 8.5 11H9V9h-.5a6.5 6.5 0 1 0 6.5 6.5v-1.59L22 12V9m-5.76-5.3L13.85 7h2.47l1.54-2.12M9 2v5h2V2Z" /></svg>
                            <span id="nextMatchLabel">Próximo Partido</span>
                        </Link>
                    </li>

                    {/* Last Match option */}
                    <li id="lastMatchOption">
                        <Link to={'/last-match' + appendParams} className="w-full flex space-x-4">
                            <svg className="w-10 sm:w-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 15q-.425 0-.712-.288T14.5 14v-4q0-.425.288-.712T15.5 9H18q.425 0 .713.288T19 10v4q0 .425-.288.713T18 15zm.5-1.5h1.5v-3H16zm-9.5 0h2.25q.325 0 .538.213t.212.537q0 .325-.213.538T8.75 15H6q-.425 0-.712-.288T5 14v-1.5q0-.425.288-.712T6 11.5h2v-1H5.75q-.325 0-.537-.213T5 9.75q0-.325.213-.537T5.75 9H8.5q.425 0 .713.288T9.5 10v1.5q0 .425-.288.713T8.5 12.5h-2zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h3V3q0-.425.288-.712T8 2q.425 0 .713.288T9 3v1h6V3q0-.425.288-.712T16 2q.425 0 .713.288T17 3v1h3q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h7.25v-.75q0-.325.213-.537T12 16.5q.325 0 .538.213t.212.537V18H20V6h-7.25v.75q0 .325-.213.538T12 7.5q-.325 0-.537-.213t-.213-.537V6H4zm0 0V6zm8-7q-.325 0-.537-.213t-.213-.537q0-.325.213-.537T12 9.5q.325 0 .538.213t.212.537q0 .325-.213.538T12 11m0 3.5q-.325 0-.537-.213t-.213-.537q0-.325.213-.537T12 13q.325 0 .538.213t.212.537q0 .325-.213.538T12 14.5" /></svg>
                            <span id="lastMatchLabel">Último Partido</span>
                        </Link>
                    </li>

                    {/* Calendar option */}
                    <li id="calendarOption" >
                        <Link to={'/fixture-team' + appendParams} className="w-full flex space-x-4">
                            <svg className="w-10 sm:w-7 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm7 6q-.425 0-.712-.288T11 13q0-.425.288-.712T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13q0-.425.288-.712T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14m8 0q-.425 0-.712-.288T15 13q0-.425.288-.712T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17q0-.425.288-.712T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17q0-.425.288-.712T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18m8 0q-.425 0-.712-.288T15 17q0-.425.288-.712T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18" /></svg>
                            <span id="calendarLabel">Calendario</span>
                        </Link>
                    </li>

                    {/* Standings option */}
                    <li id="standingOption" >
                        <Link to={'/standings' + appendParams} className="w-full flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="w-10 sm:w-7 stroke-gray-600"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                            <span id="calendarLabel">Tabla de posiciones</span>
                        </Link>
                    </li>

                </ul>

                {/* Footer SideBar */}
                <div id="footerSideBar" className="w-11/12 sm:w-10/12 fixed bottom-0 mb-4">
                    <hr className='h-[2px] w-11/12  m-auto border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-400 to-transparent sm:w-full' />
                    {/* <hr className='  m-auto border-gray-300 mt-2' /> */}
                    {/* Redes Sociales */}
                    <div className='flex justify-evenly fill-gray-600 mt-5'>
                        <svg
                            onClick={() => window.location.href = 'https://facebook.com/PortalVerdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-7 sm:w-5 hover:cursor-pointer'
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <svg
                            onClick={() => window.location.href = 'https://x.com/PortalVerdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-7 sm:w-5 hover:cursor-pointer'
                            viewBox="0 0 24 24">
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <svg
                            onClick={() => window.location.href = 'https://instagram.com/Portal.Verdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-7 sm:w-5 hover:cursor-pointer'
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar