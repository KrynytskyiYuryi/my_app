import React from "react";
import "../styles/styles.css";
import MyButton from "./UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div>
        <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
          Info
        </MyButton>
      </div>
      <div>
        <MyButton
          onClick={() => props.remove(props.post)}
          className="post__btn"
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};
export default PostItem;
