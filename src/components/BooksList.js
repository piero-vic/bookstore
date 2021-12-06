import styles from './BooksList.module.css';

function BooksList() {
  return (
    <div className={styles.container}>
      <ul>
        <li>Book 1</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
      <form action="">
        <input type="text" name="" id="" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default BooksList;
