import Results from "@/components/Results";
import getSearchResult from "../../../../lib/getSearchResult";

export default async function SearchTerm({ params }) {
  const searchTerm = params.searchTerm;
  const searchResults = getSearchResult(searchTerm);

  const results = await searchResults;

  return (
    <div className="">
      {results.results && results.results.length === 0 && (
        <h2 className="text-center font-bold my-12 text-xl">
          This Keyword {searchTerm} Not Found
        </h2>
      )}

      {results.results && <Results results={results.results} />}
    </div>
  );
}
