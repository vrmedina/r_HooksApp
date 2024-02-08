import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Home Page</h1>
      <h3>{user?.name}</h3>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
};
