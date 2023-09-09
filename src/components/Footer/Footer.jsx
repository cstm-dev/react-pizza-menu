import Order from "./Order/Order.jsx";

export default function Footer() {
  const currHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currHour >= openHour && currHour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We&#39;re happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}
