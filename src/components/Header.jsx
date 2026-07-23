import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-link">
        <span className="header-icon">🚀</span>
        <h1>RocketReddit</h1>
      </Link>
    </header>
  );
}

export default Header;