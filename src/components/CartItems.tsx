import React, { Dispatch, SetStateAction } from "react";
import { Book } from "../interface/Books";
import { FaRegWindowClose } from "react-icons/fa";
import { ImConfused } from "react-icons/im";


interface Props {
  cart: Book[];
  handleOpenCart: () => void;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const CartItems: React.FC<Props> = ({ cart, handleOpenCart, count, setCount }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-6 py-8 rounded-lg relative">
        <button 
          onClick={handleOpenCart} 
          className="absolute top-5 right-5"
        >
          <FaRegWindowClose size={32} />
        </button>
        {count < 1 ? (
          <div className="py-8 px-40">
            <h3 className="text-4xl font-extrabold pb-7">Your cart is empty</h3>
            <span className="flex justify-center">
              <ImConfused size={70} />
            </span>
          </div>
        ) : (
          <div>
            <h3 className="font-bold text-3xl text-center pb-10">
              {`Cart (${count})`}
            </h3>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-40 mb-3 p-4 border-2 border-orangeText rounded-xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-[190px] w-[140px] rounded-xl"
                />

                <div className="flex flex-col font-medium text-lg justify-between items-center">
                  <div>
                    <p>{`The name of book ${item.name}`}</p>
                    <p>{`Genre: ${item.genre}`}</p>
                    <p>{`Author: ${item.author}`}</p>
                    <p>{`Price: ${item.price}`}</p>
                  </div>
                  <div className="flex gap-4 items-center py-1 px-2 border-2 border-orangeText rounded-full">
                    <button 
                      className="text-xl bg-lightGray text-dark py-1 px-2 text-center rounded-full hover:bg-orangeText hover:text-white"
                      onClick={() => setCount(count => count + 1)}
                    >
                      +
                    </button>
                    <span>
                      {count}
                    </span>
                    <button 
                      className="text-xl bg-lightGray text-dark py-1 px-2 text-center rounded-full hover:bg-orangeText hover:text-white"
                      onClick={() => setCount(count => count - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
