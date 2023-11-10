/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

export type Book = {
    title: string,
    author: string,
    libraryID: number
}

export let library: Book[] = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
export function showTitles(): void {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea: HTMLInputElement | null = document.getElementById("displayArea") as HTMLInputElement | null;
    if (textArea) { textArea.innerHTML = titleString; }
}

/**
 * 
 * @return {object} array holding all titles as elements.findTitles, which will find all the book titles in libraryBooks and return them in an
alphabetically ordered array
 */
export function findTitles(): string[] {
    // Create an empty array to hold the titles
    const title: string[] = [];
    for(let book of library){
        // Loop through the book and push the ttles to title array
        title.push(book.title);
    }
    return title.sort();
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
export function addBook(): void {

    // console.log("finish the implementation -- get the author, create a book object, and add to the library array!!");

    let title: HTMLInputElement = document.getElementById('title') as HTMLInputElement;
    let author: HTMLInputElement = document.getElementById('author') as HTMLInputElement;
    let library: HTMLInputElement = document.getElementById('author') as HTMLInputElement;


    let titleValue = title.value;
    let authorValue = author.value;
    let libraryID = +library.value;

    const createdBook: Book = createBook(titleValue, authorValue, libraryID);
   

    console.log(createdBook);
    // Add the titleValue, authorValues and libraryId to the createdBook
}
addBook();
/**
 * 
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */

export function findAuthors(): string[] {
    // Loop throught the library books to access the authors
    const authors: string[] = [];
    for (let book of library) {
        // Push the author of the book to the library
        authors.push(book.author);
    }
    // let contentBox = document.getElementById('displayArea')?.ariaValueMax;
    // let authorName = document.getElementById('authorsBtn')?.ariaValueMax;
    
    // contentBox = authorName;
    return authors.sort();
}

/**
 * 
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/

export function findIDs(): number[] {

    let ids: number[] = [];
    //Loop through the library books to access the ids
    for(let book of library){
        // Push all the library ids to the idsa array
        ids.push(book.libraryID);
    }
   const bookIds = ids.sort();

//    let contentBox = document.getElementById('displayArea')?.ariaValueMax;
//    let authorId = document.getElementById('idBtn')?.ariaValueMax;
   
//    contentBox = authorId;

   return bookIds;
}

/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library, 
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */

// Create a global array
// const libraryBooks: Book[] = [];
export function createBook(title: string, author: string, libraryID: number): Book {

    const newBook: Book = {
        title: title,
        author: author,
        libraryID: libraryID,
    }
    //Add the books to the global array
    library.push(newBook);
    return newBook;
}
export function scrabble(title: string, author: string, libraryID: number): Book {

    const newBook: Book = {
        title: title,
        author: author,
        libraryID: libraryID,
    }
    //Add the books to the global array
    library.push(newBook);
    return newBook;
}


/**
 * 
 * @returns {undefined} 
 */
export function scramble(): void {
    
    console.log("implement scramble if you have time ...");
}