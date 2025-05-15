import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Validation rules
  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Email is invalid";
    if (!form.subject.trim()) errors.subject = "Subject is required";
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle input change for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Form submitted successfully!\n\n${JSON.stringify(form, null, 2)}`);
      // Reset form
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  // Check if form is valid to enable submit button
  const isFormValid = Object.values(form).every((val) => val.trim() !== "") && Object.keys(validate()).length === 0;

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Helps & Friendly Support" cover={img} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit} noValidate>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
              {errors.name && <small className="errorMsg">{errors.name}</small>}

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <small className="errorMsg">{errors.email}</small>}
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={errors.subject ? "error" : ""}
            />
            {errors.subject && <small className="errorMsg">{errors.subject}</small>}

            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && <small className="errorMsg">{errors.message}</small>}

            <button type="submit" disabled={!isFormValid}>
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
