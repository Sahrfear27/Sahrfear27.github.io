// export {
//   collectRoomNumbers, collectRoomsAndCapacities, collectLabeledRoomCapscountStudentsInClassroom,
//   findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge
// };  //implement these
export const classrooms = [
    {
        roomNumber: 101,
        capacity: 30,
        students: [
            { name: "Alice", age: 18 },
            { name: "Bob", age: 19 },
            { name: "Charlie", age: 17 },
        ],
    },
    {
        roomNumber: 102,
        capacity: 25,
        students: [
            { name: "David", age: 20 },
            { name: "Eve", age: 18 },
        ],
    },
    {
        roomNumber: 103,
        capacity: 35,
        students: [
            { name: "Frank", age: 19 },
            { name: "Grace", age: 20 },
            { name: "Helen", age: 17 },
        ],
    },
];
// Return all the room numbers
export function collectRoomNumbers() {
    const rooms = [
        { roomNumber: 101, capacity: 30, students: [] },
        { roomNumber: 102, capacity: 25, students: [] },
        { roomNumber: 103, capacity: 35, students: [] },
    ];
    // Loop through the rooms
    const totalRoom = rooms.map((room) => room.roomNumber);
    return totalRoom;
}
export function collectRoomsAndCapacities() {
    const rooms = [
        { roomNumber: 101, capacity: 30, students: [] },
        { roomNumber: 102, capacity: 25, students: [] },
        { roomNumber: 103, capacity: 35, students: [] },
    ];
    let roomCapacities = [];
    for (let room of rooms) {
        let roomNum = room.roomNumber + "";
        let roomCap = room.capacity + "";
        let capacities = roomNum + "::" + roomCap;
        roomCapacities.push(capacities);
    }
    return roomCapacities;
}
export function collectLabeledRoomCaps() {
    const rooms = [
        { roomNumber: 101, capacity: 30, students: [] },
        { roomNumber: 102, capacity: 25, students: [] },
        { roomNumber: 103, capacity: 35, students: [] },
    ];
    let label = rooms.map((rooms) => ({
        roomNumber: rooms.roomNumber,
        capacity: rooms.capacity,
    }));
    return label;
}
export function countStudentsInClassroom(classRoom, classRoomNumber) {
    let count = 0;
    // Check the rooms 
    for (let room of classRoom) {
        if (room.roomNumber === classRoomNumber) { //check if room number matches
            // Return the number of student of that room
            count += room.students.length;
        }
    }
    return count;
}
export function findClassroomsWithCapacity(classRoom, minCapacity) {
    // Use filter to search for all the classes with capacity >= minCapacity
    return classRoom.filter((classes) => classes.capacity >= minCapacity)
        //  Use map to transform the new array to an array of object
        .map((classRoom) => ({ roomNumber: classRoom.roomNumber, capacity: classRoom.capacity }));
}
export function findStudentsOlderThan(classRoom, minAge) {
    // Use filter to find the student min age and transform it to an array of object
    const olderStudent = [];
    // Use the for of loop
    for (let classes of classRoom) {
        for (let student of classes.students) {
            if (student.age > minAge) {
                const obj = {
                    name: student.name,
                    age: student.age,
                };
                olderStudent.push(obj);
            }
        }
    }
    return olderStudent;
}
// let oldest = classRoom.reduce((count:[], currentStudent)=> {
//   for(let students of currentStudent.students){
//     if(students.age > minAge){
//       count.concat(students)
//     }
//   }
// }, [])
// return oldest;
// return classRoom.filter((classes)=> classes.students.filter((student)=> student.age > minAge))
// .map((classes)=> classes.students.map((details)=> ({name:details.name, age:details.age})) );
/*
1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this
string format:  [“101::30”, :102::25”, “103::35”].
3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object
format [{roomNumber: 101, capacity: 30} , …  ]
4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a
roomNumber as parameters and returns the number of students in the specified classroom.
5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
 minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum
age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns
the average age of students across all classrooms.
 */
