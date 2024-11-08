
import { Link } from 'react-router-dom'

const Navbar = ({GoogleSignout, isAuth}) => {
  return (
    <nav className='nav'>
        <Link to='/'>Blogs</Link>

        {
          !isAuth ? (<Link to='/login'>Login</Link>) :(
            <>
            <Link to='/create-post'>Create Post</Link>
           <button className='login-btn' onClick={GoogleSignout}>Sign Out</button>
        </>)
        }
      
    </nav>
  )
};

export default Navbar
