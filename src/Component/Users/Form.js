import { useRef } from "react";

const Form = (props) => {
  const usernameInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUsername(usernameInputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          required
          id="username"
          placeholder="Enter a username"
          ref={usernameInputRef}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
