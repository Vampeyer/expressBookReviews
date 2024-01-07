const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();







public_users.get("/register", (req,res) => {
  //Write your code here
  return res.send({message: "You have been automatically registered !  "});
});





// Get the book list available in the shop
public_users.get('/',async function (req, res) { // Code to retrieve the list of books 
    var bookList = await Object.values(books);
    // Display the list of books 
    return res.send(JSON.stringify(bookList, null, 2)); });




// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  function findBook(isbn, bookList, callback) {
    const book = bookList.find(book => book.isbn === isbn);
    if (!book) {
      callback(new Error('Book not found'));
      return;
    }

    const response = JSON.stringify(book, null, 2);
    process.nextTick(() => callback(null, response));
  }

  const isbn = req.params.isbn;
  const bookList = Object.values(books);

  findBook(isbn, bookList, (err, response) => {
    if (err) {
      console.error('Error retrieving book details:', err);
      res.status(500).send('Error retrieving book details');
      return;
    }

    res.send(response);
  });
});

 
    
    
// Get book details based on author
public_users.get('/author/:author',async function (req, res) {
  //Write your code here
  var author = await req.params.author; 
  var bookList = Object.values(books); 
  var book = bookList.find(function (book) { return book.author === author; });


  
  return  res.send(JSON.stringify(book, null, 2)); 
  
});




// Get all books based on title
public_users.get('/title/:title',async function (req, res) {
  //Write your code here
  
  // in the URL we are asking for the title , so in the request , we use req.params.title
  var title = await req.params.title; 
  // the entire list of the books , in this response is now , bookList , as before 
  var bookList = Object.values(books);
  var book = bookList.find(function (book){ return book.title === title  })
  // Very important line of code above , this turns the book variable , too the bookListValues . 
  // then used the find method that takes in a function as a value , this value is true too book.title to the req.params.title 

// and sets the book to that selected title.  

// this then returns that book. 
  return  res.send(JSON.stringify(book, null, 2)); 
});








//  Get book review

//THIS LINE OF CODE  - can

public_users.get('/review/:isbn',async function (req, res) {
  //Write your code here
  var isbn = await req.params.isbn; 
  var bookList = Object.values(books);
  var book = bookList.find(function (book) { return book.isbn === isbn; });


  // Display the book details 
  return  res.send(JSON.stringify(book.reviews, null, 2)); });


module.exports.general = public_users;
