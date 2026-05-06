import { useEffect, useState } from "react";
import API from "../services/api";
import StoryCard from "../components/StoryCard";

const HomePage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStories = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/stories");

      setStories(data.stories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-slate-800 mb-4">
            Top Hacker News Stories
          </h1>

          <p className="text-gray-600 text-lg">
            Stay updated with the latest tech stories from Hacker News.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            Loading stories...
          </div>
        ) : (
          stories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              onBookmark={fetchStories}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;