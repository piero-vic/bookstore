import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import BooksList from './components/BooksList';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <BooksList />
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
