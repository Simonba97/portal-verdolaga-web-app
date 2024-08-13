import { ITeamsInformationResponse } from '../models/IFixturesItem';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../utils/animationConstants';

const TeamDetail = ({ teamData, formTeam }: { teamData: ITeamsInformationResponse, formTeam: string }) => {

    const normalizedFormTeam: string[] = formTeam.split('');
    return (
        <motion.div id="teamDetailContainer" className='w-full mb-5 flex justify-center' {...fadeInAnimation}>
            <div className='w-[60%]'>
                <div className='max-w-fit text-center m-auto bg-green-400 px-3 py-1 relative top-4'>
                    <div>
                        <p className='text-lg font-normal text-gray-100'>
                            <span>CALENDARIO</span>
                        </p>
                    </div>
                </div>
                <div className='bg-gray-100 flex flex-col text-center items-center'>
                    <div className='pt-1 mb-2 font-light z-10'>
                        <div id={`nameTeam-${teamData.team.id}`}>
                            <span className='text-xl font-normal italic text-gray-800'>{teamData.team.name}</span>
                        </div>
                        <div id={`logoTeam-${teamData.team.id}`}>
                            <img src={teamData.team.logo} alt={teamData.team.name} className='w-14 m-auto' />
                        </div>
                        <div id={`formTeam-${teamData.team.id}`} className='space-x-1 mt-1'>
                            {normalizedFormTeam.map(form =>
                                <span className={`text-sm font-normal px-1 ${form === 'V' ? 'bg-green-400' : form === 'D' ? 'bg-red-500' : 'bg-yellow-400'}`}>{form}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TeamDetail