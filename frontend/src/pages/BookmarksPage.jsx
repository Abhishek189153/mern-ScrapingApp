import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import StoryCard from "../components/StoryCard";
import { AuthContext } from "../context/AuthContext";

const BookmarksPage = () => {
  const { userInfo } = useContext(AuthContext);

  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/users/bookmarks", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setBookmarks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      fetchBookmarks();
    }
  }, [userInfo]);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-800 text-center">
          Your Bookmarks
        </h1>

        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-600">
            Loading bookmarks...
          </div>
        ) : bookmarks.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center text-gray-600 text-lg">
            No bookmarks yet.
          </div>
        ) : (
          bookmarks.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
              onBookmark={fetchBookmarks}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;