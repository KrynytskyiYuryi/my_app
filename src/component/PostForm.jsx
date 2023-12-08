import React, { useState } from "react";
import "../styles/styles.css";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="post__form">
      <h3 style={{ textAlign: "center" }}>Creat post</h3>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Name of post"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description of post"
        />
        <MyButton type="button" onClick={addNewPost}>
          Creat post
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
