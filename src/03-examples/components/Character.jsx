import { useCallback, useState } from "react";

export const Character = ({ character }) => {
  const { id, name, status, species, type, origin, location, image } =
    character;

  return (
    <div className="card w-25">
      <img
        src={image}
        className="card-img-top img-thumbnail rounded"
        style={{ height: "250px" }}
        alt={id}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Status: </strong>
          {status}
        </li>
        <li className="list-group-item">
          <strong>Species: </strong>
          {species}
        </li>
        <li className="list-group-item">
          <strong>Type: </strong>
          {type}
        </li>
        <li className="list-group-item">
          <strong>Origin: </strong>
          {origin.name}
        </li>
        <li className="list-group-item">
          <strong>Location: </strong>
          {location.name}
        </li>
      </ul>
    </div>
  );
};
