function clickMe()
{
    // Add text before to the first index
    let para = document.querySelectorAll('p')[0];
    para.innerHTML = "Edited " + para.innerHTML;
   
    let a = document.querySelector('a');
    a.innerHTML = "Apple";
    a.setAttribute('href', "http://www.apple.com");
    a.style.textDecoration = "none";

    // Chnage image
    let image = document.querySelector('img');
    image.setAttribute('src', 'Images/wolf.png');
    image.setAttribute('style', 'width: 400px; height=300px');

    // Change the value of a text area
    let textField = document.querySelector('textarea');
    textField.value = "Edit";
    // textField.innerHTML = "Hello"

    // Change label and input skills
    let labelElement = document.querySelector('label');
    labelElement.innerHTML = "Edit Skills";

    let check = document.querySelector('input');
    check.setAttribute('type', 'radio')

}
function created()
{
    // Append to the body
    let div = document.createElement('div')
    div.innerHTML = "This is some test in the div";
    document.body.append(div);

    // Append a input after the paragraph
    let input = document.createElement('input');
    input.value = "Created Input";
    document.querySelector('p').after(input);
  
}   
function createTables() 
{
    let tab = document.createElement('table');
    tab.setAttribute('id', 'myTable');
    tab.innerHTML = `
    <tr><th class='table-header'>First</th><th class='table-header'>Second</th><th class='table-header'>Third</th></tr>
    <tr><td>1</td><td>2</td><td>3</td></tr>`;
    document.body.append(tab);

    // Add CSS styling
    let styleElement = document.createElement('style');
    styleElement.innerHTML = `
    #myTable {
        border-collapse: collapse;  /* Optional: To collapse table borders */
    }

    .table-header {
        border: 1px solid black;  /* Add a border to table headers */
    }

    #myTable td {
        border: 1px solid black;  /* Add a border to table cells (optional) */
    }
    `;

    document.head.appendChild(styleElement);
}
