import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";

export default function Card({ result }) {
  return (
    <Link
      href={`/movie/${result.id}`}
      className="border border-slate-600 cursor-pointer rounded-lg p-2 hover:shadow-md transition-shadow hover:shadow-slate-300 dark:hover:shadow-slate-700 space-y-2"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
        alt={result.title}
        width={500}
        height={300}
        style={{ maxWidth: "100%", height: "auto" }}
        className="rounded-t-lg"
        placeholder="blur"
        blurDataURL="Rolling.svg"
      />
      <p className="line-clamp-2 text-md">{result.overview}</p>
      <h2 className="truncate text-base font-bold text-slate-700 dark:text-slate-400">
        {result.title}
      </h2>
      <p className="flex items-center">
        {result.release_date}
        <AiOutlineLike className="mr-1 ml-4" />
        {result.vote_count}
      </p>
    </Link>
  );
}
