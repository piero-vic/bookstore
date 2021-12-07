import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './BooksList.module.css';
import { addBook } from '../redux/books/books';

function BooksList() {
  const booksStore = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      title: 'TEST',
      author: 'TEST',
    };

    dispatch(addBook(newBook));
  };

  return (
    <div className={styles.container}>
      <ul>
        {
          booksStore.map((book) => (
            <li key={book.id}>
              {`${book.title} by ${book.author}`}
            </li>
          ))
        }
      </ul>
      <form action="">
        <input type="text" name="" id="" />
        <button type="button" onClick={submitBookToStore}>Add Book</button>
      </form>
    </div>
  );
}

export default BooksList;
