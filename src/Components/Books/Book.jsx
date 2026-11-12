import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-lg   "
    >
      <figure className="p-6">
        <img
          className="max-h-60 rounded-3xl shadow-lg"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex item gap-5">
          {book.tags.map((tag, i) => (
            <div key={i} className="badge badge-secondary">{tag}</div>
          ))}
        </div>
        <h2 className="card-title text-xl">{book.bookName}</h2>
        <p>by: {book.author}</p>
        <div className="flex justify-between border-t border-dashed pt-5">
          <div className="badge badge-outline">{book.category}</div>
          <div className="flex items-center text-lg text-center gap-2.5">
            <p className="">{book.rating}</p>
            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
