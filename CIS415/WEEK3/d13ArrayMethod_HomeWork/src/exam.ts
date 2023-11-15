type Session = {
    userId: number,
    duration: number,
}

type Day = {
    sessions: Session[],
    date: string,
}


// const session1 = { userId: 1, duration: 60 };
// const session2 = { userId: 2, duration: 45 };
// const session3 = { userId: 2, duration: 30 };
// const session4 = { userId: 3, duration: 15 };
// const session5 = { userId: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
// const dailyRecord: Day[] = [day1, day2];

// function dailTota(dailyRecords: Day[]): number {
//     return dailyRecords.reduce((totalDuration, days) => {
//         return totalDuration + days.sessions.reduce((totalDay, session)=>{
//             return totalDay + session.duration;
//         },0)
//     }, 0)
// }

// export function calculateDailyTotalDuration(dailyRecords: Day[]): number{

//     let totalDuration  = 0;
//     // Loop through the daily record
//     for(let day of dailyRecords){ //return day1 and day2

//         // Loop through the session of each day
//         for(let session of day.sessions){ //return all the session

//             // Get the duration
//             totalDuration += session.duration
//         }
//     }

//     return totalDuration;
// }

// Using the reduce Method
export function calculateDailyTotalDuration(dailyRecords: Day[]): number {

    return dailyRecords.reduce((totalDuration, day) => {
        return totalDuration + day.sessions.reduce((dayTotal, session) => {
            return dayTotal + session.duration;
        }, 0);
    }, 0);
}


export function calculateTotalDuration(dailyRecord: Day[]): number {
    let totalDuration = 0;
    // Loop through the daily record
    for (let day of dailyRecord) {

        let totalDays = calculateDailyTotalDuration([day]); //This function expect an array of day objects
        totalDuration += totalDays;
    }
    return totalDuration;
}


//Write a function getAllSessions that will use the concat method to return an array with all  the sessions in the dailyRecord.
export function getAllSessions(dailyRecord: Day[]): Session[] {
    let allSessions: Session[] = [];
    for (let day of dailyRecord) { //Return days
        for (let session of day.sessions) {
            allSessions = allSessions.concat(session);
        }
    }
    return allSessions;
}

export function getAllSessionsForUser(dailyRecord: Day[], id: number): Session[] {
    // Using filter to get all the sessions from a given id in th getAllSession Function
    return getAllSessions(dailyRecord).filter((session) => session.userId === id);

}

export function getAllDurations(dailyRecord: Day[]): number[] {
    // Using filter to get all the sessions from a given id in th getAllSession Function
    return getAllSessions(dailyRecord).map((session) => session.duration);

}