import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - Provider - wraps App, Connect - used in Components
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// App component
const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
};

export default App;
