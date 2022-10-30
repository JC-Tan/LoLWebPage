import { useState } from "react";
import Form from "./Form";
import User from "./User";

/* UserPageContent
 * This is the wrapper for all of a user's information
 */
const UserPageContent = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameHandler = (enteredUser) => {
    setEnteredUsername(enteredUser);
  };

  return (
    <div>
      <div>
        <Form onAddUsername={usernameHandler} />
      </div>
      <div>
        <h1>User Info</h1>
        <User name={enteredUsername}></User>
      </div>
    </div>
  );
};

export default UserPageContent;
