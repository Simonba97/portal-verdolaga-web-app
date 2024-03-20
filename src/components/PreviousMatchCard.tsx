import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el módulo 'es'
import { IFixtureResponse } from '../models/IFixtureItem';
import { FixtureService } from '../services/FixtureService';
import { motion } from 'framer-motion';
import MessageCard from './MessageCard';
import { fadeInAnimation } from '../utils/animationConstants';

let hasFetchedData: boolean = false;

const PreviousMatchCard = () => {

    const [PreviousMatchCardData, setPreviousMatchCardData] = useState<IFixtureResponse | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                setLoading(true);
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getPreviousMatch(1137);
                setPreviousMatchCardData(dataResponse);
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
        return (
            <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={true} />
        );
    }

    if (!PreviousMatchCardData || error) {
        return (
            <MessageCard titleMsj='Sin información disponble' descMsj='Por favor vuelva a intentarlo más tarde' />
        );
    }


    return (
        <motion.div className='w-full mb-14' {...fadeInAnimation}>
            <div className='w-[170px] text-center m-auto bg-green-500 px-4 py-2 relative top-9'>
                <div>
                    <p className='text-4xl font-extralight'>
                        <span>{format(new Date(PreviousMatchCardData.fixture.date), 'dd')}</span>
                    </p>
                </div>
                <div>
                    <p className='text-2xl font-normal text-white italic'>
                        <span>{format(new Date(PreviousMatchCardData.fixture.date), 'MMMM', { locale: es })}</span>
                    </p>
                </div>
            </div>
            <div className='bg-[url("../src/assets/bgTexture.jpg")] bg-center bg-cover  flex flex-col text-center items-center'>
                <div className='pt-9 space-y-[-5px] mb-5 font-light'>
                    {/* HEADER */}
                    <div>
                        <p className='text-2xl font-normal itali'>
                            <span>FINALIZADO</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-xl'>
                            <span>{`${PreviousMatchCardData.league.round}`}</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-lg'>
                            <span>{`${PreviousMatchCardData.league.name} - ${PreviousMatchCardData.league.season}`}</span>
                        </p>
                    </div>
                </div>
                <div className='mb-5'>
                    {/* BODY */}
                    <div className='mb-2'>
                        <img src={PreviousMatchCardData.teams.home.logo} alt={PreviousMatchCardData.teams.home.name} className='w-20 m-auto aspect-auto' />
                    </div>
                    <div className='text-2xl space-y-[-8px] italic'>
                        <div>
                            <p>
                                <span>{PreviousMatchCardData.teams.home.name}</span> <span className='bg-white not-italic px-2 ml-2'>{PreviousMatchCardData.goals.home}</span>
                            </p>
                        </div>
                        <div >
                            <p className='text-xl font-light not-italic'>
                                <span>vs</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>{PreviousMatchCardData.teams.away.name}</span> <span className='bg-white not-italic px-2 ml-2'>{PreviousMatchCardData.goals.away}</span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <img src={PreviousMatchCardData.teams.away.logo} alt={PreviousMatchCardData.teams.away.name} className='w-20 m-auto aspect-auto' />
                    </div>
                </div>
                <div className='bg-green-500 w-full text-xs font-light py-1 tracking-widest'>www.portalverdolaga.com</div>
            </div>
        </motion.div>
    );
}

export default PreviousMatchCard