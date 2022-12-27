import NavBar from "./NavBar";

function Header() {
  return (
    <header className="header">
      <img className="logo-img" src="../assets/logo.png" alt="Logo" />
      <NavBar />
      <a className="cta header-cta" href="/">
        Buy Now
      </a>
    </header>
  );
}

export default Header;
