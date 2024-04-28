import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../utils/animationConstants';
import { IFixtureResponse } from '../../models/IFixturesItem';
import { Global } from '../../utils/Global';
import { format } from 'date-fns';
import HeaderCard from '../common/HeaderCard';

const H2HCard = ({ h2hData }: { h2hData: IFixtureResponse[] | undefined }) => {

    // Ordenar la información de respuesta con respecto a la fecha y solo colocamos los ultimos cinco
    h2hData = h2hData?.sort((a, b) => new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime()).slice(-5).reverse();

    return (
        <motion.div className='w-full bg-gray-100' {...fadeInAnimation}>
            {/* Header card */}
            <HeaderCard textHeader='Cabeza a cabeza 👇🏻' />
            {/* Body card */}
            <div className='py-1'>
                {
                    h2hData?.map(match => (
                        <div key={match.fixture.id} className='text-center w-full py-2 m-auto cursor-pointer border-b'>
                            <div className="space-y-[-6px] mb-1">
                                <p className='text-sm font-light not-italic'>
                                    <span>{`${match.league.name} - ${match.league.season}`}</span>
                                </p>
                                <p className='text-xs font-light not-italic'>
                                    <span>{format(new Date(match.fixture.date), 'dd/MM/yyyy')}</span>
                                </p>
                            </div>
                            {/* Match Information */}
                            <div className="flex items-center">
                                {/* Result/Time/Info */}
                                <div className="flex w-2/5 justify-end items-center mr-2 space-x-1">
                                    <span className={`text-sm text-right leading-[16px] ${match.teams.home.id === Global.NACIONAL_ID_API_FOOTBALL ? 'font-normal ' : 'font-light'}`}>{match.teams.home.name}</span>
                                    <img src={match.teams.home.logo} alt={match.teams.home.name} className='h-8' />
                                </div>
                                <div className="w-1/5 items-center">

                                    <span className='text-base font-light not-italic h-full'>
                                        {`${match.goals.home} - ${match.goals.away}`}
                                    </span>
                                </div>
                                {/* Team Away Information */}
                                <div className="flex w-2/5 justify-start items-center ml-2 space-x-1">
                                    <img src={match.teams.away.logo} alt={match.teams.away.name} className='h-8' />
                                    <span className={`text-sm text-left leading-[16px] ${match.teams.away.id === Global.NACIONAL_ID_API_FOOTBALL ? 'font-normal ' : 'font-light'} `}>{match.teams.away.name}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </motion.div >
    );

}

export default H2HCard