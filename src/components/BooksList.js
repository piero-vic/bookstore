import PropTypes from 'prop-types';
import styles from './BooksList.module.css';

function BooksList(props) {
  const { books } = props;

  return (
    <div className={styles.container}>
      <ul>
        {
          books.map((book) => (
            <li key={book.title}>
              {`${book.title} by ${book.author}`}
            </li>
          ))
        }
      </ul>
      <form action="">
        <input type="text" name="" id="" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default BooksList;
