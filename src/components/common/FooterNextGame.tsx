import { Link } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer'
import { IFixtureResponse } from '../../models/IFixtureItem';
import { useEffect, useState } from 'react';
import { FixtureService } from '../../services/FixtureService';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../utils/animationConstants';

let hasFetchedData: boolean = false;

const FooterNextGame = () => {
    const [NextMatchData, setNextMatchData] = useState<IFixtureResponse | undefined>(undefined);
    const [error, setError] = useState<string | null>(null); // Estado para manejar errores
    const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en curso

    const fixtureService = new FixtureService();

    useEffect(() => {
        const callAsync = async () => {
            try {
                setLoading(true);
                const dataResponse: IFixtureResponse | undefined = await fixtureService.getNextMatch(1137);
                setNextMatchData(dataResponse);
                setLoading(false);
                hasFetchedData = !hasFetchedData;
            } catch (error: any) {
                setError(error.message || 'Error desconocido');
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
            <div className="w-full h-[85px] backdrop-blur-md flex items-center px-4 py-2 fixed bottom-0 left-0 font-semibold text-gray-300 uppercase">
                <motion.div className='w-full text-base sm:text-3xl flex justify-center italic gap-1 drop-shadow-md' {...fadeInAnimation}>
                    <svg aria-hidden="true" className="inline w-8 h-8 animate-spin fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Cargando...</span>
                </motion.div>
            </div>
        );
    }

    if (!NextMatchData || error) {
        return (
            <div className="backdrop-blur-md w-full h-[85px] flex items-center px-4 py-2 fixed bottom-0 left-0 font-semibold text-gray-300 uppercase">
                <motion.div className='w-full text-base sm:text-3xl flex justify-center italic gap-1 drop-shadow-md' {...fadeInAnimation}>
                    <p>Sin información del próximo partido</p>
                </motion.div>
            </div>
        );
    }

    //const targetDate = '2023-12-01T12:00:00';
    const targetDate = format(new Date(NextMatchData.fixture.date), 'yyyy-MM-dd\'T\'HH:mm:ss');
    return (
        <Link to="/next-match">

            <div
                className="w-full h-[85px] gap-1 backdrop-blur-md fixed bottom-0 left-0 font-semibold text-gray-300 uppercase py-2 sm:px-4">
                <motion.div className='flex items-center' {...fadeInAnimation}
                >
                    <div className='text-2xl sm:text-3xl w-1/3 sm:w-1/2 text-center space-y-[-13px] sm:space-y-0 sm:flex sm:justify-end italic gap-1 drop-shadow-md'>
                        <p className='text-green-500'>PRÓXIMO</p><p>PARTIDO</p>
                    </div>
                    <div className='w-[64%] sm:w-1/2 flex justify-center sm:justify-start  italic'>
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                </motion.div>
            </div>

        </Link>

    )
}

export default FooterNextGame