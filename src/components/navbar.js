import logo from '../images/logo.png';

const  Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://www.justeattakeaway.com/"><img src={logo} className="App-logo" alt="logo" /></a>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Restaurants</a>
      </div>
    </nav>
  );
}

export default Navbar;
