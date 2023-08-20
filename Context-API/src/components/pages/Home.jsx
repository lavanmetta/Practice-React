import { useContext } from "react";
import { ShopContext } from "../../App";

const products = [
  { id: 1, name: "headphones", price: 500 },
  { id: 2, name: "wired", price: 400 },
  { id: 3, name: "earbuds", price: 600 },
  { id: 4, name: "mobile", price: 5500 },
  { id: 5, name: "laptop", price: 40000 },
  { id: 6, name: "smartwatches", price: 1000 },
  { id: 7, name: "speakers", price: 1000 },
];

export default function Home() {
  const styles = {
    backgroundColor: "lightblue",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
  };

  const { addToCart, cartItems, totalAmount } = useContext(ShopContext);

  return (
    <div>
      <nav>
        <h3>
          Cart : <span>{cartItems.length}</span>
        </h3>
        <h3>
          Amount : <span>{totalAmount}</span>
        </h3>
      </nav>
      <div style={styles}>
        {products.map((each) => (
          <div
            key={each.name}
            style={{
              backgroundColor: "white",
              padding: "15px",
              margin: "10px",
            }}
          >
            <h3>{each.name}</h3>
            <p>💸{each.price}</p>
            <button onClick={() => addToCart(each)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
