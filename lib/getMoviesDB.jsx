const API_KEY = process.env.API_KEY;

export default async function getMoviesDB(genre) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) throw new Error("Failed to Fetch Data");

  return res.json();
}
