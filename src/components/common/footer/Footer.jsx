import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Company Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, and discounts sent
                straight to your inbox every month.
              </p>

              <div className="input flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  className={!isValid ? "invalid" : ""}
                />
                <button onClick={handleSubscribe} disabled={!isValid || !email}>
                  Subscribe
                </button>
              </div>
              {!isValid && (
                <p style={{ color: "red", fontSize: "0.8rem" }}>
                  Please enter a valid email.
                </p>
              )}
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, i) => (
                  <li key={i}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
