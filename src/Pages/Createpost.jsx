import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth, db} from '../Firebase/Firebase-config'
import { addDoc, collection } from 'firebase/firestore'
const Createpost = ({isAuth}) => {
  
    const[title, setTitle]= useState('')
    const[postText, setpostText]=useState('')

    const navigate =useNavigate();
//creating a collection in our database
const postCollectionRef = collection(db, "ALLpost")

// create functionality
    const PostFunc = async ()=>{
      try {
        await addDoc(postCollectionRef,{
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        })
        
      } catch (error) {
        console.log(error.message)
      };
        
    };
    useEffect(()=>{
        if(!isAuth){
            navigate('/login');
        }
    },[])
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create New Post</h1>

        <div className="inputGp">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Title..." 
            className="text-[#3b325ba8]"
            onChange={(e)=>{
                setTitle(e.target.value)
            }}/>
        </div>

        <div className="inputGp">
            <label htmlFor="">Post:</label>
            <textarea
             placeholder="post..."
              cols={'30'} rows={'10'} 
              className="text-[#3b325ba8]"
              onChange={(e)=>{
                    setpostText(e.target.value);
                    
                }}     
                />
        </div>

        <button onClick={PostFunc}> Submit Post</button>
      </div>
    </div>
  )
}

export default Createpost
