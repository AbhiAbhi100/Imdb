import Result from './components/Result'


const token = process.env.TMDB_TOKEN;

export default async  function Home({searchParams}) {

  const genre = searchParams.genre || 'fetchTrending';
  
  const url = `https://api.themoviedb.org/3${
    genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
  }?language=en-US&page=1`;


  //fething the data from the constructed URL using the read access token

  const res = await fetch(url,{
    headers:{
      Authorization:`Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8',
    },

    //revalidate after every 10 sec

    next:{revalidate:10000},
  });


  //response is not ok then throw error

  if(!res.ok){
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  const results = data.results;

  

  return (
    <div >
      
      <Result results={results}/>
    
    </div>
  );
}
