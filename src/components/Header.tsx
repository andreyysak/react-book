import React, { Dispatch, SetStateAction, useState } from "react";
import { FaBookOpen, FaMoon, FaSun } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  setShowForm: Dispatch<SetStateAction<boolean>>;
  size: number;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  setTheme: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<Props> = React.memo(({
  setShow,
  size,
  query,
  setQuery,
  setShowForm,
  setTheme,
  theme,
  toggleTheme,
}) => {
  const [hovered, setHovered] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="flex text-darkText justify-between bg-light rounded-t-xl py-10 px-16 sm:py-4 sm:px-6 md:py-6 md:px-8 border-b-2 border-darkText dark:bg-darkText dark:text-light dark:border-light relative">
      <div
        className="flex gap-3 items-center cursor-pointer hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
        onClick={() => setShow(true)}
      >
        <FaBookOpen size={size >= 480 ? 48 : 24 && size >= 768 ? 48 : 36} />
        <div>
          <h1 className="font-bold text-3xl sm:text-lg md:text-2xl">
            React Books
          </h1>
          <p className="text-base sm:hidden">Most reactive books</p>
        </div>
      </div>

      <div className="flex gap-8 items-center sm:hidden">
        <button
          onClick={toggleTheme}
          className="py-3 px-3 border-2 bg-light text-darkText dark:bg-darkText dark:text-light text-base font-bold rounded-full border-darkText dark:border-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
        >
          {theme ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-72 h-12 rounded-xl border-2 border-darkText dark:border-light px-5 bg-light text-darkText dark:bg-darkText dark:text-light placeholder:text-darkText dark:placeholder:text-light active:border-darkActive dark:active:border-lightActive focus:rounded-full duration-300"
          placeholder="Search book by title"
        />
        <button
          onClick={() => setShow(false)}
          className="py-3 px-3 border-2 border-darkText dark:border-light bg-light text-darkText dark:bg-darkText dark:text-light text-base font-bold rounded-full hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
        >
          <FaCartShopping size={20} />
        </button>
        <button
          onClick={() => setShowForm((cur) => !cur)}
          className="flex items-center border-2 border-darkText dark:border-light gap-2 py-3 px-6 text-base font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light hover:text-darkHover dark:hover:text-lightHover duration-200 hover:scale-105 active:text-darkActive dark:active:text-lightActive"
        >
          <IoMdAddCircle size={20} />
          Add
        </button>
      </div>

      {openMenu && (
        <div className="hidden absolute z-20 md:block md:top-24 sm:block sm:top-10 w-full left-0 border-2 border-darkText dark:border-light rounded-xl">
          <div className="flex flex-col items-start gap-4 p-4 bg-light dark:bg-darkText">
            {/* <button onClick={toggleTheme} className='py-3 px-3 border-2 bg-light text-darkText dark:bg-darkText dark:text-light text-base font-bold rounded-full'>
              {theme ? 
                (
                  <div className="flex items-center gap-3">
                    <p>Light</p>
                    <FaSun size={20} />
                  </div>
                ) : (
                      <div className="flex items-center gap-3">
                        <p>Dark</p>
                        <FaMoon size={20} />
                      </div>
                    )}
            </button> */}

            <button
              onClick={() => setShow(false)}
              className="py-3 px-3 border-2 bg-light text-darkText dark:bg-darkText dark:text-light text-base font-bold rounded-full"
            >
              <div className="flex items-center gap-3">
                <p>Cart</p>
                <FaCartShopping size={20} />
              </div>
            </button>
            <button
              onClick={() => setShowForm((cur) => !cur)}
              className="flex items-center border-2 gap-2 py-3 px-6 text-base font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light"
            >
              <IoMdAddCircle size={20} />
              Add
            </button>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-72 h-12 rounded-full border-2 px-5 bg-light text-darkText dark:bg-darkText dark:text-light placeholder:text-darkText dark:placeholder:text-light"
              placeholder="Search book by title"
            />
          </div>
        </div>
      )}

      <button
        className="hidden md:block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpenMenu((cur) => !cur)}
      >
        {hovered ? <CiMenuFries size={30} /> : <CiMenuBurger size={30} />}
      </button>

      <button
        onClick={toggleTheme}
        className="hidden fixed sm:block md:block bottom-5 right-5 py-3 px-3 border-2 bg-light text-darkText dark:bg-darkText dark:text-light text-base font-bold rounded-full border-darkText dark:border-light"
      >
        {theme ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </header>
  );
})
