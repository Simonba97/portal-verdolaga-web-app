import { format } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el módulo 'es'
import { IFixtureResponse } from '../models/IFixturesItem';
import { motion } from 'framer-motion';
import MessageCard from './MessageCard';
import { fadeInAnimation } from '../utils/animationConstants';
import { Link } from 'react-router-dom';
import { TypesStatusFixturesShort } from '../utils/TypesStatusFixtures';
import { Global } from '../utils/Global';

const FullMatchCard = ({ matchData, isLoading, error }: { matchData: IFixtureResponse | undefined, isLoading: boolean, error: any }) => {

    if (isLoading) {
        return (
            <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={true} />
        );
    }

    if (!matchData || error) {
        return (
            <MessageCard titleMsj='Sin información disponble' descMsj='Por favor vuelva a intentarlo más tarde' />
        );
    }

    const matchIsFinished: boolean = matchData.fixture.status.short == 'FT';

    return (
        <motion.div className='w-full mb-3' {...fadeInAnimation}>
            <div className='w-[170px] text-center m-auto bg-green-400 px-4 py-2 relative top-9'>
                <div>
                    <p className='text-4xl font-extralight'>
                        <span>{format(new Date(matchData.fixture.date), 'dd')}</span>
                    </p>
                </div>
                <div>
                    <p className='text-2xl font-normal text-white italic'>
                        <span>{format(new Date(matchData.fixture.date), 'MMMM', { locale: es })}</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-col text-center items-center bg-gray-100'>
                <div className='pt-9 space-y-[-5px] mb-5 font-light'>

                    {/* Match Finished */}
                    {matchData.fixture.status.short === TypesStatusFixturesShort.MatchFinished &&
                        <div>
                            <p className='text-2xl font-normal itali'>
                                <span>FINALIZADO</span>
                            </p>
                        </div>

                    }

                    {/* Match Not Started */}
                    {matchData.fixture.status.short === TypesStatusFixturesShort.NotStarted &&
                        <div>
                            <p className='text-2xl font-normal itali'>
                                <span>{format(new Date(matchData.fixture.date), 'h:mm a')}</span>
                            </p>
                        </div>
                    }

                    {/* Match PostPoned */}
                    {matchData.fixture.status.short === TypesStatusFixturesShort.MatchPostponed &&
                        <div>
                            <p className='text-2xl font-normal itali bg-yellow-200'>
                                <span>{'Aplazado'}</span>
                            </p>
                        </div>
                    }

                    {/* Match Time to be Defined */}
                    {matchData.fixture.status.short === TypesStatusFixturesShort.TimeToBeDefined &&
                        <div>
                            <p className='text-2xl font-normal itali'>
                                <span>{Global.DEFAULT_TIME_NOT_PROGRAMMED}</span> {/* 9:00 Por defecto cuando no existe programación aún */}
                            </p>
                        </div>
                    }

                    <div>
                        <p className='text-xl'>
                            <span>{`${matchData.league.round}`}</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-lg'>
                            <span>{`${matchData.league.name} - ${matchData.league.season}`}</span>
                        </p>
                    </div>
                </div>
                <div className='mb-5'>
                    {/* BODY */}
                    <Link className='mb-2' to={`/fixture-team?teamId=${matchData.teams.home.id}`}>
                        <img src={matchData.teams.home.logo} alt={matchData.teams.home.name} className='w-20 m-auto' />
                    </Link>
                    <div className='text-2xl space-y-[-8px] italic'>
                        <div >
                            <p>
                                <span>{matchData.teams.home.name}</span>
                                {matchIsFinished &&
                                    <span className='bg-green-400 text-gray-50 not-italic px-2 ml-2'>{matchData.goals.home}</span>
                                }
                            </p>
                        </div>
                        <div >
                            <p className='text-xl font-light not-italic'>
                                <span>vs</span>
                            </p>
                        </div>
                        <div >
                            <p>
                                <span>{matchData.teams.away.name}</span>
                                {matchIsFinished &&
                                    <span className='bg-green-400 text-gray-50 not-italic px-2 ml-2'>{matchData.goals.away}</span>
                                }
                            </p>
                        </div>
                    </div>
                    <Link className='mt-2' to={`/fixture-team?teamId=${matchData.teams.away.id}`}>
                        <img src={matchData.teams.away.logo} alt={matchData.teams.away.name} className='w-20 m-auto' />
                    </Link>
                </div>
                <div className='bg-green-400 w-full text-xs font-light py-1 tracking-widest'>www.portalverdolaga.com</div>
            </div>
        </motion.div >
    );

}

export default FullMatchCard