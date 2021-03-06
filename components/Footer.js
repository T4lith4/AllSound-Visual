//Footer componenet with active links

const Footer = () => (
  <div className="nav">
    <div id="icon-box">
      <div id="comp">
        AllSound Visual is registered as FC AV and Security Pty Ltd 2017
      </div>{" "}
      <a
        href="mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual"
        target="_top"
        className="icon-link"
      >
        <i class="fas fa-envelope-square icon"></i>
      </a>{" "}
      <a
        href="mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual"
        target="_top"
        className="icon-link"
      >
        <i class="fab fa-facebook-square icon"></i>
      </a>{" "}
      <a
        href="mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual"
        target="_top"
        className="icon-link"
      >
        <i class="fas fa-phone-square icon"></i>
      </a>
    </div>

    <style jsx>{`
      .nav {
        background: darkgrey;
        font-family: calibri;
        display: flex;
        justify-content: center;
        padding: 10px;
        width: 100%;
        position: absolute;
        margin-bottom: 0;
        font-size: 25px;
      }

      #comp {
        font-size: 15px;
        padding: 10px;
        margin-top: 7px;
        color: #1b171f;
        font-weight: lighter;
      }

      #comp:hover {
        color: black;
      }

      #icon-box {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
      }
      #icon-box a {
        color: #1b171f;
        padding: 10px;
      }
      #icon-box a:hover {
        color: black;
      }
    `}</style>
  </div>
);

export default Footer;
