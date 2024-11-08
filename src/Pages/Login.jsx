import { auth, provider } from '../Firebase/Firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = ({setIsAuth}) => {

 const navigate = useNavigate();

 const GoogleSignUp = () =>{
  try {
     signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("is-Auth", true);
    setIsAuth(true);
    navigate('/')
  })
  } catch (error) {
    console.log(error)
  }


  
 }

  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={GoogleSignUp} >Sign in with Google</button>
    </div>
  )
}

export default Login
