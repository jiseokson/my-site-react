import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function Post() {
  const [post, setPost] = useState({});
  const [isLading, setLoading] = useState(true);

  const getPost = async () => {
    const response = await fetch("http://api.igoofficial.com/posts/");
    const json = await response.json();
    setPost(json[0]);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {isLading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello this is my site!</h1>
      <Post />
    </div>
  );
}

export default App;
