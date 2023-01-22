import NavBar from "./NavBar";

// This is the header section
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
