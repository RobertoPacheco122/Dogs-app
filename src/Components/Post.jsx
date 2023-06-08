import React from "react";
import style from "./Post.module.css";

const Post = ({ img, visualizations }) => {
  return (
    <div className={style.imageContainer}>
      <img src={img} alt="" className={style.dogImage} />
      <span className={style.visualizations}>{visualizations}</span>
    </div>
  );
};

export default Post;
