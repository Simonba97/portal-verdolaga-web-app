import { useEffect, useState } from 'react';
import { IFixtureResponse, IFixturesStatisticsResponse } from '../models/IFixturesItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { useLocation } from 'react-router-dom';
import FullStats from '../components/statistics/FullStats';

let hasFetchedData: boolean = false;

const MatchDetail = () => {

    const [matchData, setMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [fixturesStatistics, setFixturesStatistics] = useState<IFixturesStatisticsResponse[] | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const matchId: number = Number(queryParams.get('matchId'));

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);

                const [dataResponse, fixturesStatisticsResponse] = await Promise.all([
                    fixtureService.getFixtureByMatchId(matchId),
                    fixtureService.getFixturesStatisticsByMatchId(matchId)
                ]);

                setMatchData(dataResponse);
                setFixturesStatistics(fixturesStatisticsResponse);

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
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase'>
                    <FullStats matchStats={fixturesStatistics} isLoading={isLoading} error={error} />
                </div>
            </section>
        </div>
    )
}

export default MatchDetail