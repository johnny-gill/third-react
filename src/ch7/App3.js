import { useReducer, useState } from "react";

const initUser = {
  id: 8282,
  firstName: "Young Woong",
  lastName: "Lim",
  admin: false,
};

const App3 = () => {
  // // 방법 1
  // const [user, setUser] = useState(initUser);

  // const handleClick = () => {
  //   setUser({ ...user, admin: !user.admin });
  // };

  // return (
  //   <div>
  //     <h1>
  //       {user.lastName} {user.firstName} is {user.admin ? "ADMIN!" : "USER!"}
  //     </h1>
  //     <button onClick={handleClick}>
  //       Make {user.admin ? "USER!" : "ADMIN!"}
  //     </button>
  //   </div>
  // );

  // 방법 2
  const [user, setUser] = useReducer(
    (user, newUser) => ({ ...user, ...newUser }),
    initUser
  );

  const handleClick = () => {
    setUser({ admin: !user.admin });
  };

  return (
    <div>
      <h1>
        {user.lastName} {user.firstName} is {user.admin ? "ADMIN!" : "USER!"}
      </h1>
      <button onClick={handleClick}>
        Make {user.admin ? "user" : "admin"}
      </button>
    </div>
  );
};

export default App3;
