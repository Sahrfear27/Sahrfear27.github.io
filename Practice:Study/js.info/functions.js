function f() 
{
    let a = 1, b = 20, c;
    console.log(a + " " + b + " " + c); // 1 20 undefined
    function g() 
    {
        let b = 300, c = 4000;
        console.log(a + " " + b + " " + c); // 1 300 4000
        a = a + b + c;
        console.log(a + " " + b + " " + c); // 4301 300 4000
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined

    g(); //when this function is called, the value of the global variable is altered
    console.log(a + " " + b + " " + c); // 4301 20 undefined
    
}
    f();



    let x = 10;
    function main() 
    {
      let x = 0;
      console.log("x1 is " + x);
      x = 20;
      console.log("x2 is " + x);
      if (x > 0) {
      x = 30;
      console.log("x3 is " + x);
      }
      console.log("x4 is " + x);
      function f(x) 
      {
        console.log("x5 is " + x); //nothing will be printed unless the function is being called
      }
      f(50);
      console.log("x6 is " + x);
    }
    main();
    console.log("x7 is " + x);
    //Draw the scope chain
    
    // Answer
    x1 = 0
    x2 = 20
    x3 = 30
    x4 = 30
    x5 = 50
    x6 = 30
    x7 = 10