export interface Book {
  id: number;
  name: string;
  description: string;
  genre: string;
  author: string;
  price: number;
  imageUrl: string;
  amount: number;
}

export interface CartItem {
  book: Book;
  count: number;
}