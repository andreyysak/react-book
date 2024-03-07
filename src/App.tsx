import React, { useEffect, useMemo, useState } from "react";
import booksFromServer from "./api/books.json";
import { Book } from "./interface/Books";

import { SORT_BY_ALPHABET, SORT_BY_LENGTH } from "./constants/constants";
import { BookList } from "./components/BookList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

function getBooks(
  books: Book[],
  sort: string,
  reverse: boolean,
) {
  const preparedBooks = [...books];

  if (sort) {
    preparedBooks.sort((book1, book2) => {
      switch (sort) {
        case SORT_BY_LENGTH:
          return book1.price - book2.price;
        case SORT_BY_ALPHABET:
          return book1.name.localeCompare(book2.name);
        default:
          return 0;
      }
    });
  }

  if (reverse) {
    preparedBooks.reverse();
  }

  return preparedBooks;
}

function App() {
  const [sort, setSort] = useState("");
  const [reverse, setReverse] = useState(false);
  const [show, setShow] = useState(true);

  const books = getBooks(booksFromServer, sort, reverse);

  const [cart, setCart] = useState<Book[]>([]);

  const handleClick = (book: Book) => {
    setCart([...cart, book])
    console.log(cart);
  }

  const handleChange = (book: Book, d: number) => {
    const index = cart.indexOf(book);
    const arr = cart;

    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr])
  }  

  useEffect(() => {
    console.log('cart change');
  }, [cart])
  
  return (
    <div className="App">
      <div className="p-12 bg-bgInline rounded-sm">
        <Header 
          setShow={setShow}
          size={cart.length}
        />
        {show ? 
          (<BookList
            books={books}
            handleClick={handleClick}
          />) : (
            <Cart 
              cart={cart}
              handleChange={handleChange}
              setCart={setCart} 
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
