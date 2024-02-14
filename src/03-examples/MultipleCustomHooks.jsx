import { useFetch } from "./hooks/useFetch";
import { useCounter } from "./hooks/useCounter";
import { LoadingCharacter } from "./components/LoadingCharacter";
import { Character } from "./components/Character";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { id, name, status, species, type, origin, location, image } =
    !!data && data;

  // save that to send to component

  const character = {
    id,
    name,
    status,
    species,
    type,
    origin,
    location,
    image,
  };

  return (
    <>
      <h2 className="d-inline-block mx-3">Rick and Morty Characters App </h2>
      <button
        onClick={() => increment()}
        className="btn btn-primary d-inline-block align-baseline py-2"
      >Next Character</button>
      <hr />
      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character character={character} />
      )}
    </>
  );
};
