import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Catagory from "./Components/Catagory";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import NavBars from "./Components/NavBars";
import dataBase from "./DataBase";
function MyApp() {
  const [items, setItems] = useState(dataBase);

  //get all categories
  const allCategory = ["الكل", ...new Set(dataBase.map((i) => i.category))];

  //filter categories
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItems(dataBase);
    } else {
      const newArr = dataBase.filter((item) => item.category === cat);
      setItems(newArr);
    }
  };
  //filter search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = dataBase.filter((item) => item.title === word);
      setItems(newArr);
    }
  };
  return (
    <>
      <NavBars filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Catagory handleFilter={filterByCategory} allCategory={allCategory} />
        <ItemList items={items} />
      </Container>
    </>
  );
}
export default MyApp;
