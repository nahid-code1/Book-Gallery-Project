import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Readlist from "./Readlist";
import Wishlist from "./Wishlist";

const ListedBooks = () => {
  return (
    <div className="mt-10">
      <Tabs>
        <TabList>
          <Tab>Readlist</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <Readlist></Readlist>
        </TabPanel>
        <TabPanel>
          <Wishlist></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
