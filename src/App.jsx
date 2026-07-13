//routing tussen pagina's
//Dit is de data die naar postcard wordt gestuurd via de props 

import PostCard from "./components/PostCard"

function App() {
return (
  <div>
    <PostCard
    image="/Oceancleanup.avif"
    title="Ocean protection is entering a new era"
    author="User8394"
    upvotes={307} 
    />
  </div>
  )
}


export default App
