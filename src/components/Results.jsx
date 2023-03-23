import React from "react";
import Card from "./Card";

function Results({ results }) {
  const content = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-8 gap-4 px-6 sm:px-8 max-w-6xl mx-auto">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );

  return content;
}

export default Results;
