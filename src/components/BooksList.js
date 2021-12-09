import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './BooksList.module.css';
import { populateList, fetchAddBook } from '../redux/books/books';
import Book from './Book';
import getBooks from '../getBooks';

function BooksList() {
  const booksStore = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then((result) => dispatch(populateList(result)));
  }, []);

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

      <div className={styles.line} />

      <form className={styles.form} action="" onSubmit={submitBookToStore}>
        <h2 className={styles.formTitle}>ADD NEW BOOK</h2>
        <input type="text" name="" placeholder="Book" id="books-input" required />
        <input type="text" name="" placeholder="Category" id="category-input" required />
        <button className={styles.formBtn} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BooksList;
