import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'to kill the mockingbrid',
        'the great gastsby',
        'the catcher in the rye'
    ]

    const books =  [
        {
            title: ' to kill the mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {

            title: ' the great gasty',
            author: 'f. scott fitzgerald',
            pages: 281
        },
        {

            title: ' the catch in the rye',
            author: 'j. d. salinger ',
            pages: 281
        }

    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr/>
        {books.map(book => {
            return (
                <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>
            )

        })
        }
        <hr/>
        {
            books.map(book => {
                return <Book book={book}/>
            })
        }
    </div>
  )
}
// {bookList.map} itrates over the list of books in the list. 
// the arrow fucntion acks as a for loop to show all three books in an H2 element!

// {books.map} will itrate over the arrays objects and return them each with a h5 or p element 

// line 51 books.map is called and refers to the array of books at the top the page
// the arrow function as a for loop tells, for eack book in the array, render a book component. which takes a property of book
// and passing the value of an object in the array. 
// the book component in the books.js file receives the object as a prop and then returns each object


export default RenderingLists