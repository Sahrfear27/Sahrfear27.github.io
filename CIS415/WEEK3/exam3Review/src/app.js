// Using the recursion
function evenRec(num) {
    //    Case1
    if (num < 0) {
        return;
    }
    if(num%2 === 0){
        console.log(num)
        return evenRec(num -2);
    }
}
evenRec(7);



let option2 = {
    title: "My menu",
    items : ["Item", "item2"]
}

const {title, items} = option2;
console.log( {title, items} );

function showMenu({title= "Untitle", width = 200, height = 300, items =[] }){
    console.log(title)
    console.log(width)
    console.log(height)
    console.log(items);
}
showMenu(option2)