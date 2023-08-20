import { useState, createContext } from "react";
import Login from "./components/pages/Login";

export const ShopContext = createContext({
  cartItems: [],
  totalAmount: 0,
  addToCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (product) => {
    // Clone the existing cart items to avoid mutating the state directly
    const updatedCartItems = [...cartItems, product];

    // Calculate the new total amount
    const updatedTotalAmount = parseInt(totalAmount) + parseInt(product.price);

    // Update the state
    setCartItems(updatedCartItems);
    setTotalAmount(updatedTotalAmount);
  };

  return (
    <ShopContext.Provider value={{ cartItems, totalAmount, addToCart }}>
      <Login />
    </ShopContext.Provider>
  );
}

export default App;
