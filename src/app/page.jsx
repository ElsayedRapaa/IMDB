import Results from "@/components/Results";
import getMoviesDB from "../../lib/getMoviesDB";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const movieData = getMoviesDB(genre);

  const results = await movieData;

  const content = (
    <main className="">
      <Results results={results.results} />
    </main>
  );

  return content;
}
