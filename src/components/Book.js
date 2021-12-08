import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { book } = props;

  const dispatch = useDispatch();

  const deleteBookFromStore = (event) => {
    const { id } = event.currentTarget;
    dispatch(removeBook(id));
  };
  return (
    <li>
      {`${book.title} | ${book.category} `}
      <button type="button" id={book.item_id} onClick={deleteBookFromStore}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
