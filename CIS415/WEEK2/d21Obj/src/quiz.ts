
export type StudentQuiz = {
    studentId: number,
    quizAnswers: number[]
}

const student1 = {
    studentId: 101,
    quizAnswers: [1, 1, 2, 4]
}

const student2 = {
    studentId: 102,
    quizAnswers: [2, 1, 2, 2]
}

const student3 = {
    studentId: 103,
    quizAnswers: [3, 1, 3, 4]
}
student1;
student2;
student3;
// const CORRECT_ANSWERS = [3, 1, 2, 4];



export function gradeStudent(student: StudentQuiz, correctAns: number[]): number {
    //IMPLEMENT THIS

    // Access the student  quizes using  the key
    const answers = student.quizAnswers;


    // Loop through the parallel array and count the matches and return

    let correct = 0;

    for (let i = 0; i < answers.length; i++) {

        if (answers[i] === correctAns[i]) {
            correct += 1;
        }
    }
    return correct;
}



export function gradeQuiz(studentsArray: number[][], correctAns: number[]): number[] {
 

    let result = [];
    // Loop throught the 2d array to access the  correct answers
    for (let arr = 0; arr < studentsArray.length; arr++) {

        let ans = 0;
        for (let num = 0; num < studentsArray[arr].length; num++) {

            if (studentsArray[arr][num] === correctAns[num]) {
                ans += 1;
            }
        }
        // Push the ans to the arry
        result.push(ans)

    }

    return result;
}
// (studentQuizzes, CORRECT_ANSWERS), [3, 2, 3])


// const studentQuizzes = [student1, student2, student3];
export function gradeQuizLabeled(quizArray :StudentQuiz[], quizKey: number[] ): number[] {
    // This function should return an array of object

    const quizScore: number[] = [];
    for(let student of quizArray){
        let studentScore = gradeStudent(student, quizKey);
        quizScore.push(studentScore);
    }
    return quizScore;
}


// (gradeQuizLabeled(studentQuizzes, CORRECT_ANSWERS), [
//     { id: 101, score: 3 },
//     { id: 102, score: 2 },
//     { id: 103, score: 3 }])



