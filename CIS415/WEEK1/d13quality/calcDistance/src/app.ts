

export function coordinateXY(x1: number, y1: number, x2: number, y2: number) {
   
    let xDistance = (x2 - x1) ** 2;
    let yDistance = (y2 - y1) ** 2;
    let sumDistance = xDistance + yDistance;
    let distance = Math.sqrt(sumDistance);
    return distance;
}

console.log("expect 7.07 : ", coordinateXY (0, 0, 5, 5))
console.log("expect 7.62 : ", coordinateXY (5, 7, 12, 10))
console.log("expect 5.83: ", coordinateXY (5, 7, 10, 10))


