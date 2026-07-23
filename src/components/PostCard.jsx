




function PostCard({ title, upvotes, author, numComments, url }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <span>{upvotes} upvotes</span>
      <span>by {author}</span>
      <span>{numComments} comments</span>
      <button>Share</button>
      <button>Comment</button>
    </div>
  );
}

export default PostCard;