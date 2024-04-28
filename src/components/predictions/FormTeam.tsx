import { motion } from 'framer-motion';
import { fadeInAnimation } from '../../utils/animationConstants';
import { ITeam } from "../../models/ITeam";

const FormTeam = ({ teamInfo, formString }: { teamInfo: ITeam, formString: string | undefined }) => {
    let formResult: string[] = [];
    if (formString) {
        formResult = formString.split('').slice(-5);
    }
    return (
        <motion.div className='w-full py-3 bg-gray-100 border-r' {...fadeInAnimation}>
            <div id="teamInformation" className='flex-row'>
                <div className='flex justify-center'>
                    {/* Logo */}
                    <img src={teamInfo.logo} alt={teamInfo.name} className='h-12' />
                </div>
                <div className='flex justify-center'>
                    {/* Nombre */}
                    <span>{teamInfo.name}</span>
                </div>
            </div>
            <div id="formBody" className='flex justify-center space-x-1'>
                {formResult.map(form =>
                    <span className={`text-sm font-normal px-1 ${form === 'W' ? 'bg-green-400' : form === 'L' ? 'bg-red-500' : 'bg-yellow-400'}`}>{form}</span>
                )}
            </div>
        </motion.div>
    )
}

export default FormTeam