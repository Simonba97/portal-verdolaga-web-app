import { useEffect, useState } from "react";
import { FixtureService } from "../services/FixtureService";
import { IFixtureResponse, ITeamsInformationResponse } from "../models/IFixturesItem";
import MessageCard from "../components/MessageCard";
import SummaryMatchCard from "../components/SummaryMatchCard";
import TeamDetail from "../components/TeamDetail";
import { TeamsService } from "../services/TeamsService";
import { useLocation } from "react-router-dom";
import { Global } from "../utils/Global";
import { TypesStatusFixturesShort } from "../utils/TypesStatusFixtures";
import { subWeeks, addMonths, format } from 'date-fns';
import { useNextMatch } from "../contexts/NextMatchContext";

let hasFetchedData: boolean = false;

const FixtureTeam = () => {

    let componentResult = null;

    const { nextMatch, requestLoading } = useNextMatch();
    const [FixtureTeamData, setFixtureTeamData] = useState<IFixtureResponse[] | undefined>(undefined);
    const [TeamInformationData, setTeamInformationData] = useState<ITeamsInformationResponse | undefined>(undefined);
    const [SummaryLastMatchs, setSummaryLastMatchs] = useState<string>('');

    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();
    const teamsService = new TeamsService();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const teamId = queryParams.get('teamId');
    // Usar un valor predeterminado si teamId es falsy o undefined
    const normalizedTeamId: number = Number(teamId) || Global.NACIONAL_ID_API_FOOTBALL;

    console.log(requestLoading);
    debugger;

    // Resumen de los resultados de los ultimos cinco partidos
    useEffect(() => {
        const callAsync = async () => {
            try {
                setLoading(true);

                // Restar exactamente 2 semanas
                const dateQueryFrom: string = format(subWeeks(new Date(), 2), 'yyyy-MM-dd');
                // Agregamos seis meses
                const dateQueryTo: string = format(addMonths(new Date(), 6), 'yyyy-MM-dd');

                const [fixtureData, teamInformationData] = await Promise.all([
                    fixtureService.getFixtureBetweenDateRanges(dateQueryFrom, dateQueryTo, normalizedTeamId),
                    teamsService.getTeamInformation(normalizedTeamId)
                ]);

                // Ordenar la información de respuesta con respecto a la fecha
                fixtureData?.sort((a, b) => new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime());

                //TODO: Revisar si lo puedo colocar en un Hook
                if (fixtureData) {
                    const matchFinished = fixtureData.filter(match => match.fixture.status.short === TypesStatusFixturesShort.MatchFinished).slice(-5);
                    let summary = '';

                    matchFinished.forEach(match => {
                        const homeTeamId = match.teams.home.id;
                        const awayTeamId = match.teams.away.id;
                        const homeTeamWinner = match.teams.home.winner;
                        const awayTeamWinner = match.teams.away.winner;

                        if (homeTeamWinner === null && awayTeamWinner === null) {
                            summary += 'E';
                        } else if (homeTeamWinner === true && homeTeamId === normalizedTeamId) {
                            summary += 'V';
                        } else if (awayTeamWinner === true && awayTeamId === normalizedTeamId) {
                            summary += 'V';
                        } else {
                            summary += 'D';
                        }
                    });

                    setSummaryLastMatchs(summary);
                }

                setFixtureTeamData(fixtureData);
                setTeamInformationData(teamInformationData);

            } catch (error: any) {
                setError(error.message || 'Error desconocido');
                setLoading(false);
            } finally {
                setLoading(false);
                hasFetchedData = !hasFetchedData;
            }
        };

        if (!hasFetchedData && !requestLoading) {
            debugger;
            hasFetchedData = !hasFetchedData;
            callAsync();
        }
    }, [requestLoading]);

    if (loading) {
        componentResult = <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={loading} />
    } else if (!FixtureTeamData || error) {
        componentResult = <MessageCard titleMsj='Sin información disponble' descMsj='Por favor vuelva a intentarlo más tarde' />
    } else

        if (TeamInformationData && FixtureTeamData) {
            componentResult = <>
                <TeamDetail teamData={TeamInformationData} formTeam={SummaryLastMatchs} />
                <div id="matchSummaryContainer" className="flex justify-center">
                    <div className="space-y-5 w-11/12 ml-8 sm:ml-0 sm:w-full ">
                        {FixtureTeamData &&
                            FixtureTeamData.map((game) => <SummaryMatchCard key={`summaryMatchCardFixture-${game.fixture.id}`} matchData={game} isNextGame={game.fixture.id === nextMatch?.fixture.id} />)
                        }
                    </div>
                </div>
            </>
        }

    return (
        <section className="">
            <div className='flex justify-center items-center'>
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase justify-center '>
                    {componentResult}
                </div>
            </div>
        </section>
    )
}

export default FixtureTeam