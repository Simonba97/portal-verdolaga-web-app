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
            <div className='w-full bg-gray-100 px-1 py-2 justify-center' >
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="border p-1"><span>POS</span></th>
                            <th className="border p-1"><span>EQUIPO</span></th>
                            <th className="border p-1"><span>PJ</span></th>
                            <th className="border p-1"><span>V</span></th>
                            <th className="border p-1"><span>E</span></th>
                            <th className="border p-1"><span>D</span></th>
                            <th className="border p-1"><span>DIF</span></th>
                            <th className="border p-1"><span>PTOS</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {standingsData.map(row => (
                            <tr className={`${row.team.id === Global.NACIONAL_ID_API_FOOTBALL ? 'bg-gray-300 font-normal' : 'font-extralight'}`}>
                                <td className='border text-center'>{row.rank}</td>
                                <td className='border px-1'>{row.team.name}</td>
                                <td className='border text-center'>{row.all.played}</td>
                                <td className='border text-center'>{row.all.win}</td>
                                <td className='border text-center'>{row.all.draw}</td>
                                <td className='border text-center'>{row.all.lose}</td>
                                <td className='border text-center'>{row.goalsDiff}</td>
                                <td className='border text-center'>{row.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );

}


export default FullStandings