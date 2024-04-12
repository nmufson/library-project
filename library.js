const myLibrary = [];

class Book{
    constructor(title,author,numPages,read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
    info = () => {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read} yet`;
    }
}



// function Book(title,author,numPages,read) {
//     this.title = title;
//     this.author = author;
//     this.numPages = numPages;
//     this.read = read;
//     this.info = function() {
//         return `${title} by ${author}, ${numPages} pages, ${read} yet`;
//     };
// };


const inputs = document.querySelectorAll('input');
let removeButtons;
let toggleReadButtons;
const submitButton = document.querySelector('.submit');
const bookContainer = document.querySelector('.books');

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
    
    bookContainer.innerHTML = '';
    displayBooks();

    

    
})

// for each book object in myLibrary area, apend a card div into the "books" div that displays
// the book info 
function displayBooks() {
    bookContainer.innerHTML = '';
    myLibrary.forEach((book) => { 
        const divCard = document.createElement('div');
        const buttonDiv = document.createElement('div');

        bookContainer.appendChild(divCard);
        
        const titleCard = document.createElement('p');
        const authorCard = document.createElement('p');
        const numPagesCard = document.createElement('p');
        const readStatusCard = document.createElement('p');
        const removeButton = document.createElement('button')
        const toggleReadButton = document.createElement('button')

        divCard.id = `div${myLibrary.indexOf(book)}`;
        removeButton.id = myLibrary.indexOf(book);
        toggleReadButton.id = myLibrary.indexOf(book);
        divCard.classList.add('div-card');
        removeButton.classList.add('remove-button');
        toggleReadButton.classList.add('toggle-read-button');

        
        

        titleCard.textContent = `Title: ${book.title}`;
        authorCard.textContent = `Author: ${book.author}`;
        numPagesCard.textContent = `Number of Pages: ${book.numPages}`;
        readStatusCard.textContent = `Read?: ${book.read}`;
        removeButton.textContent = `Remove Book`;
        toggleReadButton.textContent = `Toggle Read`;
    
        buttonDiv.appendChild(removeButton);
        buttonDiv.appendChild(toggleReadButton);

        divCard.appendChild(titleCard);
        divCard.appendChild(authorCard);
        divCard.appendChild(numPagesCard);
        divCard.appendChild(readStatusCard);
        divCard.appendChild(buttonDiv);

        divCards = document.querySelectorAll('.div-card')
        removeButtons = document.querySelectorAll('.remove-button');
        toggleReadButtons = document.querySelectorAll('.toggle-read-button');

    })
    enableRemove();
    enableToggle();
}

function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex,1);
};

//this runs right when page opens, need to run it every time a book is added
function enableRemove() {
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            removeBookFromLibrary(button.id);
            displayBooks();
        })
    });
}

function enableToggle() {
    toggleReadButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (myLibrary[button.id].read === 'Yes') {
                myLibrary[button.id].read = 'No';
            } else {
                myLibrary[button.id].read = 'Yes'
            }
            displayBooks();
            console.log(myLibrary[button.id].read);
        })
    })
}





