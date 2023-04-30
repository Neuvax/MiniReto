import React from "react";

const Form = ({ videogame, setVideogame }) => {
  const handleChange = (i) => {
    setVideogame({
      ...videogame,
      [i.target.name]: i.target.value,
    });
  };

  let { title, company, year } = videogame;

  const handleSubmit = () => {
    year = parseInt(year, 10);
    //Data validation
    if (title === "" || company === "" || year <= 0) {
      alert("All fields are required");
      return;
    }

    //Data already validated
    const requestStart = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videogame),
    };

    fetch("http://localhost:9000/api", requestStart)
      .then((res) => res.text())
      .then((res) => console.log(res));

    // Videogame state restart
    setVideogame({
      title: "",
      company: "",
      year: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          value={title}
          name="title"
          onChange={handleChange}
          type="text"
          id="title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company" className="form-label">
          Company
        </label>
        <input
          value={company}
          name="company"
          onChange={handleChange}
          type="text"
          id="company"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="year" className="form-label">
          Year
        </label>
        <input
          value={year}
          name="year"
          onChange={handleChange}
          type="text"
          id="year"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
