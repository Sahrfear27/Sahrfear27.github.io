/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
import { gradeStudent, gradeQuiz, gradeQuizLabeled } from "../src/quiz.js"; //import all of the app.js functions used in the Mocha tests
describe("quiz tests", function () {
    const student1 = {
        studentId: 101,
        quizAnswers: [1, 1, 2, 4]
    };
    const student2 = {
        studentId: 102,
        quizAnswers: [2, 1, 2, 2]
    };
    const student3 = {
        studentId: 103,
        quizAnswers: [3, 1, 3, 4]
    };
    //    Get the quiz for all the student
    let stu1 = student1.quizAnswers;
    let stu2 = student2.quizAnswers;
    let stu3 = student3.quizAnswers;
    const quizAnswers = [stu1, stu2, stu3];
    const CORRECT_ANSWERS = [3, 1, 2, 4];
    // How do i read from the obj type to add the quizes result to the
    const studentQuizzes = [student1, student2, student3];
    it("gradeStudent -- grade for 1 student", function () {
        assert.deepEqual(gradeStudent(student1, CORRECT_ANSWERS), 3);
    });
    it("gradeStudent -- grade for 2 student", function () {
        assert.deepEqual(gradeStudent(student2, CORRECT_ANSWERS), 2);
    });
    it("gradeStudent -- grade for 3 student", function () {
        assert.deepEqual(gradeStudent(student3, CORRECT_ANSWERS), 3);
    });
    it("gradeQuiz -- grade for all students", function () {
        assert.deepEqual(gradeQuiz(quizAnswers, CORRECT_ANSWERS), [3, 2, 3]);
    });
    it("gradeQuizLabeled -- labeled objects grades for all students", function () {
        assert.deepEqual(gradeQuizLabeled(studentQuizzes, CORRECT_ANSWERS), [{ id: 101, score: 3 }, { id: 102, score: 2 }, { id: 103, score: 3 }]);
    });
});
