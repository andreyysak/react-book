import React from "react";
import { TextField } from "./TextField";
import { FaRegWindowClose } from "react-icons/fa";

interface Props {
  handleOpenAddNewBook: () => void;
}

export const NewBook: React.FC<Props> = ({handleOpenAddNewBook}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-6 py-8 rounded-lg relative">
        <button 
          onClick={handleOpenAddNewBook} 
          className="absolute top-5 right-5"
        >
          <FaRegWindowClose size={32} />
        </button>
        <div>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </div>
      </div>
    </div>
  );
};
