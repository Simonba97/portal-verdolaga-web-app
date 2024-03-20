import { motion } from "framer-motion";
import { fadeInAnimation } from "../utils/animationConstants";
import { IFixtureResponse } from "../models/IFixtureItem";

import { format } from "date-fns";
import { es } from 'date-fns/locale'; // Importa el módulo 'es'

const SummaryMatchCard = ({ matchData }: { matchData: IFixtureResponse }) => {
    console.log(matchData);
    return (
        <motion.div className='w-[85%] py-2 ml-9 bg-[url("../src/assets/bgTexture.jpg")] bg-center bg-cover flex flex-row text-center items-center m-auto' {...fadeInAnimation}>
            <div className='w-[60px] text-center bg-green-500 -ml-8'>
                <div>
                    <p className='text-xl font-extralight'>
                        <span>{format(new Date(matchData.fixture.date), 'dd')}</span>
                    </p>
                </div>
                <div>
                    <p className='text-lg font-normal text-white italic'>
                        <span>{format(new Date(matchData.fixture.date), 'MMM', { locale: es })}</span>
                    </p>
                </div>
            </div>

            <div className='m-auto'>
                {/* BODY */}
                <div>
                    {/*  <div className="space-y-[-9px] m-1 tracking-wider">
                        <p className='text-sm font-light not-italic'>
                            <span>{`${matchData.league.round}`}</span>
                        </p>
                        <p className='text-sm font-light not-italic'>
                            <span>{`${matchData.league.name} - ${matchData.league.season}`}</span>
                        </p>
                    </div> */}
                    <div className="flex items-center">
                        <div className="flex items-center mr-2 space-x-1">
                            <span className={`w-16 text-sm text-right leading-[16px] ${matchData.teams.home.id === 1137 ? 'font-normal' : 'font-extralight'}`}>{matchData.teams.home.name}</span>
                            <img src={matchData.teams.home.logo} alt={matchData.teams.home.name} className='h-8' />
                        </div>
                        <span className='text-base font-light not-italic'>
                            {matchData.fixture.status.short == 'FT' ? `${matchData.goals.home} - ${matchData.goals.away}` : format(new Date(matchData.fixture.date), 'HH:HH')}
                        </span>
                        <div className="flex items-center ml-2 space-x-1">
                            <img src={matchData.teams.away.logo} alt={matchData.teams.away.name} className='h-8' />
                            <span className={`w-16 text-sm text-left leading-[16px] ${matchData.teams.away.id === 1137 ? 'font-normal' : 'font-extralight'} `}>{matchData.teams.away.name}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='bg-green-400 w-full text-xs font-light py-1 tracking-widest'>www.portalverdolaga.com</div> */}
        </motion.div>

    )
}

export default SummaryMatchCard