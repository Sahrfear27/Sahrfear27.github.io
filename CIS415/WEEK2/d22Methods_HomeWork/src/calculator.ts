

export const calculator = {

    operand1 : 2,
    operand2 : 3,

    setValues: function(value1:number, value2:number){ 
        value1 = this.operand1;
        value2 = this.operand2;
        return value1 + value2;
    },
    sum:function():number { 
        return (this.operand1 + this.operand2);
    },

    mul: function(): number{ 
         return (this.operand1 * this.operand2)
    },

};

