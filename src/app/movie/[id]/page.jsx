import Image from "next/image";
import getMovie from "../../../../lib/getMovie";

export default async function MovieId({ params }) {
  const movieId = params.id;
  const movieData = getMovie(movieId);

  const movie = await movieData;

  const content = (
    <div className="py-4 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="flex items-center md:flex-row flex-col justify-center content-center md:space-x-8">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title}
          width={500}
          height={300}
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/Rolling.svg"
          className="rounded-lg"
        />
        <div className="space-y-2 mt-8 md:mt-0">
          <h2 className="font-bold text-2xl text-slate-700 dark:text-gray-300">
            {movie.title}
          </h2>
          <p className="text-lg font-light">
            <span className="font-semibold text-lg">Overview: </span>
            {movie.overview}
          </p>
          <p>
            <span className="font-semibold text-lg">Date Release:</span>{" "}
            {movie.release_date}
          </p>
          <p className="">
            <span className="font-semibold text-lg">Rating:</span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );

  return content;
}
