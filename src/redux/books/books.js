const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const POPULATE_LIST = 'bookStore/books/POPULATE_LIST';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_LIST:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export const populateList = (payload) => ({
  type: POPULATE_LIST,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const fetchAddBook = (payload) => async (dispatch) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    dispatch(addBook(payload));
  }
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchRemoveBook = (payload) => async (dispatch) => {
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.REACT_APP_API_KEY}/books/${payload}`;
  const response = await fetch(url, { method: 'DELETE' });
  if (response.ok) {
    dispatch(removeBook(payload));
  }
};

export default booksReducer;
