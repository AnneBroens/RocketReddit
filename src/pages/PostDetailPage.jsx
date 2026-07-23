import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setStatus('loading');

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);

        if (data.kids && data.kids.length > 0) {
          const commentIds = data.kids.slice(0, 15); // eerste 15 comments
          return Promise.all(
            commentIds.map((commentId) =>
              fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`).then(
                (res) => res.json()
              )
            )
          );
        }
        return [];
      })
      .then((commentsData) => {
        setComments(commentsData.filter((comment) => comment && !comment.deleted));
        setStatus('succeeded');
      })
      .catch(() => setStatus('failed'));
  }, [id]);

  if (status === 'loading') return <p>...Loading</p>;
  if (status === 'failed') return <p>Oops, something went wrong</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.score} upvotes by {post.by}</p>
      <p>{post.descendants} comments</p>
      {post.url && (
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          Read the full article
        </a>
      )}

      <h2>Comments</h2>
      {comments.length === 0 && <p>No comments yet.</p>}
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p><strong>{comment.by}</strong></p>
          <p dangerouslySetInnerHTML={{ __html: comment.text }} />
        </div>
      ))}
    </div>
  );
}

export default PostDetailPage;