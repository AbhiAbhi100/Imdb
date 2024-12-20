import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp } from 'react-icons/fi';
import { Loader } from '@/assets';

const Card = ({ result }) => {
  console.log('result', result);
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        {result.poster_path !== null || result.backdrop_path !== null ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.poster_path || result.backdrop_path
            }`}
            alt="abb"
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          />
        ) : (
          <Image src={Loader} alt="loading" width={30} height={30} />
        )}

        <div className="p-2">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
