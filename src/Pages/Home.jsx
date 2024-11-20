import { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../Firebase/Firebase-config';



const Home = ( {isAuth} ) => {
  //USESTATE is use to store data
  const [postLists, setPostList] = useState([]);
 //creating a collection in our database
const postCollectionRef = collection(db, "ALLpost")
 //
 useEffect(()=>{
  try {
    const getPost = async ()=>{
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
      //console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id })));
    };
    getPost();
  } catch (error) {
    console.log(error);
  }
 }, []);
 //delete functionality...
 const  deletePost = async (id) => {
  const postDoc = doc(db, "Allpost", id)
  await deleteDoc(postDoc)
}

return(
  <div className='homePage'>
  {postLists.map((post) => {
    return (
      <div className="post" key={post.id}> 
        <div className="postHeader">
          <div className="title">
            <h1 className='font-bold text-[5vh] text-[#ecae29]'>{post.title}</h1>
          </div>
          <div className="deletePost">
            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => {deletePost(post.id)} }> &#128465; </button>}
          </div>
        </div>
        <div className="postTextContainer">{post.postText}</div>
        <h3 className='text-[#47e436]'>@{post.author?.name}</h3>
      </div>
    );
  })}
</div>
)
};


export default Home