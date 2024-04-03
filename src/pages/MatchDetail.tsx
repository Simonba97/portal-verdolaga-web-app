import { useEffect, useState } from 'react';
import { IFixtureResponse } from '../models/IFixtureItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { useLocation } from 'react-router-dom';

let hasFetchedData: boolean = false;

const MatchDetail = () => {

    const [matchData, setMatchData] = useState<IFixtureResponse | undefined>(undefined);
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
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getFixtureByMatchId(matchId);
                setMatchData(dataResponse);
                setIsLoading(false);
                hasFetchedData = !hasFetchedData;
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
                setIsLoading(false);
            }
        };

        if (!hasFetchedData) {
            hasFetchedData = !hasFetchedData;
            callAsync();
        }
    }, []);

    return (
        <section className="h-screen bg-[url('../src/assets/bgHome.jpg')] bg-center bg-cover">
            <div className='h-full flex justify-center items-center'>
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase flex justify-center'>
                    <FullMatchCard matchData={matchData} isLoading={isLoading} error={error} />
                </div>
            </div>
        </section>
    )
}

export default MatchDetail