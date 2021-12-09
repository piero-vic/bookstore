import { GoPerson } from 'react-icons/go';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Bookstore CMS</h1>
      <nav className={styles.navLinks}>
        <a className={styles.navLink} href="/">BOOKS</a>
        <a className={styles.navLink} href="/Categories">CATEGORIES</a>
        <GoPerson className={styles.person} />
      </nav>
    </header>
  );
}

export default Header;
