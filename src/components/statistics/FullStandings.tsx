import { IRowStanding } from '../../models/IFixturesItem';
import { Global } from '../../utils/Global';
import { TypeStatusStandings } from '../../utils/TypesStatusStandings';
import MessageCard from '../MessageCard';

const FullStandings = ({ standingsData, isLoading, error }: { standingsData: IRowStanding[], isLoading: boolean, error: any }) => {
    if (isLoading) {
        return (
            <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={true} />
        );
    }

    if (!standingsData || error) {
        return (
            <MessageCard titleMsj='Sin información disponble' descMsj='No se encontraron estadísticas para este partido' />
        );
    }

    return (
        <div>
            {/* <div className='max-w-fit text-center m-auto bg-green-400 px-3 relative top-3'>
                <div>
                    <p className='text-xl font-normal italic text-white'>
                        <span>Tabla de posiciones</span>
                    </p>
                </div>
            </div> */}
            <div className='bg-gray-100 ' >
                <div className=''>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className='bg-gray-300'>
                                <th className="p-1 font-normal"><span>POS</span></th>
                                <th className="p-1 text-start font-normal"></th>
                                <th className="p-1 text-start font-normal"><span>EQUIPO</span></th>
                                <th className="p-1 font-normal"><span>PJ</span></th>
                                <th className="p-1 font-normal"><span>V</span></th>
                                <th className="p-1 font-normal"><span>E</span></th>
                                <th className="p-1 font-normal"><span>D</span></th>
                                <th className="p-1 font-normal"><span>DIF</span></th>
                                <th className="p-1 font-normal"><span>PTOS</span></th>
                            </tr>
                        </thead>
                        <tbody >
                            {standingsData.map(row => (
                                <tr key={`rowStandingTeam-${row.team.id}`} className={`${row.team.id === Global.NACIONAL_ID_API_FOOTBALL ? 'bg-green-200 font-normal' : 'font-extralight'}`}>
                                    <td className={`text-center border-b`}>
                                        <div className={`text-center ml-0.5 ${row.description === 'Next Round' && 'border-l-green-500 border-l-4'}`}>
                                            <span>{row.rank}</span>
                                        </div>
                                    </td>
                                    <td className='text-center border-b'>
                                        {row.status === TypeStatusStandings.Up &&
                                            <div id='status' className='stroke-green-500'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </div>
                                        }
                                        {row.status === TypeStatusStandings.Down &&
                                            <div id='status' className='stroke-red-600'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" className="w-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </div>
                                        }
                                    </td>
                                    <td className='px-1 border-b'>
                                        <div className='flex items-center'>
                                            <span>{row.team.name}</span>
                                        </div>
                                    </td>
                                    <td className='text-center border-b border-r'>
                                        <span>{row.all.played}</span>
                                    </td>
                                    <td className='text-center border-b'>
                                        <span>{row.all.win}</span>
                                    </td>
                                    <td className='text-center border-b'>
                                        <span>{row.all.draw}</span>
                                    </td>
                                    <td className='text-center border-b'>
                                        <span>{row.all.lose}</span>
                                    </td>
                                    <td className='text-center border-b border-l border-r'>
                                        <span>{row.goalsDiff}</span>
                                    </td>
                                    <td className='text-center border-b font-normal'>
                                        <span>{row.points}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div id="informationStandings" className="w-full  m-auto items-center px-4 py-3 text-sm bg-gray-300">
                    <div className='font-medium uppercase italic text-gray-600'>
                        <div className={`border-l-green-500 border-l-4`}>
                            <span className='ml-2'>Siguiente ronda</span>
                        </div>
                        <ul className="list-decimal list-inside mt-3">
                            <li><span className='ml-2'>Diferencias de goles</span></li>
                            <li><span className='ml-2'>Goles marcados</span></li>
                            <li><span className='ml-2'>Goles marcados de visitante</span></li>
                            <li><span className='ml-2'>Goles de local en contra</span></li>
                        </ul>

                    </div>
                </div>

            </div >
        </div >

    );

}


export default FullStandings