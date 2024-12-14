//   return {
//     title: data.title,
//     description: data.desc,
//     keywords: data.keywords,
//     author: data.author,
//     date: data.date,
//     openGraph: {
//       images: ['https://i.ibb.co/1Kb0XZd/React.png?v=123'],
//       url: url,
//       title: data.title,
//       description: data.desc,
//     },
//   };

export async function generateMetadata({ params }) {
  const { id } = await params;
  console.log('id', id);
  const data = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`, // Replace ACCESS_TOKEN with your environment variable for the read access token
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((res) => res.json());
  console.log('data', data);
  return { title: data.original_title, description: data.overview };
}

export default function layodut({ children }) {
  return <>{children}</>;
}
