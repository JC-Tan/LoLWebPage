import { useRef } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const usernameInputRef = useRef();
  const buttonURL =
    "https://www.freeiconspng.com/uploads/search-icon-png-1.png";
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUsername(usernameInputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <div className={styles.search}>
          {/* <label htmlFor="username">Username</label> */}
          <input
            className={`${styles["input-box"]}`}
            type="text"
            required
            id="username"
            placeholder="Enter a username"
            ref={usernameInputRef}
          />
        </div>
        <div className={`${styles["button-container"]}`}>
          <button className={`${styles["submit-button"]}`} type="submit">
            <img src={buttonURL} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
