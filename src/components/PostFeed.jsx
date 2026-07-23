import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function PostFeed() {
  const posts = useSelector((state) => state.posts.items);
  const searchTerm = useSelector((state) => state.posts.searchTerm);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id} className="post-card-wrapper">
          <Link to={`/post/${post.id}`}>
        <PostCard
          title={post.title}
          author={post.by}
          upvotes={post.score}
          numComments={post.descendants}
          numComments={post.descendants}
        />
        </Link>
        {post.url && (
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        )}
    </div>
     ))}
       </div>
  );
}

export default PostFeed;