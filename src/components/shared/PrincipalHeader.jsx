import { Link } from "react-router-dom";
import "../style/PrincipalHeader.css";

export const PrincipalHeader = () => {
  return (
    <header className="container__header">
      <h1 className="header__title">
        <Link to="/"><span className="red">Booking</span><span className="black">App</span></Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <Link to="/reservations">reservation</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
