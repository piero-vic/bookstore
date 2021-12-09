import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBook } from '../redux/books/books';
import styles from './Book.module.css';

function Book(props) {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = (event) => {
    const { id } = event.currentTarget;
    dispatch(fetchRemoveBook(id));
  };

  return (
    <li className={styles.book}>
      <div>
        <p className={styles.category}>{book.category}</p>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>Author</p>
        <div className={styles.btnContainer}>
          <button type="button">Comments</button>
          <span>|</span>
          <button type="button" id={book.item_id} onClick={deleteBookFromStore}>Remove</button>
          <span>|</span>
          <button type="button">Edit</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
