
/* Write a program to compute student grades and the average score for the class.  Your program should have a quiz object that will contain properties of
 “students” and “key”. 
  
The “students” property will be an array of student objects of the following form:
student10 = {sid: 10, answers: [{qid: 2, ans: “b”}, {qid: 3, ans: “a”}, {qid: 1, ans: “b”}] }
It has a property “sid” (student id) and another property “answers”.  The answer property holds an array that records the students answers for the quiz. 
The array holds objects that have a question id (“qid”) property that uniquely identifies the question, and an “ans” property that holds the student’s answer.

The ”key” property of the quiz will hold an array with objects that give the correct answers.  

Create an object named quiz with the following methods
•	getAverage(), computes the average score over all students, 
•	scoreStudent(sid), computes the quiz score for this student

The answer arrays might not have the questions in the same order.  
Write a function, answerComparator, that you can use to sort the answer arrays by the quiz id, “qid”.   
You may assume that there will be answer objects for every question so that once they are sorted they arrays will have the student answers and the corresponding 
key answer in the same position of each array.  Score 1 point for each answer that matches the key.
*/

type Answer = {
    qid: number;
    ans: string;
}

type Student = {
    sid: number;
    answers: Answer[];
}

type Quiz = {
    students: Student[];
    key: Answer[];
    scoreStudent: (sid: number) => number; // Function type for scoreStudent
    getAverage: () => number; // Function type for getAverage
}

// Initialize quiz object
export const quiz: Quiz = {
    students: [
        { sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
        { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
        { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }
    ],
    key: [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }],
    scoreStudent: function (sid: number): number {
        // Check if student exist
        let student = quiz.students.find((student)=> student.sid === sid);

        // If studnet is found create sorted array for student and key anwsers
        if (student){
            // Sort the student answers and the student keys
            const sortedStudentAnswer = [...student.answers].sort((a,b)=> a.qid - b.qid);
            const sortedKeys = [...this.key].sort((a,b)=> a.qid - b.qid);

            //Assign student score to 0
            let score = 0;
            // Compare each student answer with the corresponding key answers
            for (let i = 0; i < sortedStudentAnswer.length; i++) {
                if(sortedStudentAnswer[i].ans === sortedKeys[i].ans){
                 score += 1;
                }
                 
             }
            return score;
        }
        else{
            console.log(`Student with is ${sid} is not found`);
            return 0;
        }
    },
    getAverage: function (): number {
        // Get the total number of the student and the questions
        const totalStudent = this.students.length;
        const totalQuestions = this.key.length;

        if(totalStudent === 0 || totalQuestions === 0){
            console.log(`No student in this quiz`);
            return 0;
        }

        
            let totalScore = 0;
            for(let student of this.students){ //return the student of the quiz
                // Add the student score to the total score
                totalScore += this.scoreStudent(student.sid);
            }
        
        // Calculate average base on total number of questions
        return totalScore / totalQuestions;
    }
};

/**
 * Comparator function for sorting answer arrays based on the question id ("qid").
 * @param {Answer} ans1 - Answer object 1
 * @param {Answer} ans2 - Answer object 2
 * @returns {number} - Difference of the question ids
 */
// function answerComparator(ans1:Answer, ans2:Answer):number {
//     if(ans1.ans > ans2.ans){
//         return 1
//     }
//     if(ans1.ans === ans2.ans){
//         return 0;
//     }

//     if(ans1.ans < ans2.ans){
//         return -1
//     }
//     return 0;
// }
