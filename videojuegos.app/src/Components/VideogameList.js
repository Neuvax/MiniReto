import React from "react";

const VideogameList = ({ videogame, videogames, setVListUpdated, setVideogame }) => {
  const handleDelete = (id) => {
    const requestStart = {
      method: "DELETE",
    };

    fetch("http://localhost:9000/api/" + id, requestStart)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setVListUpdated(true);
  };

  let { title, company, year } = videogame;

  const handleUpdate = (id) => {
    //Data validation
    if (title === "" || company === "" || year <= 0) {
      alert("All fields are required");
      return;
    }

    const requestStart = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videogame),
    };

    fetch("http://localhost:9000/api/" + id, requestStart)
      .then((res) => res.text())
      .then((res) => console.log(res));

    // Videogame state restart
    setVideogame({
      title: "",
      company: "",
      year: 0,
    });

    setVListUpdated(true);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Company</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {videogames.map((videogame) => (
          <tr key={videogame.id}>
            <td>{videogame.id}</td>
            <td>{videogame.title}</td>
            <td>{videogame.company}</td>
            <td>{videogame.year}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleDelete(videogame.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleUpdate(videogame.id)}
                  className="btn btn-secondary"
                >
                  Update
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideogameList;
