import { useCallback, useEffect, useState } from "react";
import booksFromServer from "./api/books.json";
import { Book } from "./interface/Books";

import { SORT_BY_ALPHABET, SORT_BY_LENGTH } from "./constants/constants";
import { BookList } from "./components/BookList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { AddNewBook } from "./components/AddNewBook";

function getBooks(
  books: Book[],
  sort: string,
  reverse: boolean,
  query: string,
  genre: string,
) {
  const preparedBooks = [...books];
  const queryValue = query.trim().toLowerCase();

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

  const filteredBooks = preparedBooks.filter(book => book.name.trim().toLowerCase().includes(queryValue));

  const filteredBooksByGenre = genre
    ? filteredBooks.filter(
        book => book.genre.trim().toLowerCase() === genre.toLowerCase()
      ) 
    : filteredBooks;

  return filteredBooksByGenre;
}

function App() {
  const [sort, setSort] = useState("");
  const [reverse, setReverse] = useState(false);
  const [show, setShow] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');
  const [theme, setTheme] = useState(false);
  
  const [books, setBooks] = useState(booksFromServer)
  const book = getBooks(books, sort, reverse, query, genre);
  

  const [cart, setCart] = useState<Book[]>([]);

  const handleClick = useCallback((book: Book) => {
    setCart([...cart, book])
  }, [cart]);

  const handleChange = useCallback((book: Book, d: number) => {
    const index = cart.indexOf(book);
    const arr = cart;

    arr[index].amount += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr])
  }, [cart])

  const addNewBook = useCallback((newBook: Book) => {
    setBooks(currentBooks => [newBook, ...currentBooks]);
  }, [])

  const reset = useCallback(() =>{
    setBooks(booksFromServer)
    setCart([])
    setGenre('')
    setQuery('')
    setReverse(false)
    setSort('')
  }, [])

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.toggle('dark');
    setTheme(cur => !cur)
  },[])
  
  return (
    <div className="App">
      <div className="p-12 bg-light dark:bg-darkText sm:p-4 md:p-8 lg:p-10">
        <div className="border-2 rounded-xl border-darkText dark:border-light">
          <Header
            setShow={setShow}
            size={cart.length}
            query={query}
            setQuery={setQuery}
            setShowForm={setShowForm}
            setTheme={setTheme}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          {show ?
            (<BookList
              books={book}
              handleClick={handleClick}
              setSort={setSort}
              setReverse={setReverse}
              setGenre={setGenre}
              reset={reset}
            />) : (
              <Cart
                cart={cart}
                handleChange={handleChange}
                setCart={setCart}
                setShow={setShow}
              />
            )
          }
          {showForm && (
            <AddNewBook
              setShowForm={setShowForm}
              addNewBook={addNewBook}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
