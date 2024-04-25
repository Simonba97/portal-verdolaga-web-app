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

let hasFetchedData: boolean = false;
let formTemp = "";

const FixtureTeam = () => {

    let componentResult = null;
    const [FixtureTeamData, setFixtureTeamData] = useState<IFixtureResponse[] | undefined>(undefined);
    const [TeamInformationData, setTeamInformationData] = useState<ITeamsInformationResponse | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();
    const teamsService = new TeamsService();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const teamId = queryParams.get('teamId');
    // Usar un valor predeterminado si teamId es falsy o undefined
    const normalizedTeamId: number = Number(teamId) || Global.NACIONAL_ID_API_FOOTBALL;

    // Resumen de los resultados de los ultimos cinco partidos

    useEffect(() => {
        const callAsync = async () => {
            try {
                setLoading(true);

                const [fixtureData, teamInformationData] = await Promise.all([
                    fixtureService.getFixture(normalizedTeamId),
                    teamsService.getTeamInformation(normalizedTeamId)
                ]);

                // Ordenar la información de respuesta con respecto a la fecha
                fixtureData?.sort((a, b) => new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime());

                //Calcular status de los ultimos 5 partidos de Nacional
                const temp = fixtureData?.filter(match => match.fixture.status.short === TypesStatusFixturesShort.MatchFinished).reverse();

                if (temp) {
                    for (let index = 0; index < 5; index++) {
                        if (temp[index].teams.home.winner === null && temp[index].teams.away.winner === null) {
                            formTemp = 'E' + formTemp;
                        } else if (temp[index].teams.home.id === Number(normalizedTeamId) && temp[index].teams.home.winner) {
                            formTemp = 'V' + formTemp;
                        } else if (temp[index].teams.away.id === Number(normalizedTeamId) && temp[index].teams.away.winner) {
                            formTemp = 'V' + formTemp;
                        } else {
                            formTemp = 'D' + formTemp;
                        }
                    }
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

        if (!hasFetchedData) {
            hasFetchedData = !hasFetchedData;
            callAsync();
        }
    }, []);

    if (loading) {
        componentResult = <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={loading} />
    } else if (!FixtureTeamData || error) {
        componentResult = <MessageCard titleMsj='Sin información disponble' descMsj='Por favor vuelva a intentarlo más tarde' />
    } else

        if (TeamInformationData && FixtureTeamData && formTemp) {
            componentResult = <>
                <TeamDetail teamData={TeamInformationData} formTeam={formTemp} />
                <div id="matchSummaryContainer" className="flex justify-center">
                    <div className="space-y-5 w-11/12 ml-8 sm:ml-0 sm:w-full ">
                        {FixtureTeamData &&
                            FixtureTeamData.map((game) => <SummaryMatchCard key={`summaryMatchCardFixture-${game.fixture.id}`} matchData={game} />)
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