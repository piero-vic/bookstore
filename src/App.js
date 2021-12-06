import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/BooksList';
import './App.css';

function App() {
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
    },
  ];

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <BooksList books={books} />
            )}
          />
          <Route
            path="/Categories"
            element={(
              <h1>Under construction</h1>
            )}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
