export const calculator = {
    operand1: 2,
    operand2: 3,
    setValues: function (value1, value2) {
        value1 = this.operand1;
        value2 = this.operand2;
        return value1 + value2;
    },
    sum: function () {
        return (this.operand1 + this.operand2);
    },
    mul: function () {
        return (this.operand1 * this.operand2);
    },
};
