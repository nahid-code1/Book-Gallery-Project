import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext/BookProvider";

const ListedBooks = () => {
  const { readList } = useContext(BookContext);
  return (
    <div>
      <p>All the listed books are here</p>
      <p>{readList.length}</p>
    </div>
  );
};

export default ListedBooks;
