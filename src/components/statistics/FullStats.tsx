import React from 'react';
import { IFixturesStatisticsResponse } from '../../models/IFixturesItem';
import MessageCard from '../MessageCard';
import { TypesStatistics, TypesStatisticsES } from '../../utils/TypesStatistics';

const FullStats = ({ matchStats, isLoading, error }: { matchStats: IFixturesStatisticsResponse[] | undefined, isLoading: boolean, error: any }) => {

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
        <div className='flex-1'>
            <div className='max-w-fit text-center m-auto bg-green-500 px-3 relative top-3'>
                <div>
                    <p className='text-lg font-normal text-white'>
                        <span>Estadísticas</span>
                    </p>
                </div>
            </div>
            <div className='w-full bg-gray-100 rounded-sm px-1 py-3 text-center justify-center normal-case' >
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.BallPossession] ? homeTeamStats[TypesStatistics.BallPossession] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.BallPossession}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.BallPossession] ? awayTeamStats[TypesStatistics.BallPossession] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.TotalShots] ? homeTeamStats[TypesStatistics.TotalShots] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.TotalShots}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.TotalShots] ? awayTeamStats[TypesStatistics.TotalShots] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.ShotsOnGoal] ? homeTeamStats[TypesStatistics.ShotsOnGoal] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.ShotsOnGoal}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.ShotsOnGoal] ? awayTeamStats[TypesStatistics.ShotsOnGoal] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.ShotsOffGoal] ? homeTeamStats[TypesStatistics.ShotsOffGoal] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.ShotsOffGoal}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.ShotsOffGoal] ? awayTeamStats[TypesStatistics.ShotsOffGoal] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.Fouls] ? homeTeamStats[TypesStatistics.Fouls] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.Fouls}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.Fouls] ? awayTeamStats[TypesStatistics.Fouls] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.CornerKicks] ? homeTeamStats[TypesStatistics.CornerKicks] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.CornerKicks}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.CornerKicks] ? awayTeamStats[TypesStatistics.CornerKicks] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.Offsides] ? homeTeamStats[TypesStatistics.Offsides] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.Offsides}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.Offsides] ? awayTeamStats[TypesStatistics.Offsides] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.YellowCards] ? homeTeamStats[TypesStatistics.YellowCards] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.YellowCards}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.YellowCards] ? awayTeamStats[TypesStatistics.YellowCards] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.RedCards] ? homeTeamStats[TypesStatistics.RedCards] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.RedCards}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.RedCards] ? awayTeamStats[TypesStatistics.RedCards] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.TotalPasses] ? homeTeamStats[TypesStatistics.TotalPasses] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.TotalPasses}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.TotalPasses] ? awayTeamStats[TypesStatistics.TotalPasses] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.PassesAccurate] ? homeTeamStats[TypesStatistics.PassesAccurate] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.PassesAccurate}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.PassesAccurate] ? awayTeamStats[TypesStatistics.PassesAccurate] : 0}</div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-1/4'><span>{homeTeamStats[TypesStatistics.PassesPercentage] ? homeTeamStats[TypesStatistics.PassesPercentage] : 0}</span></div>
                    <div className='w-1/2'><span className='font-extralight text-sm'>{TypesStatisticsES.PassesPercentage}</span></div>
                    <div className='w-1/4'>{awayTeamStats[TypesStatistics.PassesPercentage] ? awayTeamStats[TypesStatistics.PassesPercentage] : 0}</div>
                </div>
            </div>
        </div>

    );



}


export default FullStats