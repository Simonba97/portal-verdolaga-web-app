import { useState, useEffect } from 'react';
import { IFixtureResponse } from '../models/IFixturesItem';
import { TypesStatusFixturesShort } from '../utils/TypesStatusFixtures';

const useLastMatchSummary = (fixtureData: IFixtureResponse[] | null, normalizedTeamId: number) => {
    const [summaryLastMatchs, setSummaryLastMatchs] = useState<string>('');

    useEffect(() => {
        if (fixtureData) {
            const matchFinished = fixtureData.filter(match => match.fixture.status.short === TypesStatusFixturesShort.MatchFinished).slice(-5).reverse();
            let summary = '';

            matchFinished.forEach(match => {
                const homeTeamId = match.teams.home.id;
                const awayTeamId = match.teams.away.id;
                const homeTeamWinner = match.teams.home.winner;
                const awayTeamWinner = match.teams.away.winner;

                if (homeTeamWinner === null && awayTeamWinner === null) {
                    summary += 'E';
                } else if (homeTeamWinner === true && homeTeamId === normalizedTeamId) {
                    summary += 'V';
                } else if (awayTeamWinner === true && awayTeamId === normalizedTeamId) {
                    summary += 'V';
                } else {
                    summary += 'D';
                }
            });

            setSummaryLastMatchs(summary);
        }

    }, [fixtureData, normalizedTeamId]);

    return summaryLastMatchs;
};

export default useLastMatchSummary;
