import React from 'react';
import Result from '../../components/Result';

export default async function SearchPage({ params }) {
  const searchToken = params.searchToken;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchToken}&language=en-US&page=1&include_adult=false`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1>No result found</h1>
      )}
      {results && results.length > 0 && <Result results={results} />}
    </div>
  );
}
