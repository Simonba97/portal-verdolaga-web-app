import { useEffect, useState } from 'react';
import { IFixtureResponse, IRowStanding, IStatisticsInsideMatchData } from '../models/IFixturesItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { useLocation } from 'react-router-dom';
import FullStats from '../components/statistics/FullStats';
import { StandingsService } from '../services/StandingsService';
import FullStandings from '../components/statistics/FullStandings';
import Tabs from '../components/common/Tabs';

let hasFetchedData: boolean = false;

const MatchDetail = () => {

    const [matchData, setMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [statisticsMatchData, setStatisticsMatchData] = useState<IStatisticsInsideMatchData[]>();
    const [standingsByLeagueData, setStandingsByLeagueData] = useState<IRowStanding[]>([])
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    /* Servicio relacionado para todo lo de un partido */
    const fixtureService = new FixtureService();

    /* Servicio relacionado para todo lo de una tabla de posiciones */
    const standingsService = new StandingsService();


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const matchId: number = Number(queryParams.get('matchId'));

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);

                /* Consulta información relacionada con un partido Estadisticas, Datos del partido... */
                const dataResponse = await fixtureService.getFixtureByMatchId(matchId);

                if (dataResponse) {
                    const idLeague = dataResponse.league.id;
                    /* Consulta información relacionada con la tabla de posiciones del campeonato... */
                    const standingsByLeagueResponse = await standingsService.getFullStandingByLeagueId(idLeague);
                    if (standingsByLeagueResponse) {
                        const round = dataResponse.league.round.split(' ')[0];
                        const selectedLeague = standingsByLeagueResponse.league.standings.find(league =>
                            league[0].group.includes(round)
                        );

                        if (selectedLeague) {
                            setStandingsByLeagueData(selectedLeague);
                        }
                    }
                }

                setStatisticsMatchData(dataResponse?.statistics ?? undefined);
                setMatchData(dataResponse);

                hasFetchedData = !hasFetchedData;
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
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
        <div id='matchDetailContainer'>
            <section className="flex justify-center">
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase'>
                    <FullMatchCard matchData={matchData} isLoading={isLoading} error={error} />
                </div>
            </section>
            <section className="flex justify-center">
                <Tabs
                    tabs={[
                        { title: 'ESTADÍSTICAS', content: <FullStats matchStats={statisticsMatchData} isLoading={isLoading} error={error} /> },
                        { title: 'TABLA DE POSICIONES', content: <FullStandings standingsData={standingsByLeagueData} isLoading={isLoading} error={error} /> },
                        /* { title: 'Line up', content: <div><span>Hola</span></div> } */
                    ]}
                    isLoading={isLoading}
                />
            </section>
        </div>
    )
}

export default MatchDetail