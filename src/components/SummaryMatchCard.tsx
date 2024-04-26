import { IFixtureResponse } from "../models/IFixturesItem";

import { format } from "date-fns";
import { es } from 'date-fns/locale'; // Importa el módulo 'es'
import { Link } from "react-router-dom";
import { Global } from "../utils/Global";
import { TypesStatusFixturesShort } from "../utils/TypesStatusFixtures";

const SummaryMatchCard = ({ matchData }: { matchData: IFixtureResponse }) => {
    return (
        <div className='w-full bg-gray-100 flex flex-row text-center items-center m-auto cursor-pointer' >
            <div className='w-[60px] text-center bg-green-400 -ml-8'>
                <div>
                    <p className='text-xl font-light'>
                        <span>{format(new Date(matchData.fixture.date), 'dd')}</span>
                    </p>
                </div>
                <div>
                    <p className='text-lg font-normal text-white italic'>
                        <span>{format(new Date(matchData.fixture.date), 'MMM', { locale: es })}</span>
                    </p>
                </div>
            </div>
            <Link className='w-full py-2 m-auto cursor-pointer' to={`/detail-match?matchId=${matchData.fixture.id}`}>
                {/* BODY */}
                <div className="space-y-[-6px] mb-1">
                    <p className='text-sm font-light not-italic'>
                        <span>{`${matchData.league.name} - ${matchData.league.season}`}</span>
                    </p>
                    <p className='text-xs font-light not-italic'>
                        <span>{matchData.league.round}</span>
                    </p>
                </div>
                {/* Team Home Information */}
                <div className="flex items-center">
                    {/* Result/Time/Info */}
                    <div className="flex w-2/5 justify-end items-center mr-2 space-x-1">
                        <span className={`text-sm text-right leading-[16px] ${matchData.teams.home.id === Global.NACIONAL_ID_API_FOOTBALL ? 'font-normal ' : 'font-light'}`}>{matchData.teams.home.name}</span>
                        <img src={matchData.teams.home.logo} alt={matchData.teams.home.name} className='h-8' />
                    </div>
                    <div className="w-1/5 items-center">

                        {/* Match Finished */}
                        {matchData.fixture.status.short === TypesStatusFixturesShort.MatchFinished &&
                            <span className='text-base font-light not-italic h-full'>
                                {`${matchData.goals.home} - ${matchData.goals.away}`}
                            </span>
                        }

                        {/* Match Not Started */}
                        {matchData.fixture.status.short === TypesStatusFixturesShort.NotStarted &&
                            <span className='text-base font-light not-italic h-full'>
                                {format(new Date(matchData.fixture.date), 'HH:HH')}
                            </span>
                        }

                        {/* Match PostPoned */}
                        {matchData.fixture.status.short === TypesStatusFixturesShort.MatchPostponed &&
                            <span className='text-xs font-light not-italic leading-[16px] bg-yellow-200 h-full'>
                                {`Aplazado`}
                            </span>
                        }


                        {/* Match Time to be Defined */}
                        {matchData.fixture.status.short === TypesStatusFixturesShort.TimeToBeDefined &&
                            <span className='text-xs font-light not-italic leading-[16px] bg-red-200 h-full'>
                                {`Sin horario`}
                            </span>

                        }
                    </div>
                    {/* Team Away Information */}
                    <div className="flex w-2/5 justify-start items-center ml-2 space-x-1">
                        <img src={matchData.teams.away.logo} alt={matchData.teams.away.name} className='h-8' />
                        <span className={`text-sm text-left leading-[16px] ${matchData.teams.away.id === Global.NACIONAL_ID_API_FOOTBALL ? 'font-normal ' : 'font-light'} `}>{matchData.teams.away.name}</span>
                    </div>
                </div>
            </Link >
            {/* <div className='bg-green-400 w-full text-xs font-light py-1 tracking-widest'>www.portalverdolaga.com</div> */}
        </div >
    )
}

export default SummaryMatchCard