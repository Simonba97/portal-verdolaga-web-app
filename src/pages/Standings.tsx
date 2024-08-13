import { useEffect, useState } from "react";
import { IRowStanding } from "../models/IFixturesItem";
import { StandingsService } from "../services/StandingsService";
import FullStandings from "../components/statistics/FullStandings";
import { LeaguesService } from "../services/LeagueService";
import { ILeaguesResponse } from "../models/ILeaguesResponse";
import { ILeague } from "../models/ILeague";
import TitlePage from "../components/TitlePage";

let hasFetchedData: boolean = false;

const Standings = () => {

    const [standingsByLeagueData, setStandingsByLeagueData] = useState<IRowStanding[]>([])
    const [leagueData, LeagueData] = useState<ILeague>()
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const standingsService = new StandingsService();
    const leaguesService = new LeaguesService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);

                const currrentLeague: ILeaguesResponse | undefined = await leaguesService.getCurrentLeague();

                if (currrentLeague) {
                    // Consultamos las tablas de posiciones basados en la Liga Actual
                    const standingsByLeague = await standingsService.getFullStandingByLeagueId(currrentLeague.league.id);

                    // Filtramos las tablas de posiciones para la clasificación actual de la Liga Actual
                    if (standingsByLeague) {
                        const { standings } = standingsByLeague.league;
                        const standingCurrentFilter = standings.find(group => group.some(val => val.group.toLowerCase().includes('clausura')));
                        if (standingCurrentFilter) {
                            setStandingsByLeagueData(standingCurrentFilter);
                        }
                    }

                    LeagueData(currrentLeague.league);
                }

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
        <div id='fullStandingsContainer' className='pt-5'>
            <div className="flex justify-center items-center">
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase justify-center '>
                    {/* Title Section */}
                    {!isLoading && leagueData &&
                        <TitlePage leagueData={leagueData} />
                    }

                    {/* Body Section */}
                    <div className='flex justify-center'>
                        <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-[415px] xl:w-[415px] 2xl:w-[415px] uppercase flex justify-center'>
                            <FullStandings standingsData={standingsByLeagueData} isLoading={isLoading} error={error} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Standings