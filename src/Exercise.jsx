import { useEffect, useState } from "react";
import UserCard from "./UserCard.jsx";
import { getUsers } from "./Services.jsx";

function Exercise() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError("Gagal mengambil data pengguna. Periksa koneksi internet.");
        console.error("[Component] Gagal menampilkan data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        User Cards
      </h1>

      {loading && (
        <p className="text-center text-gray-600">Memuat data pengguna...</p>
      )}

      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {users.map((user) => (
            <UserCard key={user.email} {...user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercise;
