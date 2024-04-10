import { useEffect, useState } from "react";
import { FixtureService } from "../services/FixtureService";
import { IFixtureResponse, ITeamsInformationResponse } from "../models/IFixturesItem";
import MessageCard from "../components/MessageCard";
import SummaryMatchCard from "../components/SummaryMatchCard";
import TeamDetail from "../components/TeamDetail";
import { TeamsService } from "../services/TeamsService";
import { useLocation } from "react-router-dom";
import { Global } from "../utils/Global";

let hasFetchedData: boolean = false;

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

    useEffect(() => {
        const callAsync = async () => {
            try {
                setLoading(true);
                const fixtureData: IFixtureResponse[] | undefined = await fixtureService.getFixture(normalizedTeamId);
                // Ordenar la información de respuesta con respecto a la fecha
                fixtureData?.sort((a, b) => new Date(a.fixture.date).getTime() - new Date(b.fixture.date).getTime());
                setFixtureTeamData(fixtureData);

                const teamInformationData: ITeamsInformationResponse | undefined = await teamsService.getTeamInformation(normalizedTeamId);
                setTeamInformationData(teamInformationData);

                setLoading(false);
                hasFetchedData = !hasFetchedData;
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
                setLoading(false);
            } finally {
                setLoading(false);
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

        if (TeamInformationData && FixtureTeamData) {
            componentResult = <>
                <TeamDetail teamData={TeamInformationData} />
                {
                    FixtureTeamData?.map((game) => <SummaryMatchCard matchData={game} />)
                }
            </>
        }

    return (
        <section className="h-screen bg-[url('../src/assets/bgHome.jpg')] bg-center bg-cover">
            <div className='h-full flex justify-center items-center overflow-auto'>
                <div className='w-[90%] h-full pt-10 sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase justify-center space-y-5'>
                    {componentResult}
                </div>
            </div>
        </section>
    )
}

export default FixtureTeam