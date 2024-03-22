import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Post } from "../components/Post";
import { blue } from "@mui/material/colors";

export const TagPosts = () => {
  const { tag } = useParams(); // Получаем имя тега из параметра маршрута
  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);

  const filteredPosts = posts.items.filter((post) =>
    post.tags.includes(tag)
  );

  return (
    <>
      <h1 style={{color: blue}}>#{tag}</h1>
      {filteredPosts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          imageUrl={
            post.imageUrl ? `http://localhost:8080${post.imageUrl}` : ""
          }
          user={post.user}
          createdAt={post.createdAt}
          viewsCount={post.viewsCount}
          commentsCount={3}
          tags={post.tags}
          isEditable={userData?._id === post.user._id}
        />
      ))}
    </>
  );
};
