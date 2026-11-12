import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadlistToLocalDB,
  addWishlistToLocalDB,
  getAllReadlistFromLocalDB,
  getAllWishlistFromLocalDB,
} from "../../../utils/localDB";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadlistFromLocalDB());
  const [wishlist, setWishlist] = useState(() => getAllWishlistFromLocalDB());
  //
  const handleMarkAsRead = (currentBook) => {
    addReadlistToLocalDB(currentBook);
    const selectedBook = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );
    if (selectedBook) {
      toast.error(`${currentBook.bookName} already exist in read list`);
    } else {
      const newReadList = [...readList, currentBook];
      toast.success(`${currentBook.bookName} is added to read list`);
      setReadList(newReadList);
    }
  };
  const handleWishList = (currentBook) => {
    addWishlistToLocalDB(currentBook);
    const isExistOnWishList = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistOnWishList) {
      toast.error(`${currentBook.bookName} already exist on readlist`);
      return;
    }
    const selectedBook = readList.some(
      (book) => book.bookId === currentBook.bookId,
    );
    if (selectedBook) {
      toast.error(`${currentBook.bookName} already exist in wishlist`);
    } else {
      const newReadList = [...wishlist, currentBook];
      toast.success(`${currentBook.bookName} is added to wishlist`);
      setWishlist(newReadList);
    }
  };
  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    handleWishList,
    wishlist,
    setWishlist,
  };
  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
