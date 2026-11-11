import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={book.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex item gap-5">
          {book.tags.map((tag) => (
            <div className="badge badge-secondary">{tag}</div>
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
    </div>
  );
};

export default Book;
