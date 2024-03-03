import React, { useState } from "react";
import { Header } from "./components/Header";
import { MainPizza } from "./components/MainBook";
import booksFromServer from './api/books.json';

function App() {
  const [books, setBooks] = useState(booksFromServer);

  return (
    <div className="App">
      <div className="p-12 bg-bgInline rounded-sm">
        <Header />
        <MainPizza books={books} />
      </div>
    </div>
  );
}

export default App;
