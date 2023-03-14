import React from 'react'


function Book(props) {
    const book = props.book
  return (

        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
  )
}
// book component 
// creat a const to give book = to props.book
// now this book component will take a object in the array as a prop.

export default Book