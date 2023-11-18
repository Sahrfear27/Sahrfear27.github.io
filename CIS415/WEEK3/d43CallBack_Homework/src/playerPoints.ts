

/*Be sure to use meaningful variable names.  
Try to use map and reduce in your functions as appropriate. */

type Player = {
    jersey: number;
    stats: Stats[];
}

type Stats = {
    game: number;
    points: number;
}

type JerseyPoints = {
    jersey: number;
    total: number;
}

// type playerArray = Player | Player[];
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };

export const teamStats = [player1, player2, player3];


export function findTotalPlayerPoints(teamPlayer: Player): number {
    // Using the reduce
    let totalPoint = teamPlayer.stats.reduce((previousPoint, currentPoint) => {
        return previousPoint + currentPoint.points;
    }, 0);
    return totalPoint;
}

export function findTotalPointsByJersey(jerseyNumber: number): number {
    // Initialize point to 0
    let totalPoint = 0;

    // Assign team to the team statics and get the array of players
    let team: Player[] = teamStats;
    for (let player of team) {
        // Check for the jersey number
        if (player.jersey === jerseyNumber) {
            totalPoint += findTotalPlayerPoints(player);
        }
    }
    return totalPoint;
}

export function findTotalScores(teamStats: Player[]): JerseyPoints[] {
    let totalScore: JerseyPoints[] = [];
    for (let player of teamStats) {
        // Get the jersey number
        let jerseys = player.jersey;

        // Get the totalPoint by calling findTotalPointsByJersey and passing in the jerseys number
        let totalPoint = findTotalPointsByJersey(jerseys);
        // Create an object
        let playerDetails = {
            jersey: jerseys,
            total: totalPoint,
        }
        // Push the player object to the totalscore
        totalScore.push(playerDetails);
    }
    return totalScore;
}


