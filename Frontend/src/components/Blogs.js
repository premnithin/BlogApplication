import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { getPosts } from "./axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const [posts,setPosts] = useState([])
  const [searchRes,setSearchRes] = useState([])

  // useEffect(()=>{
  //   getPosts().then(json=>{
  //     setPosts(json)
  //     console.log(json);
  //     return json
  //   }).then(json=>{
  //     setSearchRes(json)
  //   })
  // },[])

  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(()=> {
    sendRequest().then((data) => setBlogs(data.blogs));
    sendRequest().then((data)=>setPosts(data.blogs))
    sendRequest().then((data)=> setSearchRes(data.blogs))
  }, [])
  return <div>
    <SearchBar posts={posts} setSearchRes={setSearchRes}/>
    <SearchResults searchRes={searchRes}/>
    {/* {posts &&
      posts.map((blog, index) => (
      <Blog
        id={blog._id}
        isUser={localStorage.getItem("userId") === blog.user._id}
        title={blog.title}
        description={blog.description}
        image={blog.image}
        userName={blog.user.name}
      />
    ))} */}
  </div>
}

export default Blogs



