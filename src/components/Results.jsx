import React from "react";

function Results({ results }) {
  const content = results.map((result) => (
    <div key={result.id}>{result.original_title}</div>
  ));

  return content;
}

export default Results;
