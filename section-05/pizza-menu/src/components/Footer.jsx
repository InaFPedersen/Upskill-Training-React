const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  /*
  Alert on when open close
  if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  else {
    alert("Sorry we'are closed!");
  } */

  return (
    <div>
      <footer className="footer">
        <h3 className="footer-header">Company information</h3>
        <div className="opening-hours">
          <p>
            Opening hours is <strong>{openHour} PM</strong>
          </p>
          <p>
            Closing time is <strong>{closeHour} PM</strong>
          </p>
          <p>
            The time now is: <strong>{new Date().toLocaleTimeString()}</strong>
          </p>
        </div>
        <h3 className="footer-message">
          {isOpen ? <>We're currently open!</> : <>Sorry, we're closed!</>}
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
