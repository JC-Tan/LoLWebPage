import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

/**
 * MainNavigation
 * Contains the buttons that brings the user
 * to a different page.
 */
const MainNavigation = () => {
  return (
    <div className={`${styles["main-nav-wrapper"]}`}>
      <div className={`${styles["nav-item-wrapper"]}`}>
        <Link to="/LoLWebPage" className={`${styles["nav-content"]}`}>
          <p className={styles.par}>Champions</p>
          <div className={`${styles["blue-bar"]}`} />
        </Link>
      </div>
      <div className={`${styles["nav-item-wrapper"]}`}>
        <Link to="/user-page" className={`${styles["nav-content"]}`}>
          <p className={styles.par}>Users</p>
          <div className={`${styles["blue-bar"]}`} />
        </Link>
      </div>
    </div>
  );
};

export default MainNavigation;
