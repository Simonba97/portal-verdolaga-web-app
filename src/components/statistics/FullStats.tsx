import { IStatisticsInsideMatchData } from '../../models/IFixturesItem';
import MessageCard from '../MessageCard';
import { TypesStatistics, TypesStatisticsES } from '../../utils/TypesStatistics';

const FullStats = ({ matchStats, isLoading, error }: { matchStats: IStatisticsInsideMatchData[] | undefined, isLoading: boolean, error: any }) => {
    if (isLoading) {
        return (
            <MessageCard titleMsj='Cargando información...' descMsj='Por favor espere...' isLoading={true} />
        );
    }

    if (!matchStats || error) {
        return (
            <MessageCard titleMsj='Sin información disponble' descMsj='No se encontraron estadísticas para este partido' />
        );
    }

    const homeTeamStats = {
        teamName: matchStats[0].team.name,
        [TypesStatistics.BallPossession]: matchStats[0].statistics.find(event => event.type == TypesStatistics.BallPossession)?.value,
        [TypesStatistics.TotalShots]: matchStats[0].statistics.find(event => event.type == TypesStatistics.TotalShots)?.value,
        [TypesStatistics.ShotsOnGoal]: matchStats[0].statistics.find(event => event.type == TypesStatistics.ShotsOnGoal)?.value,
        [TypesStatistics.ShotsOffGoal]: matchStats[0].statistics.find(event => event.type == TypesStatistics.ShotsOffGoal)?.value,
        [TypesStatistics.Fouls]: matchStats[0].statistics.find(event => event.type == TypesStatistics.Fouls)?.value,
        [TypesStatistics.CornerKicks]: matchStats[0].statistics.find(event => event.type == TypesStatistics.CornerKicks)?.value,
        [TypesStatistics.Offsides]: matchStats[0].statistics.find(event => event.type == TypesStatistics.Offsides)?.value,
        [TypesStatistics.YellowCards]: matchStats[0].statistics.find(event => event.type == TypesStatistics.YellowCards)?.value,
        [TypesStatistics.RedCards]: matchStats[0].statistics.find(event => event.type == TypesStatistics.RedCards)?.value,
        [TypesStatistics.TotalPasses]: matchStats[0].statistics.find(event => event.type == TypesStatistics.TotalPasses)?.value,
        [TypesStatistics.PassesAccurate]: matchStats[0].statistics.find(event => event.type == TypesStatistics.PassesAccurate)?.value,
        [TypesStatistics.PassesPercentage]: matchStats[0].statistics.find(event => event.type == TypesStatistics.PassesPercentage)?.value,
    };

    const awayTeamStats = {
        teamName: matchStats[1].team.name,
        [TypesStatistics.BallPossession]: matchStats[1].statistics.find(event => event.type == TypesStatistics.BallPossession)?.value,
        [TypesStatistics.TotalShots]: matchStats[1].statistics.find(event => event.type == TypesStatistics.TotalShots)?.value,
        [TypesStatistics.ShotsOnGoal]: matchStats[1].statistics.find(event => event.type == TypesStatistics.ShotsOnGoal)?.value,
        [TypesStatistics.ShotsOffGoal]: matchStats[1].statistics.find(event => event.type == TypesStatistics.ShotsOffGoal)?.value,
        [TypesStatistics.Fouls]: matchStats[1].statistics.find(event => event.type == TypesStatistics.Fouls)?.value,
        [TypesStatistics.CornerKicks]: matchStats[1].statistics.find(event => event.type == TypesStatistics.CornerKicks)?.value,
        [TypesStatistics.Offsides]: matchStats[1].statistics.find(event => event.type == TypesStatistics.Offsides)?.value,
        [TypesStatistics.YellowCards]: matchStats[1].statistics.find(event => event.type == TypesStatistics.YellowCards)?.value,
        [TypesStatistics.RedCards]: matchStats[1].statistics.find(event => event.type == TypesStatistics.RedCards)?.value,
        [TypesStatistics.TotalPasses]: matchStats[1].statistics.find(event => event.type == TypesStatistics.TotalPasses)?.value,
        [TypesStatistics.PassesAccurate]: matchStats[1].statistics.find(event => event.type == TypesStatistics.PassesAccurate)?.value,
        [TypesStatistics.PassesPercentage]: matchStats[1].statistics.find(event => event.type == TypesStatistics.PassesPercentage)?.value,
    };

    return (
        <div>
            {/* <div className='max-w-fit text-center m-auto bg-green-400 px-3 relative top-3'>
                <div>
                    <p className='text-xl -white'>
                        <span>Estadísticas</span>
                    </p>
                </div>
            </div> */}
            <div className='w-full bg-gray-100 px-1 py-2 text-center justify-center text-gray-800' >
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.BallPossession] ? homeTeamStats[TypesStatistics.BallPossession] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.BallPossession}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.BallPossession] ? awayTeamStats[TypesStatistics.BallPossession] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.TotalShots] ? homeTeamStats[TypesStatistics.TotalShots] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.TotalShots}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.TotalShots] ? awayTeamStats[TypesStatistics.TotalShots] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.ShotsOnGoal] ? homeTeamStats[TypesStatistics.ShotsOnGoal] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.ShotsOnGoal}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.ShotsOnGoal] ? awayTeamStats[TypesStatistics.ShotsOnGoal] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.ShotsOffGoal] ? homeTeamStats[TypesStatistics.ShotsOffGoal] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.ShotsOffGoal}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.ShotsOffGoal] ? awayTeamStats[TypesStatistics.ShotsOffGoal] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.Fouls] ? homeTeamStats[TypesStatistics.Fouls] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.Fouls}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.Fouls] ? awayTeamStats[TypesStatistics.Fouls] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.CornerKicks] ? homeTeamStats[TypesStatistics.CornerKicks] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.CornerKicks}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.CornerKicks] ? awayTeamStats[TypesStatistics.CornerKicks] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.Offsides] ? homeTeamStats[TypesStatistics.Offsides] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.Offsides}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.Offsides] ? awayTeamStats[TypesStatistics.Offsides] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.YellowCards] ? homeTeamStats[TypesStatistics.YellowCards] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.YellowCards}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.YellowCards] ? awayTeamStats[TypesStatistics.YellowCards] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.RedCards] ? homeTeamStats[TypesStatistics.RedCards] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.RedCards}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.RedCards] ? awayTeamStats[TypesStatistics.RedCards] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.TotalPasses] ? homeTeamStats[TypesStatistics.TotalPasses] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.TotalPasses}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.TotalPasses] ? awayTeamStats[TypesStatistics.TotalPasses] : 0}</span></div>
                </div>
                <div className='flex flex-row border-b'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.PassesAccurate] ? homeTeamStats[TypesStatistics.PassesAccurate] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.PassesAccurate}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.PassesAccurate] ? awayTeamStats[TypesStatistics.PassesAccurate] : 0}</span></div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span className=''>{homeTeamStats[TypesStatistics.PassesPercentage] ? homeTeamStats[TypesStatistics.PassesPercentage] : 0}</span></div>
                    <div className='w-1/2'><span className=''>{TypesStatisticsES.PassesPercentage}</span></div>
                    <div className='w-1/4'><span className=''>{awayTeamStats[TypesStatistics.PassesPercentage] ? awayTeamStats[TypesStatistics.PassesPercentage] : 0}</span></div>
                </div>
            </div>
        </div>

    );

}


export default FullStats