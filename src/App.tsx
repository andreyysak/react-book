import React, { useState } from "react";
import { Header } from "./components/Header";
import { MainBook } from "./components/MainBook";
import booksFromServer from './api/books.json';
import { Book } from "./interface/Books";

import {SORT_BY_ALPHABET, SORT_BY_LENGTH} from './constants/constants';

function getBooks(books: Book[], sort: string, reverse: boolean, query: string, genre: string) {
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
    })
  }

  if (reverse) {
    preparedBooks.reverse();
  }

  const filteredBooks = preparedBooks.filter(book =>
    book.name.trim().toLocaleLowerCase().includes(queryValue) 
    || book.description.trim().toLowerCase().includes(queryValue) 
    || book.author.trim().toLowerCase().includes(queryValue) 
    || book.genre.trim().toLowerCase().includes(queryValue)
  )

  const filteredBooksByGenre = genre
    ? filteredBooks.filter(book => book.genre.trim().toLowerCase() === genre.toLowerCase())
    : filteredBooks;

  return filteredBooksByGenre;
}

function App() {
  const [sort, setSort] = useState('');
  const [reverse, setReverse] = useState(false);
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('');

  const books = getBooks(booksFromServer, sort, reverse, query, genre)

  return (
    <div className="App">
      <div className="p-12 bg-bgInline rounded-sm">
        <Header />
        <MainBook 
          books={books}
          sort={sort} 
          setSort={setSort}
          reverse={reverse}
          setReverse={setReverse}
          genre={genre}
          setGenre={setGenre}
          query={query}
          setQuery={setQuery}
        />
      </div>
    </div>
  );
}

export default App;
