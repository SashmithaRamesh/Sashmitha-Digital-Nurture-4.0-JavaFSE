import React from 'react';
const books = [
  { id: 1, bname: 'Master React', price: 670 },
  { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 3, bname: 'Mongo Essentials', price: 450 }
];
function BookDetails() {
  return (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );
}
export default BookDetails;