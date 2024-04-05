import { useState } from "react";
import { fadeInAnimation } from "../../utils/animationConstants";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el Sidebar está abierto o cerrado

    // Función para alternar entre abrir y cerrar el Sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.button className="bg-green-400 fixed p-3 mt-5 ml-5 fill-white" onClick={toggleSidebar} {...fadeInAnimation}>
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                    <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                </svg>
            </motion.button>
            <div className={`fixed inset-y-0 left-0 w-64 bg-gray-100 p-4 transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
                <div className="flex justify-end">
                    <button className="bg-green-400 p-3 fill-white" onClick={toggleSidebar}>
                        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="uppercase text-gray-600 text-2xl tracking-widest">
                    <li className="py-2" onClick={closeSidebar}><Link to={'/'}>Inicio</Link></li>
                    <li className="py-2" onClick={closeSidebar}><Link to={'/next-match'}>Próximo Partido</Link></li>
                    <li className="py-2" onClick={closeSidebar}><Link to={'/previous-match'}>Último Partido</Link></li>
                    <li className="py-2" onClick={closeSidebar}><Link to={'/fixture-team'}>Calendario</Link></li>
                    {/* Agrega más elementos del menú según sea necesario */}
                </ul>

                {/* Footer Sidebar */}
                <div className="w-[85%] fixed bottom-0 mb-4">
                    <hr className='w-56 m-auto border-gray-300 mt-2' />
                    {/* Redes Sociales */}
                    <div className='flex justify-center space-x-2 fill-gray-600 mt-4'>
                        <svg
                            onClick={() => window.location.href = 'https://facebook.com/PortalVerdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-6 hover:cursor-pointer'
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <svg
                            onClick={() => window.location.href = 'https://x.com/PortalVerdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-6 hover:cursor-pointer'
                            viewBox="0 0 24 24">
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <svg
                            onClick={() => window.location.href = 'https://instagram.com/Portal.Verdolaga'}
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-6 hover:cursor-pointer'
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

export default Sidebar