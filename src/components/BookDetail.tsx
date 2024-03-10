import React from "react";
import { Book } from "../interface/Books";
import { IoCloseOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  selectedBook: Book;
  onClose: () => void;
  addToCart: (book: Book) => void;
}

const BookDetail: React.FC<Props> = ({ selectedBook, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-6 py-8 rounded-xl relative">
        <button onClick={onClose} className="absolute top-5 right-5">
          <IoCloseOutline size={32} />
        </button>

        <div className="py-6 px-6 flex justify-between">
          <img
            src={selectedBook.imageUrl}
            alt={selectedBook.name}
            className="h-[300px] rounded-xl"
          />
          <div className="ml-32 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-3xl">{selectedBook.name}</h2>
              <div className="flex flex-col gap-2">
                <p className="mt-6 w-72">{`Description: ${selectedBook.description}`}</p>
                <p>{`Author: ${selectedBook.author}`}</p>
                <p>{`Genre: ${selectedBook.genre}`}</p>
                <p>{`Price: ${selectedBook.price}`}</p>
              </div>
            </div>
            <div className="flex gap-5 justify-center">
              <button
                onClick={onClose}
                className="py-3 px-6  text-dark border-2 border-dark text-base font-bold rounded-full hover:bg-dark hover:text-white"
              >
                Go back
              </button>
              <button
                onClick={onClose}
                className="flex items-center gap-2 py-3 px-6 bg-orangeText text-white text-base font-bold rounded-full hover:bg-orange-700"
              >
                Add
                <FaCartShopping size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
