import React, { useState } from "react";
import "./hero.css"; // reuse styles or create new CSS as needed

const NewHomeForm = () => {
  const [home, setHome] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!home.title.trim()) errors.title = "Title is required";
    if (!home.location.trim()) errors.location = "Location is required";
    if (!home.price.trim()) errors.price = "Price is required";
    else if (isNaN(home.price)) errors.price = "Price must be a number";
    if (!home.description.trim()) errors.description = "Description is required";
    if (!home.bedrooms.trim()) errors.bedrooms = "Number of bedrooms is required";
    else if (isNaN(home.bedrooms)) errors.bedrooms = "Must be a number";
    if (!home.bathrooms.trim()) errors.bathrooms = "Number of bathrooms is required";
    else if (isNaN(home.bathrooms)) errors.bathrooms = "Must be a number";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`New Home Added:\n${JSON.stringify(home, null, 2)}`);
      setHome({
        title: "",
        location: "",
        price: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
      });
    }
  };

  return (
    <section className="new-home-form container">
      <h2>Add New Home</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={home.title}
          onChange={handleChange}
          className={errors.title ? "error" : ""}
        />
        {errors.title && <small className="errorMsg">{errors.title}</small>}

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={home.location}
          onChange={handleChange}
          className={errors.location ? "error" : ""}
        />
        {errors.location && <small className="errorMsg">{errors.location}</small>}

        <input
          type="text"
          name="price"
          placeholder="Price"
          value={home.price}
          onChange={handleChange}
          className={errors.price ? "error" : ""}
        />
        {errors.price && <small className="errorMsg">{errors.price}</small>}

        <textarea
          name="description"
          placeholder="Description"
          value={home.description}
          onChange={handleChange}
          className={errors.description ? "error" : ""}
          rows={4}
        />
        {errors.description && (
          <small className="errorMsg">{errors.description}</small>
        )}

        <input
          type="text"
          name="bedrooms"
          placeholder="Bedrooms"
          value={home.bedrooms}
          onChange={handleChange}
          className={errors.bedrooms ? "error" : ""}
        />
        {errors.bedrooms && <small className="errorMsg">{errors.bedrooms}</small>}

        <input
          type="text"
          name="bathrooms"
          placeholder="Bathrooms"
          value={home.bathrooms}
          onChange={handleChange}
          className={errors.bathrooms ? "error" : ""}
        />
        {errors.bathrooms && <small className="errorMsg">{errors.bathrooms}</small>}

        <button type="submit">Add Home</button>
      </form>
    </section>
  );
};

export default NewHomeForm;
