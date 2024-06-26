import logoPortalVerdolga from '../../src/assets/logoPortalVerdolaga.png';
import escudoAtleticoNacional from '../../src/assets/escudoAtleticoNacional.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className='fixed w-11/12 sm:w-1/2 m-auto drop-shadow-[-3px_3px_6px_rgba(0,0,0,1)]'>
                {/* Logos */}
                <div className='flex justify-center py-2 space-x-2'>
                    <img src={logoPortalVerdolga} className='w-24' />
                    <img src={escudoAtleticoNacional} className='w-16' />
                </div>

                {/* Divider */}
                <hr className='h-[2px] w-56 m-auto border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent' />

                {/* Title + Lema */}
                <div className='text-gray-600 py-4 text-center'>
                    <motion.h1 className='text-5xl text-white font-normal italic z-1'
                        initial={{ width: "0vw", x: "-50vw" }}
                        animate={{ width: "100%", x: 0 }}
                        transition={{ duration: 1, origin: 1 }}
                    ><span>PORTAL VERDOLAGA</span></motion.h1>
                    <motion.blockquote className='text-2xl sm:text-3xl font-extralight text-gray-100 z-0'
                        initial={{ width: "0vw", x: "150vw" }}
                        animate={{ width: "100%", x: 0 }}
                        transition={{ duration: 1, origin: 1 }}
                    >
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-400 relative inline-block font-light">
                            <span className="relative">DE HINCHAS PARA HINCHAS</span>
                        </span>
                    </motion.blockquote>
                    <p className=''></p>
                </div>

                {/* Redes Sociales */}
                <div className='flex justify-center space-x-2 fill-white pt-2'>
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

            </motion.div>
        </section>
    )
}

export default HeroSection