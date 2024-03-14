import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { InputField } from "./InputField";
import { IoCloseOutline } from "react-icons/io5";
import { Book } from "../interface/Books";

interface Props {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  addNewBook: (newBook: Book) => void;
}

export const AddNewBook: React.FC<Props> = React.memo(({ setShowForm, addNewBook }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState(0);
  const [amount] = useState(1);
  const [price, SetPrice] = useState(0);

  const reset = useCallback(() => {
    setName("");
    setDescription("");
    setImageUrl("");
    setAuthor("");
    setGenre("");
    SetPrice(0);
    setId(0);
  }, [])

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>, book: Book) => {
    event.preventDefault();
    addNewBook(book);
    reset();
    setCount((cur) => cur + 1);
  }, [addNewBook, reset])

  return (
    <div className="fixed z-30 py-8 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <form
        key={count}
        onSubmit={(event) =>
          handleSubmit(event, {
            name,
            description,
            imageUrl,
            author,
            genre,
            price,
            id,
            amount,
          })
        }
        className="bg-light dark:bg-darkText text-darkText dark:text-light border-2 border-darkText dark:border-light px-6 py-8 rounded-lg relative z-30 w-96 max-h-full overflow-auto"
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setShowForm((cur) => !cur)}
        >
          <IoCloseOutline size={25} />
        </button>
        <div>
          <h3 className="font-bold text-3xl text-center">Add new book</h3>
          <div className="flex flex-col gap-4 py-6">
            <InputField
              name="title"
              label='Title'
              value={name}
              onChange={newValue => setName(newValue)}
              required
            />
            <InputField
              name="imageUrl"
              label='Image URL'
              value={imageUrl}
              onChange={newValue => setImageUrl(newValue)}
            />
            <InputField
              name="description"
              label='Description'
              value={description}
              onChange={newValue => setDescription(newValue)}
            />
            <InputField
              name="author"
              label='Author'
              value={author}
              onChange={newValue => setAuthor(newValue)}
            />
            <InputField
              name="genre"
              label='Genre'
              value={genre}
              onChange={newValue => setGenre(newValue)}
            />
            <InputField
              name="price"
              label='Price'
              value={price}
              onChange={newValue => SetPrice(+newValue)}
            />
            
            <div className="flex items-center justify-center gap-5 pt-8">
              <button className="py-3 px-6 border-2 font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light" onClick={() => setShowForm((cur) => !cur)}>
                Go back
              </button>
              <button type="submit" className="py-3 px-6 border-2 font-bold rounded-full bg-light text-darkText dark:bg-darkText dark:text-light">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
})
