import {Link} from 'react-router-dom'
function About() {
    return (
      <div>
        <h1>About page</h1>
        <h2>This is  About page of our App </h2>
        <h3>And here we are learning about Router</h3>
        <Link to='/'>Go To Home Page</Link>
      </div>
    );
  }
  
  export default About;