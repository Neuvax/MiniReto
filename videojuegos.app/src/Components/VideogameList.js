import React from "react";

const VideogameList = ({ videogames }) => {
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
            <th>{videogame.id}</th>
            <th>{videogame.title}</th>
            <th>{videogame.company}</th>
            <th>{videogame.year}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideogameList;
