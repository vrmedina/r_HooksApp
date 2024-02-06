import { useLayoutEffect, useRef, useState } from "react";

export const Character = ({ character }) => {
  const { id, name, status, species, type, origin, location, image } =
    character;

  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const cardRef = useRef();

  useLayoutEffect(() => {
    const { width, height } = cardRef.current.getBoundingClientRect();
    setCardSize({ width, height });
    console.log(cardRef.current.getBoundingClientRect());
  }, []);

  return (
    <>
      <div ref={cardRef} className="d-inline-block card w-25">
        <img
          src={image}
          className="card-img-top img-thumbnail rounded"
          // style={{ height: "250px" }}
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

      <code className="d-inline-block align-top">{JSON.stringify(cardSize)}</code>
    </>
  );
};
