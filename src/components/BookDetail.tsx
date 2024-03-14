import React from "react";
import { Book } from "../interface/Books";
import { IoCloseOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  selectedBook: Book;
  onClose: () => void;
  addToCart: (book: Book) => void;
  book: Book;
}

const BookDetail: React.FC<Props> = React.memo(({ selectedBook, onClose, addToCart, book }) => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-light text-darkText dark:bg-darkText dark:text-light px-6 py-8 rounded-xl relative">
        <button onClick={onClose} className="absolute top-5 right-5">
          <IoCloseOutline size={32} />
        </button>

        <div className="py-6 px-6 flex justify-between sm:hidden">
          <img
            src={selectedBook.imageUrl}
            alt={selectedBook.name}
            className="h-[300px] rounded-xl"
          />
          <div className="ml-32 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-3xl">{selectedBook.name}</h2>
              <div className="flex flex-col gap-2">
                <p className="mt-6 w-72 font-bold">
                  {`Description: `}
                  <span className="font-normal">
                    {selectedBook.description}
                  </span>
                </p>
                <p className="font-bold">
                  {`Author: `}
                  <span className="font-normal">
                    {selectedBook.author}
                  </span>
                </p>
                <p className="font-bold">
                  {`Genre: `}
                  <span className="font-normal">
                    {selectedBook.genre}
                  </span>
                </p>
                <p className="font-bold">
                  {`Price: `}
                  <span className="font-normal">
                    {`${selectedBook.price}$`}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center pt-3">
              <button
                onClick={onClose}
                className="py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
              >
                Go back
              </button>
              <button
                onClick={() => addToCart(book)}
                className="flex items-center font-bold gap-2 py-3 px-6 border-2 border-darkText dark:border-light rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
              >
                Add
                <FaCartShopping size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:block py-1 px-3 text-center rounded-xl">
            <img src={selectedBook.imageUrl} alt={selectedBook.name} className="h-52 mx-auto rounded-xl mb-1"/>
            <div>
              <h2 className="font-bold text-xl">{selectedBook.name}</h2>
              <div className="flex flex-col gap-2">
                <p className="mt-2 w-72 font-bold">
                  {`Description: `}
                  <span className="font-normal">
                    {selectedBook.description}
                  </span>
                </p>
                <div className="flex justify-between gap-3">
                  <p className="font-bold">
                    {`Author: `}
                    <span className="font-normal">
                      {selectedBook.author}
                    </span>
                  </p>
                  <p className="font-bold">
                    {`Genre: `}
                    <span className="font-normal">
                      {selectedBook.genre}
                    </span>
                  </p>
                </div>
                <p className="font-bold text-lg">
                  {`Price: `}
                  <span className="font-medium">
                    {`${selectedBook.price}$`}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-center pt-3">
              <button
                onClick={onClose}
                className="py-1 px-6 border-2 font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light"
              >
                Go back
              </button>
              <button
                onClick={() => addToCart(book)}
                className="flex items-center font-bold gap-2 py-1 px-6 border-2 rounded-full bg-light text-darkText dark:bg-darkText dark:text-light"
              >
                Add
                <FaCartShopping size={20} />
              </button>
            </div>
        </div>
      </div>
    </div>
  );
})

export default BookDetail;
