import { useEffect, useState } from 'react';
import { IFixtureResponse } from '../models/IFixturesItem';
import { FixtureService } from '../services/FixtureService';
import FullMatchCard from '../components/FullMatchCard';
import { Global } from '../utils/Global';
import H2HCard from '../components/predictions/H2HCard';
import { IPredictionsResponse } from '../models/IPredictionsItem';
import { PredictionsService } from '../services/PredictionsSertice';
import FormTeam from '../components/predictions/FormTeam';
import HeaderCard from '../components/common/HeaderCard';

let hasFetchedData: boolean = false;

const NextMatch = () => {

    const [nextMatchData, setNextMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [predictionsMatchData, setPredictionsMatchData] = useState<IPredictionsResponse | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();
    const predictionsService = new PredictionsService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                setIsLoading(true);
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getNextMatch(/* 1128 */Global.NACIONAL_ID_API_FOOTBALL);

                if (dataResponse && dataResponse.fixture.id) {
                    const predictionsResponse: IPredictionsResponse | undefined = await predictionsService.getPredictionsByMatchId(dataResponse.fixture.id);
                    setPredictionsMatchData(predictionsResponse);
                }

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
        <div id='nextMatchContainer'>
            <section className="flex justify-center">
                <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase'>
                    <FullMatchCard matchData={nextMatchData} isLoading={isLoading} error={error} />
                </div>
            </section>
            {predictionsMatchData &&
                <section className="flex flex-col items-center">
                    <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase'>
                        <H2HCard h2hData={predictionsMatchData.h2h} />
                    </div>
                    <div className='w-[90%] sm:w-[415px] md:w-[415px] lg:w-w-[415px] xl:w-w-[415px] 2xl:w-[415px] uppercase mt-3'>
                        <div>
                            <HeaderCard textHeader='Últimos partidos 👇🏻' />
                        </div>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <FormTeam teamInfo={predictionsMatchData.teams.home} formString={predictionsMatchData.teams.home.league.form} />
                            </div>
                            <div className='w-1/2'>
                                <FormTeam teamInfo={predictionsMatchData.teams.away} formString={predictionsMatchData.teams.away.league.form} />
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default NextMatch