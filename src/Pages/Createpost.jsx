

const Createpost = ({isAuth}) => {
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create New Post</h1>

        <div className="inputGp">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="Title..." className="text-[#3b325ba8]"/>
        </div>

        <div className="inputGp">
            <label htmlFor="">Post:</label>
            <textarea name="" placeholder="post..." id="" cols={'30'} rows={'10'} className="text-[#3b325ba8]"></textarea>
        </div>

        <button>Submit Post</button>
      </div>
    </div>
  )
}

export default Createpost
