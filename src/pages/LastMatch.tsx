import { useEffect, useState } from 'react';
import { IFixtureResponse, IRowStanding, IStatisticsInsideMatchData } from '../models/IFixturesItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { useLocation } from 'react-router-dom';
import { Global } from '../utils/Global';
import { StandingsService } from '../services/StandingsService';
import Tabs from '../components/common/Tabs';
import FullStats from '../components/statistics/FullStats';
import FullStandings from '../components/statistics/FullStandings';

let hasFetchedData: boolean = false;

const LastMatch = () => {
    const [matchData, setMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [statisticsMatchData, setStatisticsMatchData] = useState<IStatisticsInsideMatchData[]>();
    const [standingsByLeagueData, setStandingsByLeagueData] = useState<IRowStanding[]>([])

    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();
    const standingsService = new StandingsService();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const teamId = queryParams.get('teamId');
    // Usar un valor predeterminado si teamId es falsy o undefined
    const normalizedTeamId: number = Number(teamId) || Global.NACIONAL_ID_API_FOOTBALL;

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getLastMatch(normalizedTeamId);

                if (dataResponse) {
                    const [statisticsByMatchId, standingByLeagueResponse] = await Promise.all([
                        fixtureService.getFixturesStatisticsByMatchId(dataResponse.fixture.id),
                        standingsService.getFullStandingByLeagueId(dataResponse.league.id),
                    ]);

                    if (standingByLeagueResponse) {
                        const round = dataResponse.league.round.split(' ')[0];
                        const selectedLeague = standingByLeagueResponse.league.standings.find(league =>
                            league[0].group.includes(round)
                        );

                        if (selectedLeague) {
                            // Set de la tabla de posiciones
                            setStandingsByLeagueData(selectedLeague);
                        }

                        // Set de las estadísticas del partido
                        setStatisticsMatchData(statisticsByMatchId);

                    }
                }

                // Set de la información del partido
                setMatchData(dataResponse);

                setIsLoading(false);
                hasFetchedData = !hasFetchedData;
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
                setIsLoading(false);
            } finally {
                setIsLoading(false);
            }
        };

        if (!hasFetchedData) {
            hasFetchedData = !hasFetchedData;
            callAsync();
        }
    }, []);

    return (
        <>
            <section className="">
                <div className='h-full flex justify-center items-center'>
                    <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase flex justify-center'>
                        <FullMatchCard matchData={matchData} isLoading={isLoading} error={error} />
                    </div>
                </div>
            </section>
            <section className="flex justify-center">
                <Tabs
                    tabs={[
                        {
                            title: 'ESTADÍSTICAS',
                            iconContent: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> </svg>,
                            content: <FullStats matchStats={statisticsMatchData} isLoading={isLoading} error={error} />
                        },
                        {
                            title: 'TABLA DE POSICIONES',
                            iconContent: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> </svg>,
                            content: <FullStandings standingsData={standingsByLeagueData} isLoading={isLoading} error={error} />
                        }
                    ]}
                    isLoading={isLoading}
                />
            </section>
        </>


    )
}

export default LastMatch