import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { fadeInAnimation } from "../../utils/animationConstants";


const Navbar = () => {
    return (
        <motion.nav
            {...fadeInAnimation}
            className="backdrop-blur-md  bg-[url('../src/assets/textureCard.jpg')] bg-center bg-cover fixed w-full z-20 top-0 start-0">
            <div className="flex flex-wrap items-center justify-between">
                <ul className="w-full flex justify-center font-normal">
                    <li>
                        <Link className="block py-2 px-3 " to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3" to="/previous-match">ÚLTIMO PARTIDO</Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3" to="/next-match">PRÓXIMO PARTIDO</Link>
                    </li>
                    <li>
                        <Link className="block py-2 px-3" to="/next-match">NOSOTROS</Link>
                    </li>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar