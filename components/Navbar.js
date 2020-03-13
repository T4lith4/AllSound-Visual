const Navbar = () => (
  <div>
<nav className="navbar navbar-expand-lg  bg-dark">
  <a className="navbar-brand" href="/">AllSound Visual</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/installations">Installations</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/specials">Specials</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/gallery">Gallery</a>
      </li>
    </ul>
    <span className="navbar-text nav-link">
    <i class="fab fa-facebook-square"></i></span>
      <span className="navbar-text nav-link">
      <i class="fas fa-phone-square"></i></span>
      <span className="navbar-text nav-link">
      <i class="fas fa-envelope-square"></i></span>
  </div>
</nav>
<style jsx>{`
  .navbar-brand {
    color:red;
  }
  .navbar-brand:hover {
    color: blue
  }
  
  .navbar-text {
    color: darkgrey;
    font-size: 22px;
  }
 
  .navbar-text:hover {
    color: red;
  }

a {
  color: darkgrey;
  font-size: 14px;
}
a:hover {
  color: red;
}
 
  
`}</style>
</div>
);

export default Navbar;

