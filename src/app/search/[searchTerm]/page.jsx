import Result from '../../components/Result';

export default async function SearchPage({ params }) {
  const { searchTerm } = await params;
  console.log('search', searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    {
      method: 'GET',
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
      {/* {results && results.length === 0 && <h1>No result found</h1>} */}
      <Result results={results} />
    </div>
  );
}
