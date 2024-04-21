import { ITeamsInformationResponse } from '../models/IFixturesItem';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '../utils/animationConstants';

const TeamDetail = ({ teamData }: { teamData: ITeamsInformationResponse }) => {
    return (
        <motion.div className='w-full mb-5 flex justify-center' {...fadeInAnimation}>
            <div className='w-[60%]'>
                <div className='max-w-fit text-center m-auto bg-green-400 px-3 py-1 relative top-4'>
                    <div>
                        <p className='text-lg font-normal text-white'>
                            <span>CALENDARIO</span>
                        </p>
                    </div>
                </div>
                <div className='bg-gray-100 flex flex-col text-center items-center'>
                    <div className='pt-1 mb-2 font-light z-10'>
                        <div>
                            <p className='text-xl font-normal italic'>
                                <span>{teamData.team.name}</span>
                            </p>
                        </div>
                        <div>
                            <img src={teamData.team.logo} alt={teamData.team.name} className='w-14 m-auto' />
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TeamDetail