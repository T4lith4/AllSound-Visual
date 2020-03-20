const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg  ">
      <a className="navbar-brand" href="/">
        <img
          className="logo"
          src="/static/ASV.png"
          alt="AllSound Visual Logo"
        />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/specials">
              Specials
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/gallery">
              Gallery <i class="fab fa-instagram-square"></i>
            </a>
          </li>
        </ul>

        <span className="navbar-text nav-link">
          <i className="fas fa-phone"></i>
        </span>
        <span className="navbar-text nav-link">
          <i className="far fa-envelope"></i>
        </span>
        <span className="navbar-text nav-link">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="navbar-text nav-link">
          <i className="fab fa-instagram"></i>
        </span>
      </div>
    </nav>
    <style jsx>{`
      .logo {
        width: 200px;
        padding-right: 10px;
        padding-bottom: 60px;
        margin-top: 80px;
      }

      .navbar-brand {
        font-size: 30px;
        margin-top: -40px;
        margin-right: 45%;
        margin-left: 45%;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
          1px 1px 0 #000;
      }

      .navbar-brand:hover {
        color: white;
      }
      .nav-item {
        margin-top: 180px;
      }

      .navbar-nav {
        margin-left: -1040px;
      }

      .navbar-text {
        color: grey;
        font-size: 14px;
        margin-top: 180px;
      }

      .navbar-text:hover {
        color: #c803dd;
      }

      a {
        color: grey;
        font-size: 14px;
      }
      a:hover {
        color: #c803dd;
      }
    `}</style>
  </div>
);

export default Navbar;
