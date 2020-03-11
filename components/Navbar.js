const Navbar = () => (
  <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Insert Company Name</a>
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
  .navbar-text {
    color:red;
    font-size: 28px;
  }
.navbar-text:hover {
    color:white;
  }
.nav-link:active {
  color:blue;
}
 
  
`}</style>
</div>
);

export default Navbar;

