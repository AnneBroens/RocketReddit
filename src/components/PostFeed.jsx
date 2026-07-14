//Lijst van posts

import PostCard from "./PostCard";


// e hebt een array nodig om over te mappen. Voor nu hardcode je die bovenaan de component:
const posts = [
    {
        id: 1,
        title: "Ocean protection is entering a new era",
        author: "User8384",
        upvotes: 307,
        image: "/Oceancleanup.avif"
    },

       {
        id: 2,
        title: "New solar technology break efficiency record",
        author: "User1234",
        upvotes: 246,
        image: "/Oceancleanup.avif"
    }

]

function PostFeed() {
    return (
        <div>
        {posts.map(post => (
            <PostCard 
            key={post.id} //heeft React nodig om elk item in een lijst uniek te identificeren. Zonder key krijg je een waarschuwing in de console.
            title={post.title} 
            author={post.author} 
            upvotes={post.upvotes} 
            image={post.image} />
             ))}
        </div>
    )
}
       
export default PostFeed;