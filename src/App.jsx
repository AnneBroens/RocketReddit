//routing tussen pagina's
//Dit is de data die naar postcard wordt gestuurd via de props 

import PostCard from "./components/PostCard";
import PostFeed from "./components/PostFeed";
import SearchBar from "./components/SearchBar";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
return (
  <div>
    <PostFeed/>
    <SearchBar />
    <LoadingSpinner />
  </div>
  )
}


export default App
