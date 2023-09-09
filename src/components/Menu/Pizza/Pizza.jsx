import PropTypes from "prop-types";

export default function Pizza({ pizza }) {
  Pizza.propTypes = {
    pizza: PropTypes.object,
  };

  // if (pizza.soldOut) return null;

  return (
    <li className={`pizza${pizza.soldOut ? " sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}
