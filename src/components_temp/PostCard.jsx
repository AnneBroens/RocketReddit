//1 post 

function PostCard({image, title, upvotes, author}) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <span>{upvotes}</span>
            <span>{author}</span>
            <button>Share</button>
            <button>Comment</button>
        </div>
    )
}

export default PostCard