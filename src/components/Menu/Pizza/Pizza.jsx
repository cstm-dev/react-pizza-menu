import PropTypes from "prop-types";

export default function Pizza(props) {
  Pizza.propTypes = {
    pizza: PropTypes.object,
  };

  if (props.pizza.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div>
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        <span>{props.pizza.price}</span>
      </div>
    </li>
  );
}
