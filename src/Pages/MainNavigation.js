import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header>
      <div>Div with logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/LoLWebPage">Champion Page!</Link>
          </li>
          <li>
            <Link to="/user-page">User Page!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
