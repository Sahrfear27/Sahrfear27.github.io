function createdElements(){
    //  Change Text of Div,P,textInput,link
    // Create a div
    let div = document.createElement('div');
    div.innerHTML = "This is a div document created";
    div.setAttribute('class','myClass');
    div.style.color = "blue";
    div.style.fontStyle = "italic";
    document.body.append(div);
 
    // Create a p for
    let p = document.createElement('p');
    p.innerHTML = "This is a paragraph created ";
    p.style.color = "red";
    p.style.textAlign = "center";
    document.body.append(p);

    // Create labels and Text inputs
    let label  = document.createElement('label');
    label.innerHTML = "First Name";
    label.setAttribute('for','firstName'); //add the attribute
    document.body.append(label);

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'fName');
    input.setAttribute('name', 'firstName');
    input.value = "Sahrfear"
    input.style.backgroundColor = "black";
    input.style.color = "white";
    document.body.append(input) ;

    

    label  = document.createElement('label');
    label.innerHTML = "<br>Last Name";
    label.setAttribute('for','secondName');
    document.body.append(label);

    input = document.createElement('input');
    input.setAttribute('type', 'text',);
    input.setAttribute('name', 'secondName');
    input.setAttribute('id', 'lName',);
    input.value = "Macarthy"
    input.style.backgroundColor = "green";
    input.style.color = "white";
    document.body.append(input);

    // Link element and add an address
    let a = document.createElement('a');
    a.innerHTML = "<br>Click Here<br>";
    a.setAttribute('href','https://www.nike.com');
    a.style.fontStyle ="italic";
    a.style.textDecoration = "none";
    document.body.append(a);
    

    // Change the image whn the div class is selected
    let img = document.createElement('img');
    img.setAttribute('src', 'Images/wolf.png'); // Set the image URL
    img.setAttribute('width', '200'); // Set the width to 200 pixels
    img.setAttribute('height', '150'); // Set the height to 150 pixels
    document.body.append(img);

    // Change the value of the input
    let updateFirstName = document.getElementById('fName');
    updateFirstName.value = "Kai";
    let updateLastName = document.getElementById('lName');
    updateLastName.value = "Vixon";


    // Creatig a table
    // Creating a table of ordered and unordered list
    let table = document.createElement('table');
    table.setAttribute('id', 'myTable');
    
    // Create the table row, header and data
    let tr = document.createElement('tr');
    table.appendChild(tr);

    let th = document.createElement('th');
    th.innerHTML = "Ordered List";
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerHTML = "Unordered List";
    tr.appendChild(th);

    // Second Row First Column
    tr = document.createElement('tr');

    // first data
    let td = document.createElement('td');

    //create ol node
    let ol = document.createElement('ol'); 
    td.appendChild(ol); //append ol to td

    //create li node
    let li = document.createElement('li');
    li.innerHTML = "C++"; 
    ol.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = "Javascript"; 
    ol.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = "Python"; 
    ol.appendChild(li);
    
    //add the table data to the table row
    tr.appendChild(td);

    // Append the new row to the table
    table.appendChild(tr); 

    // Second Row Second Column
    // Second Data
    td = document.createElement('td')

    // Create ul node
    let ul = document.createElement('ul');
    td.appendChild(ul);

    li = document.createElement('li');
    li.innerHTML = "CSS"; 
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = "HTML"; 
    ul.appendChild(li);

    li = document.createElement('li');
    li.innerHTML = "C#"; 
    ul.appendChild(li);

    tr.appendChild(td); //add data to the row
    table.appendChild(tr); //add row to the table
    document.body.append(table);

    // let tab = document.createElement('table');
    // tab.setAttribute('id', 'myTable');
    // tab.innerHTML = `
    // <tr><th class='table-header'>First</th><th class='table-header'>Second</th><th class='table-header'>Third</th></tr>
    //  <tr><td>1</td><td>2</td><td>3</td></tr>`;
    // document.body.append(tab);

    // // Add CSS styling
    // let styleElement = document.createElement('style');
    // styleElement.innerHTML = `
    //     #myTable {
    //         border-collapse: collapse;  /* Optional: To collapse table borders */
    //     }

    //     .table-header {
    //         border: 1px solid black;  /* Add a border to table headers */
    //     }

    //     #myTable td {
    //         border: 1px solid black;  /* Add a border to table cells (optional) */
    //     }
    // `;

    // document.head.appendChild(styleElement);

    // Clear Text Field
    
    // swap
    label = document.createElement('label');
    label.setAttribute('for', 'firstText');
    label.innerHTML = "First Text";
    document.body.append(label);

    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'firstText');
    input.setAttribute('id', 'fText');
    document.body.append(input);

    label = document.createElement('label');
    label.setAttribute('for', 'secondText');
    label.innerHTML = "Second Text";
    document.body.append(label);

    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'secondText <br>');
    input.setAttribute('id', 'fText');
    document.body.append(input);

    let button = document.createElement('button');
    button.setAttribute('onclick', 'swap()');
    button.innerHTML = "Swap";
    document.body.append(button);
}

