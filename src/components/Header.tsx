import React, { Dispatch, SetStateAction } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  size: number;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const Header: React.FC<Props> = ({ setShow, size, query, setQuery }) => {
  return (
    <div className="flex justify-between bg-white rounded-t-xl py-10 px-16 border-b-2 border-lightGrayb">
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => setShow(true)}
      >
        <FaBookOpen size={48} />
        <div>
          <h1 className="font-bold text-2xl m-0">React Books</h1>
          <p className="m-0 text-[#7B7B7B] text-base">Most reactive books</p>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className='w-72 h-12 rounded-full border-bgInline border-2 px-5'
          placeholder='Search book by title'
        />
        <button
          onClick={() => setShow(false)}
          className="font-bold text-white bg-orangeText rounded-full w-12 h-12 text-center flex justify-center items-center"
        >
          <FaCartShopping size={20} color="orangeCol" />
          {/* <span className='absolute top-0 right-3'>{size}</span> */}
        </button>
      </div>
    </div>
  );
};
