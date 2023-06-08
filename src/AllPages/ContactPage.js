import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ContactPage = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <section id="contact-page">
      <div className="container">
        <div className="contact-page-wrapper">
          <div className="contact-title">
            <h1>Contact With Us</h1>
          </div>
          <div className="contact-page-item">
            <form
              action="https://formspree.io/f/mgebozoe"
              method="POST"
              className="contact-form"
            >
              <input
                type="text"
                name="name"
                defaultValue={isAuthenticated ? user.name : ""}
                placeholder="Your Name"
                autoComplete="off"
                required
                className="input-box input-name"
              />
              <input
                type="email"
                name="email"
                defaultValue={isAuthenticated ? user.email : ""}
                placeholder="Your Email"
                autoComplete="off"
                required
                className="input-box input-email"
              />
              <textarea
                name="message"
                id=""
                placeholder="Your Messages"
                cols="30"
                rows="10"
                className="input-box input-textarea"
              ></textarea>
              <button type="submit" className="contact-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
