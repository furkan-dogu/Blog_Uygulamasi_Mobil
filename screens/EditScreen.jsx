import { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation, route }) {
  const { state, editBlogPost } = useContext(Context);

  const id = route.params.id

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  const initialValues = {
    title: blogPost.title,
    content: blogPost.content,
  };

  const onSubmit = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop());
  };

  return (
    <BlogPostForm
      isEditable={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
}