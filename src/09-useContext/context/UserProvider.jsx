import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 1,
//   username: "victor",
//   name: "Victor Medina",
//   email: "victor@boar.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
