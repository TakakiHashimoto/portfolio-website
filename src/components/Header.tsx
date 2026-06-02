import { Link, Outlet } from "react-router";

function Header() {
  return (
    <>
      <header className="legacy-html">
        <div>It's Takaki</div>
        <nav>
          <Link to="/about">about me </Link>{" "}
          <Link to="/projects">projects </Link>{" "}
          <Link to="/skills">skills </Link> <Link to="/mission">My goal </Link>{" "}
          <Link to="/contact">Contact me </Link>{" "}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
