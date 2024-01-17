import {Link} from 'react-router-dom'

function Home() {
    return (
      <div className='bg'>
        <h1>Home page</h1>
        <h2>This is  Home page of our App </h2>
        <h3>And here we are learning about Router</h3>
        <Link to='/About'>Go To About Page</Link>
        <br/>
        <Link to='/Contact'>Go To Contact Page</Link>
      </div>
    );
  }
  
  export default Home;