import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../Context/BookContext/BookProvider";
import Book from "../Books/Book";
const Readlist = ({ sortBy }) => {
  const { readList } = useContext(BookContext);
  const [sortedReadList, setSortedReadList] = useState(readList);

  useEffect(() => {
    if (sortBy) {
      if (sortBy === "pages") {
        const sortedList = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setSortedReadList(sortedList);
      } else if (sortBy === "rating") {
        const sortedList = [...readList].sort((a, b) => b.rating - a.rating);
        setSortedReadList(sortedList);
      }
    }
  }, [sortBy, readList]);
  if (readList.length === 0) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h3 className="font-semibold text-xl md:text-3xl">
          No books added to readlist yet...
        </h3>
      </div>
    );
  }
  return (
    <div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedReadList.map((book, i) => (
          <Book book={book} key={i}></Book>
        ))}
      </div>
    </div>
  );
};

export default Readlist;
