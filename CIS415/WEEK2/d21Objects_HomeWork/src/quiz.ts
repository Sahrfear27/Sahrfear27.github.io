
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

// const CORRECT_ANSWERS = [3, 1, 2, 4];

export function gradeStudent(student: StudentQuiz, correctAns: number[]): number {
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

student1;
student2;
student3;

type LabeledScore = {
    id: number,
    score: number,

}
export function gradeQuizLabeled(quizArray: StudentQuiz[], correctAnswer: number[]): LabeledScore[] {

   
    let result: LabeledScore[] = [];
    for(const students of quizArray){
        // Get the student id of all the student
        const studentId = students.studentId;

        // Get each studnet answer
        const studentAnswers = students.quizAnswers;


        let studentScore = 0;
        // Loop through the student answer and compare with the correctAnswer
        for (let i = 0; i < studentAnswers.length; i++) {
           if(studentAnswers[i] === correctAnswer[i]){
            studentScore +=1;
           }
        }
        result.push({id: studentId, score:studentScore});
    }
    return result;
}

