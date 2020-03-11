import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <Head>
      <title>AllSound Visual</title>
      {'Bootstrap Link'}
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"
      />
    {'FontAwesome Link'}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" 
          integrity="sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN" crossorigin="anonymous">
    </link>
    </Head>
    <Navbar />
    {props.children}
    <Footer/>
  </div>
);

export default Layout;
