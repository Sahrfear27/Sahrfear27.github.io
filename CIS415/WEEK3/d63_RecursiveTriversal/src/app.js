
// let company = { // the same object, compressed for brevity
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };

const quiz = {
    students: [
        { sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
        { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
        { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }
    ],
    key: [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }],
    scoreStudent: function (sid) {
        // Check if student exists
        let student = quiz.students.find((student) => student.sid === sid);

        // If student is found, create a sorted array for student and key answers
        if (student) {
            // Sort the student answers and the key answers
            const sortedStudentAnswer = [...student.answers].sort(answerComparator);
            const sortedKeys = [...this.key].sort(answerComparator);

            // Assign student score to 0
            let score = 0;

            // Compare each student answer with the corresponding key answer
            for (let i = 0; i < sortedStudentAnswer.length; i++) {
                if (sortedStudentAnswer[i].ans === sortedKeys[i].ans) {
                    score += 1;
                }
            }
            return score;
        } else {
            console.log(`Student with ID ${sid} is not found`);
            return 0;
        }
    },
    getAverage: function () {
        // Get the total number of students
        const totalStudents = this.students.length;
        const totalQuestions = this.key.length; // Total number of questions

        if (totalStudents === 0 || totalQuestions === 0) {
            console.log(`No students or questions in this quiz`);
            return 0;
        }

        let totalScore = 0;
        for (let student of this.students) {
            // Add the student score to the total score
            totalScore += this.scoreStudent(student.sid);
        }

        // Calculate average based on the total number of questions
        return totalScore / totalQuestions;
    }
};

// function answerComparator(ans1, ans2) {
//     if (ans1.ans > ans2.ans) {
//         return 1;
//     }
//     if (ans1.ans === ans2.ans) {
//         return 0;
//     }

//     if (ans1.ans < ans2.ans) {
//         return -1;
//     }

//     return 0;
// }
function answerComparator(answers) {
    return [...answers].sort((a, b) => a.qid - b.qid);
}


console.log(quiz.scoreStudent(10)); // 1
// console.log(quiz.getAverage()); // Adjusted average calculation
