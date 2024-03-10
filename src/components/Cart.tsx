import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Book } from "../interface/Books";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { CiCircleRemove } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  cart: Book[];
  handleChange: (book: Book, d: number) => void;
  setCart: Dispatch<SetStateAction<Book[]>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Cart: React.FC<Props> = ({
  cart,
  handleChange,
  setCart,
  setShow,
}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id: number) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="bg-white px-72 py-24 font-bold gap-8">
      {cart.length > 0 ? (
        <div>
          <div className="pb-7 flex justify-between items-center">
            <h2 className="flex gap-4 items-center text-3xl">
              <FaCartShopping size={30} />
              Cart
            </h2>
            <button className="flex gap-2 text-base text-[#b6b6b6] items-center" onClick={() => setCart([])}>
              <FaRegTrashAlt size={20} />
              Clear cart
            </button>
          </div>
          <div>
            <section className="">
              {cart.map((cartItem) => (
                <div className="flex justify-between text-center items-center py-7 border-y-2 border-[#f4f4f4]">
                  <div className="flex gap-4 items-center text-left">
                    <img
                      src={cartItem.imageUrl}
                      alt={cartItem.name}
                      className="h-[80px] rounded-xl"
                    />
                    <div>
                      <h4 className="font-bold text-2xl">{cartItem.name}</h4>
                      <p className="text-textGray font-normal text-sm">{`Author: ${cartItem.author}`}</p>
                      <p className="text-textGray font-normal text-sm">{`Genre: ${cartItem.genre}`}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => handleChange(cartItem, 1)}>
                      <FiPlusCircle size={32} color="#FE5F1E" />
                    </button>
                    <button className="text-2xl">{cartItem.amount}</button>
                    <button onClick={() => handleChange(cartItem, -1)}>
                      <FiMinusCircle size={32} color="#FE5F1E" />
                    </button>
                  </div>
                  <div className="flex gap-20">
                    <p className="text-2xl">{`${cartItem.price}$`}</p>
                    <button onClick={() => handleRemove(cartItem.id)}>
                      <CiCircleRemove size={32} color="#D7D7D7" />
                    </button>
                  </div>
                </div>
              ))}
            </section>
            <div className="py-10 bg-white rounded-b-xl font-bold gap-8 pb-32">
              <div className="flex justify-between items-center text-2xl">
                <h4>
                  <span className="font-normal">Total books: </span>
                  {cart.length}
                </h4>
                <h4>
                  <span className="font-normal">Total price: </span>
                  {price.toFixed(2)}$
                </h4>
              </div>

              <div className="flex justify-between pt-10">
                <button
                  onClick={() => setShow(true)}
                  className="py-4 text-[#CACACA] border-2 border-[#CACACA] rounded-full w-52"
                >{`< Go back`}</button>
                <button className="py-4 bg-orangeText text-white rounded-full w-52">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-bold flex flex-col justify-center text-center">
          <h2 className="text-4xl">{`Cart is empty`}</h2>
          <p className="font-normal text-lg text-[#777] mt-3">
            Most likely, you haven't ordered book yet.
            <br /> To order book, go to the main page.
          </p>
          <button
            onClick={() => setShow(true)}
            className="mt-16 bg-dark text-white rounded-full w-52 py-4 mx-auto"
          >
            Go back
          </button>
        </div>
      )}
    </article>
  );
};
