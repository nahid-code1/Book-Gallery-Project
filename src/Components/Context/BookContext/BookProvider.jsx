import React, { createContext, useState } from "react";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState([]);
  const handleMarkAsRead = (currentBook) => {
    const selectedBook = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );
    if (selectedBook) {
      alert("The selected book already exist in read list");
    } else {
      const newReadList = [...readList, currentBook];
      setReadList(newReadList);
    }
  };
  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
  };
  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
