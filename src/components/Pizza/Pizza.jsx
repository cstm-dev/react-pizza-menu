import { pizzaData } from "../../../data";

export default function Pizza() {
  return (
    <div>
      <img src="./src/components/Pizza/assets/focaccia.jpg" alt="focaccia" />
      <h2>{pizzaData[0].name}</h2>
      <p>{pizzaData[0].ingredients}</p>
    </div>
  );
}
