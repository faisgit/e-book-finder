import React from "react";
import BookList from "./book-list";
export default function BooksListContainer(props) {
  return (
    <>
      {props.books.length ? (
        <div>
          <h1 className="text-center font-semibold  mt-5 text-3xl">
            Search Results
          </h1>
          <ul className="flex flex-wrap justify-center px-10 gap-5 my-5">
            {props.books.map((book) => (
              <li key={book.id}>
                <BookList book={book} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
