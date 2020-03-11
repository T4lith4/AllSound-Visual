//Footer componenet with active links
//import Link from "next/link";
const Footer = () => (
  <div className="nav">
    <p id="comp">AllSound Visual</p>
  
    <div id="icon-box">
      {" "}
      <a
        href="mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual"
        target="_top"
        className="icon-link"
      >
        <i class="fas fa-envelope-square icon"></i>
      </a>
     
        {" "}
        <i class="fab fa-facebook-square icon"></i>
     
     
        {" "}
        <i class="fas fa-phone-square icon"></i>
     
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
        bottom: 0;
        font-size: 25px;
        color: red;
      }
      .nav .fas {
        color: blue;
      }

      a {
        font-size: 25px;
        color: blue;
      }
      #comp {
        color: yellow;
        border: 1px solid red;

      }
      #icon-box {
        border: 1px solid blue;
        width: 100%;
        height: 50px;
      }
    `}</style>
  </div>
);

export default Footer;
