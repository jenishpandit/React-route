import {Link} from 'react-router-dom'

function Contact() {
    return (
      <div>
        <h1>Contact page</h1>
        <h2>This is  Contact page of our App </h2>
        <h3>And here we are learning about Router</h3>
        <Link to='/'>Go To Home Page</Link>
      </div>
    );
  }
  
  export default Contact;