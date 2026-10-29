export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    return posts.map((post) => ({
      title: post.title,
      body: post.body,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);

    throw error;
  }
};
