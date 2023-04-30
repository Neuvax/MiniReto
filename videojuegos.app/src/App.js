import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import VideogameList from "./Components/VideogameList";

function App() {

  const [videogame, setVideogames] = useState([])

  useEffect(() =>{
    const getVideogames = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setVideogames(res))
    }
    getVideogames()
  }, [])

  return (
    <Fragment>
      <Navbar brand="Videogames App" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: "center"}}>Videogame List</h2>
            <VideogameList videogames={videogame}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: "center"}}>Videogame Form</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
