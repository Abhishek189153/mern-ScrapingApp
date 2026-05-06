import { useContext, useState } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const StoryCard = ({ story, onBookmark }) => {
  const { userInfo } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    try {
      setLoading(true);

      await API.post(
        `/stories/${story._id}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      if (onBookmark) {
        onBookmark();
      }
    } catch (error) {
      console.log(error);
      alert("Bookmark action failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 mb-6">
      <div className="flex justify-between items-start gap-4">
        <div>
          <a
            href={story.url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-slate-800 hover:text-cyan-600 transition"
          >
            {story.title}
          </a>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
               {story.points} points
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-full">
               {story.author}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-full">
               {story.postedAt}
            </span>
          </div>
        </div>

        {userInfo && (
          <button
            onClick={handleBookmark}
            disabled={loading}
            className="bg-slate-900 hover:bg-slate-700 text-white px-5 py-3 rounded-xl transition whitespace-nowrap"
          >
            {loading ? "Saving..." : "Bookmark"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StoryCard;