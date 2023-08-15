import React, { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <span>
            {time}, We're Open until {closeHour - 12} P.M. Come Visit Us.
          </span>
        ) : (
          <span>
            {time}, We're now closed ,Visit Us at {openHour} A.M.
          </span>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

export default Footer;
