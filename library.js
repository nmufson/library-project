const myLibrary = [];

function Book(title,author,numPages,read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${numPages} pages, ${read} yet`;
    };
};


const inputs = document.querySelectorAll('input')
const submitButton = document.querySelector('.submit')
const bookContainer = document.querySelector('.books')

//take user input and initialize new Book object, storing it in myLibrary array
function addBookToLibrary() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value;
    const numPages = document.querySelector('#numPages').value;
    const readStatus = document.querySelector('#readStatus').value;
    
    if (title && author && numPages && readStatus) {
        myLibrary.push(new Book(title,author,numPages,readStatus));
    } else {
        alert('Required Field Missing');
    }
};

submitButton.addEventListener('click', () => {
    
    addBookToLibrary();
    inputs.forEach((input) => {
        input.value = '';
    })
    readStatus.value = '';
    console.log(myLibrary);
    bookContainer.innerHTML = '';
    // for each book object in myLibrary area, apend a card div into the "books" div that displays
    // the book info 
    myLibrary.forEach((book) => {
        
        
        const divCard = document.createElement('div');

        bookContainer.appendChild(divCard);
        
        // const titleCard = document.createTextNode(`Title: ${book.title}`)
        // const authorCard = document.createTextNode(`Author: ${book.author}`)
        // const numPagesCard = document.createTextNode(`Number of Pages: ${book.numPages}`)
        // const readStatusCard = document.createTextNode(`Read?: ${book.read}`)
        const titleCard = document.createElement('p');
        const authorCard = document.createElement('p');
        const numPagesCard = document.createElement('p');
        const readStatusCard = document.createElement('p');

        titleCard.textContent = `Title: ${book.title}`
        authorCard.textContent = `Author: ${book.author}`
        numPagesCard.textContent = `Number of Pages: ${book.numPages}`
        readStatusCard.textContent = `Read?: ${book.read}`
    
        divCard.appendChild(titleCard);
        divCard.appendChild(authorCard);
        divCard.appendChild(numPagesCard);
        divCard.appendChild(readStatusCard);
    })
})



