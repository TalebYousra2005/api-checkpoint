import axios from "axios";
import { useState } from "react";
import { UserCard } from "../user-card/userCard";

export const UsersList = () => {
  const [listOfUsers, setListOfUsers] = useState();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data;
      console.log(data);
      setListOfUsers(data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Users List</h1>

          {listOfUsers &&
            listOfUsers.map((user) => {
              return (
                <div className="col-md-4">
                  <UserCard key={user.id} user={user} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
