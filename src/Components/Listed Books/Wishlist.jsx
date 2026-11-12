import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext/BookProvider";
import Book from "../Books/Book";
const Wishlist = ({ sortBy }) => {
  const { wishlist } = useContext(BookContext);
  const [sortedWishList, setSortedWishList] = useState(wishlist);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "pages") {
        const sortedList = [...wishlist].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setSortedWishList(sortedList);
      } else if (sortBy === "rating") {
        const sortedList = [...wishlist].sort((a, b) => b.rating - a.rating);
        setSortedWishList(sortedList);
      }
    }
  }, [sortBy, wishlist]);
  if (wishlist.length === 0) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h3 className="font-semibold text-xl md:text-3xl">
          No books added to wishlist yet...
        </h3>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedWishList.map((book, i) => (
          <Book book={book} key={i}></Book>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
