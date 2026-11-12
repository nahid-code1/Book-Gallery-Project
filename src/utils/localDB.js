const getAllReadlistFromLocalDB = () => {
  const allReadList = localStorage.getItem("readlist");
  if (allReadList) {
    return JSON.parse(allReadList);
  } else {
    return [];
  }
};

const addReadlistToLocalDB = (book) => {
  const allBooks = getAllReadlistFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readlist", JSON.stringify(allBooks));
  }
};
const getAllWishlistFromLocalDB = () => {
  const allWishList = localStorage.getItem("wishlist");
  if (allWishList) {
    return JSON.parse(allWishList);
  } else {
    return [];
  }
};

const addWishlistToLocalDB = (book) => {
  const allBooks = getAllWishlistFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishlist", JSON.stringify(allBooks));
  }
};

export {
  getAllReadlistFromLocalDB,
  addReadlistToLocalDB,
  addWishlistToLocalDB,
  getAllWishlistFromLocalDB,
};
