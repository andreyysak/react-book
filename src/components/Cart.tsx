import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
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

export const Cart: React.FC<Props> = React.memo(({
  cart,
  handleChange,
  setCart,
  setShow,
}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = useCallback(() => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  }, [cart]);

  const handleRemove = useCallback(
    (id: number) => {
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      handlePrice();
    },
    [cart, setCart, handlePrice]
  );

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="bg-light dark:bg-darkText dark:text-light px-72 py-24 font-bold gap-8 rounded-b-xl text-darkText sm:px-6 sm:py-28 sm:h-[75vh]">
      {cart.length > 0 ? (
        <div>
          <div className="pb-7 flex justify-between items-center">
            <h2 className="flex gap-4 items-center text-3xl sm:text-2xl">
              <FaCartShopping size={30} />
              Cart
            </h2>
            <button
              className="flex gap-2 text-base items-center bg-light text-darkText dark:bg-darkText dark:text-light"
              onClick={() => setCart([])}
            >
              <FaRegTrashAlt size={20} />
              Clear cart
            </button>
          </div>
          <div>
            <section>
              {cart.map((cartItem) => (
                <Fragment>
                  <div className="flex justify-between text-center items-center py-7 border-y-2 border-darkText dark:border-light sm:hidden">
                    <div className="flex gap-4 items-center text-left">
                      <img
                        src={cartItem.imageUrl}
                        alt={cartItem.name}
                        className="h-[80px] rounded-xl"
                      />
                      <div>
                        <h4 className="font-bold text-2xl">{cartItem.name}</h4>
                        <p className="font-normal text-sm">{`Author: ${cartItem.author}`}</p>
                        <p className="font-normal text-sm">{`Genre: ${cartItem.genre}`}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleChange(cartItem, 1)}
                        className="bg-light text-darkText dark:bg-darkText dark:text-light"
                      >
                        <FiPlusCircle size={32} />
                      </button>
                      <button className="text-2xl">{cartItem.amount}</button>
                      <button
                        onClick={() => handleChange(cartItem, -1)}
                        className="bg-light text-darkText dark:bg-darkText dark:text-light"
                      >
                        <FiMinusCircle size={32} />
                      </button>
                    </div>
                    <div className="flex gap-20">
                      <p className="text-2xl">{`${cartItem.price}$`}</p>
                      <button
                        onClick={() => handleRemove(cartItem.id)}
                        className="bg-light text-darkText dark:bg-darkText dark:text-light"
                      >
                        <CiCircleRemove size={32} />
                      </button>
                    </div>
                  </div>

                  <div className="text-center hidden sm:block">
                    <img
                      src={cartItem.imageUrl}
                      alt={cartItem.name}
                      className="h-60 rounded-xl mx-auto mb-2"
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-2xl sm:text-xl">
                        {cartItem.name}
                      </h4>
                      <p className="font-normal text-sm">{`Author: ${cartItem.author}`}</p>
                      <p className="font-normal text-sm">{`Genre: ${cartItem.genre}`}</p>
                    </div>

                    <div className="flex items-center justify-around pb-6 pt-3">
                      <p className="text-lg">{`${cartItem.price}$`}</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleChange(cartItem, 1)}
                          className="bg-light text-darkText dark:bg-darkText dark:text-light"
                        >
                          <FiPlusCircle size={20} />
                        </button>
                        <button className="text-lg">{cartItem.amount}</button>
                        <button
                          onClick={() => handleChange(cartItem, -1)}
                          className="bg-light text-darkText dark:bg-darkText dark:text-light"
                        >
                          <FiMinusCircle size={20} />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(cartItem.id)}
                        className="bg-light text-darkText dark:bg-darkText dark:text-light"
                      >
                        <CiCircleRemove size={20} />
                      </button>
                    </div>
                  </div>
                </Fragment>
              ))}
            </section>

            <div className="py-10 sm:py-4 rounded-b-xl font-bold gap-8">
              <div className="flex justify-between items-center text-2xl sm:text-lg">
                <span>
                  <span className="font-normal">Total books: </span>
                  {cart.length}
                </span>
                <span>
                  <span className="font-normal">Total price: </span>
                  {price.toFixed(2)}$
                </span>
              </div>

              <div className="flex justify-between pt-10">
                <button
                  onClick={() => setShow(true)}
                  className="py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
                >
                  Go back
                </button>
                <button className="py-3 px-6 border-2 border-darkText dark:border-light font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-bold flex flex-col justify-center text-center pb-12">
          <h2 className="text-3xl">{`Cart is empty`}</h2>
          <p className="font-normal text-base text-darkText dark:text-light mt-3">
            Most likely, you haven't ordered book yet.
            <br /> To order book, go to the main page.
          </p>
          <button
            onClick={() => setShow(true)}
            className="mt-16 sm:mt-12 w-28 mx-auto py-3 px-6 border-2 border-darkText dark:border-light gap-2 text-base font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
          >
            Go back
          </button>
        </div>
      )}
    </article>
  );
})
