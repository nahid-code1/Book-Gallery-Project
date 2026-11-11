import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();

  const book = books.find((book) => book.bookId == id);
  const {
    yearOfPublishing,
    publisher,
    category,
    rating,
    totalPages,
    review,
    image,
    author,
    bookName,
  } = book;
  return (
    <div className="mt-10 ">
      <div className="card lg:card-side bg-base-100 ">
        <figure className="p-2 w-auto md:w-1/3 md:p-25 bg-gray-100 rounded-2xl">
          <img
            className="max-h-80 md:max-h-[40vh] rounded-2xl"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="pl-4 md:pl-12 max-w-auto md:max-w-2/3">
          <h2 className="card-title">{bookName}</h2>
          <p className="py-4 text-lg">By : {author}</p>
          <h5 className="py-4 border-y font-semibold border-gray-300">
            {category}
          </h5>
          <p className="py-4 text-justify">
            <span className="font-bold  ">Review: </span>
            {review}
          </p>
          <div className="flex gap-3 border-b pb-4 border-gray-300">
            <p className="font-bold">Tag</p>
            <div className="flex item gap-5 ">
              {book.tags.map((tag) => (
                <div className="badge badge-secondary">#{tag}</div>
              ))}
            </div>
          </div>
          <div className=" flex items-center gap-10">
            <div className="flex flex-col gap-4 pt-4">
              <p>Number of Pages: </p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="font-bold flex flex-col gap-4 pt-4">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="card-actions mt-6 ">
            <button className="btn btn-soft btn-info">Read</button>
            <button className="btn  btn-secondary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
