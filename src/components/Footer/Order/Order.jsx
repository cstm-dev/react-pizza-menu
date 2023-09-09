import PropTypes from "prop-types";

export default function Order(props) {
  Order.propTypes = {
    closeHour: PropTypes.number,
  };

  return (
    <div className="order">
      <p>
        We&#39;re open until {props.closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
