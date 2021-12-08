import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './BooksList.module.css';
import { fetchAddBook } from '../redux/books/books';
import Book from './Book';

function BooksList() {
  const booksStore = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const titleInput = document.getElementById('books-input');
    const categoryInput = document.getElementById('category-input');

    const newBook = {
      item_id: id,
      title: titleInput.value,
      category: categoryInput.value,
    };

    dispatch(fetchAddBook(newBook));

    titleInput.value = '';
    categoryInput.value = '';
  };

  return (
    <div className={styles.container}>
      <ul>
        {
          booksStore.map((book) => (
            <Book key={book.title} book={book} />
          ))
        }
      </ul>
      <form action="" onSubmit={submitBookToStore}>
        <input type="text" name="" placeholder="Book" id="books-input" required />
        <input type="text" name="" placeholder="Category" id="category-input" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BooksList;
