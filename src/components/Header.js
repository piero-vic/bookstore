import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Bookstore</h1>
      <nav className={styles.navLinks}>
        <a href="/">Books</a>
        <a href="/Categories">Categories</a>
      </nav>
    </header>
  );
}

export default Header;
