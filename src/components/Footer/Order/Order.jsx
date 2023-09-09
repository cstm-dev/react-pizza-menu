import PropTypes from "prop-types";

export default function Order({ openHour, closeHour }) {
  Order.propTypes = {
    openHour: PropTypes.number,
    closeHour: PropTypes.number,
  };

  return (
    <div className="order">
      <p>
        We&#39;re open from {openHour}:00 to {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
