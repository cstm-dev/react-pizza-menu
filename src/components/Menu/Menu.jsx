import Pizza from "./Pizza/Pizza.jsx";
import { pizzaData } from "./data.js";

export default function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza pizza={pizza} key={index} />
          ))}
        </ul>
      ) : (
        <p>We&#39;re currently working on our menu. 🥲</p>
      )}
    </main>
  );
}
