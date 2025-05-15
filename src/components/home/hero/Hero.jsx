import React, { useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [search, setSearch] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!search.location.trim()) errors.location = "Location is required";
    if (!search.propertyType.trim())
      errors.propertyType = "Property Type is required";
    if (!search.priceRange.trim()) errors.priceRange = "Price Range is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(`Searching with:\nLocation: ${search.location}\nProperty Type: ${search.propertyType}\nPrice Range: ${search.priceRange}`);
      // Here you can trigger your search API or state update
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <Heading
          title="Search Your Next Home"
          subtitle="Find new & featured property located in your local city."
        />

        <form className="flex" onSubmit={handleSubmit} noValidate>
          <div className="box">
            <span>City/Street</span>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={search.location}
              onChange={handleChange}
              className={errors.location ? "error" : ""}
            />
            {errors.location && <small className="errorMsg">{errors.location}</small>}
          </div>
          <div className="box">
            <span>Property Type</span>
            <input
              type="text"
              name="propertyType"
              placeholder="Property Type"
              value={search.propertyType}
              onChange={handleChange}
              className={errors.propertyType ? "error" : ""}
            />
            {errors.propertyType && (
              <small className="errorMsg">{errors.propertyType}</small>
            )}
          </div>
          <div className="box">
            <span>Price Range</span>
            <input
              type="text"
              name="priceRange"
              placeholder="Price Range"
              value={search.priceRange}
              onChange={handleChange}
              className={errors.priceRange ? "error" : ""}
            />
            {errors.priceRange && (
              <small className="errorMsg">{errors.priceRange}</small>
            )}
          </div>
          <div className="box">
            <h4>Advance Filter</h4>
            {/* You can add advanced filter UI here */}
          </div>
          <button className="btn1" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
