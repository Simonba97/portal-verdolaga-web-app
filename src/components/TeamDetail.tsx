import { ITeamsInformationResponse } from '../models/IFixtureItem';

const TeamDetail = ({ teamData }: { teamData: ITeamsInformationResponse }) => {
    return (
        <div>{teamData.team.name}</div>
    )
}

export default TeamDetail