import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Readlist from "./Readlist";
import Wishlist from "./Wishlist";
import { useState } from "react";

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState("");
  const handleSortBy = (method) => {
    setSortBy(method);
  };
  return (
    <div className="mt-10">
      <div className="flex justify-center my-20">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSortBy("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSortBy("rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <Readlist sortBy={sortBy}></Readlist>
        </TabPanel>
        <TabPanel>
          <Wishlist sortBy={sortBy}></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
