import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export default function CreateScreen({navigation}) {
  const { addBlogPost } = useContext(Context);

  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate("Index"));
  };

  return <BlogPostForm isEditable={false} onSubmit={onSubmit} />;
}