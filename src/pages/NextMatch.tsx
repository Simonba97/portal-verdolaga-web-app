import { useEffect, useState } from 'react';
import { IFixtureResponse } from '../models/IFixturesItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { Global } from '../utils/Global';

let hasFetchedData: boolean = false;

const NextMatch = () => {

    const [nextMatchData, setNextMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getNextMatch(Global.NACIONAL_ID_API_FOOTBALL);
                setNextMatchData(dataResponse);
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
        <section className="h-screen">
            <div className='h-full flex justify-center items-center'>
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase flex justify-center'>
                    <FullMatchCard matchData={nextMatchData} isLoading={isLoading} error={error} />
                </div>
            </div>
        </section>
    )
}

export default NextMatch