import { IRowStanding } from '../../models/IFixturesItem';
import { Global } from '../../utils/Global';
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
            <div className='bg-gray-100 px-1 py-2' >
                <table className="table-auto w-full">
                    <thead>
                        <tr className='bg-gray-300'>
                            <th className="p-1 font-normal"><span>POS</span></th>
                            <th className="p-1 text-start font-normal"><span>EQUIPO</span></th>
                            <th className="p-1 font-normal"><span>PJ</span></th>
                            <th className="p-1 font-normal"><span>V</span></th>
                            <th className="p-1 font-normal"><span>E</span></th>
                            <th className="p-1 font-normal"><span>D</span></th>
                            <th className="p-1 font-normal"><span>DIF</span></th>
                            <th className="p-1 font-normal"><span>PTOS</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {standingsData.map(row => (
                            <tr className={`${row.team.id === Global.NACIONAL_ID_API_FOOTBALL ? 'bg-green-200 font-normal' : 'font-extralight'}`}>
                                <td className='text-center border-l border-b'>{row.rank}</td>
                                <td className='px-1 border-b'>{row.team.name}</td>
                                <td className='text-center border-b border-r'>{row.all.played}</td>
                                <td className='text-center border-b'>{row.all.win}</td>
                                <td className='text-center border-b'>{row.all.draw}</td>
                                <td className='text-center border-b'>{row.all.lose}</td>
                                <td className='text-center border-b border-l border-r'>{row.goalsDiff}</td>
                                <td className='text-center border-b font-normal border-r'>{row.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );

}


export default FullStandings