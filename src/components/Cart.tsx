import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Book } from '../interface/Books'

interface Props {
  cart: Book[];
  handleChange: (book: Book, d: number) => void;
  setCart: Dispatch<SetStateAction<Book[]>>
}

export const Cart: React.FC<Props> = ({cart, handleChange, setCart}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id: number) => {
    const arr = cart.filter(item => item.id !== id);
    setCart(arr);
    handlePrice();
  }

  const handlePrice = () => {
    let ans = 0;
    cart.map(item => (ans += item.amount * item.price));
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice();
  })
  
  return (
    <section>
      {cart.map(cartItem => (
        <div>
          <div>
            <img src={cartItem.imageUrl} alt={cartItem.name} className='w-[210px]' />
            <p>
              {cartItem.name}
            </p>
          </div>

          <div>
            <button onClick={() => handleChange(cartItem, 1)}>+</button>
            <button>
              {cartItem.amount}
            </button>
            <button onClick={() => handleChange(cartItem, -1)}>-</button>
          </div>

          <div>
            <span>{cartItem.price}</span>
            <button onClick={() => handleRemove(cartItem.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div>
        <p>Total of you cart</p>
        <span>{price}</span>
      </div>
    </section>
  )
}
