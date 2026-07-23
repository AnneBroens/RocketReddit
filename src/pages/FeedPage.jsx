//Hoofdpagina

import { useEffect } from "react"; //voor het ophalen van posts zodra de pagina laadt
import { useDispatch, useSelector } from "react-redux"; //om acties te dispatchen (fetchPosts) en de Redux state uit te lezen (items, status, error)
import { fetchPosts } from "../store/postSlice";
import SearchBar from "../components/SearchBar";
import PostFeed from "../components/PostFeed";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import TopicFilter from "../components/TopicFilter";


function FeedPage() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

return (
  <div className="app-content">
    <SearchBar />
    <TopicFilter />
    {status === 'loading' && <LoadingSpinner />}
    {status === 'failed' && (
      <ErrorMessage message={error} onRetry={() => dispatch(fetchPosts())} />
    )}
    {status === 'succeeded' && <PostFeed posts={items} />}
  </div>
  );
}


export default FeedPage;

