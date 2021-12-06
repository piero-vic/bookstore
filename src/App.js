import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
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
              <h1>Books</h1>
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
