import { useEffect, useState } from "react";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.js";

function Exercise() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError("Gagal mengambil data pengguna. Periksa koneksi internet.");
        console.error("[Component] Gagal menampilkan data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>

      {loading && (
        <p className="text-center text-gray-600">Memuat data post...</p>
      )}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <PostCard key={index} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercise;
