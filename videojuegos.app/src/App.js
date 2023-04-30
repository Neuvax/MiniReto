import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import VideogameList from "./Components/VideogameList";
import Form from "./Components/Form";

function App() {
  const [videogame, setVideogame] = useState({
    title: "",
    company: "",
    year: 0,
  });

  const [videogames, setVideogames] = useState([]);

  const [vListUpdated, setVListUpdated] = useState(false);

  useEffect(() => {
    const getVideogames = () => {
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setVideogames(res));
    };
    getVideogames();
    setVListUpdated(false);
  }, [vListUpdated]);

  return (
    <Fragment>
      <Navbar brand="Videogames App" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Videogame List</h2>
            <VideogameList
              videogame={videogame}
              videogames={videogames}
              setVListUpdated={setVListUpdated}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Videogame Form</h2>
            <Form videogame={videogame} setVideogame={setVideogame} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
