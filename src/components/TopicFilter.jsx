import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../store/postSlice";

const topics = ["climate", "science", "energy", "technology", "space", "AI"];

function TopicFilter() {
  const dispatch = useDispatch();
  const activeTerm = useSelector((state) => state.posts.searchTerm);

  return (
    <div className="topic-filter">
      {topics.map((topic) => (
        <button
          key={topic}
          className={activeTerm === topic ? "active" : ""}
          onClick={() => dispatch(setSearchTerm(topic))}
        >
          {topic}
        </button>
      ))}
      <button onClick={() => dispatch(setSearchTerm(''))}>Clear</button>
    </div>
  );
}

export default TopicFilter;