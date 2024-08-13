import { motion } from 'framer-motion';
import { fadeInAnimation } from '../utils/animationConstants';
import { ILeague } from '../models/ILeague';
import { Global } from '../utils/Global';

const TitlePage = ({ leagueData }: { leagueData: ILeague }) => {
    return (
        <motion.div id="titlePageContainer" className='w-full mb-5 flex justify-center' {...fadeInAnimation}>
            <div className='w-[60%]'>
                <div className='max-w-fit text-center m-auto bg-green-400 px-3 py-1 relative top-4'>
                    <div>
                        <p className='text-lg font-normal text-gray-100'>
                            <span>TABLA DE POSICIONES</span>
                        </p>
                    </div>
                </div>
                <div className='bg-gray-100 flex flex-col text-center items-center'>
                    <div className='pt-1 mb-2 font-light z-10'>
                        <div id={`nameTeam-${leagueData.id}`}>
                            <span className='text-xl font-normal italic text-gray-800 uppercase'>{leagueData.name.toLowerCase() === Global.NAME_LEAGUE_COL_API_FOOTBALL.toLowerCase() ? Global.NAME_LEAGUE_COL_CUSTOM : leagueData.name}</span>
                        </div>
                        <div id={`logoTeam-${leagueData.id}`}>
                            <img src={leagueData.logo} alt={leagueData.name} className='w-14 m-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TitlePage