import Link from "next/link";

import MovieSearchForm from "../components/MovieSearchForm";
import type { IMovieDetails } from "../types";
import { fetchTmdb, tmdbApi } from "../utils";

interface IProps {
  movies: IMovieDetails[];
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  let movies = [];
  if (name) {
    const { searchMovie } = tmdbApi.methods;
    const { path, queryString } = searchMovie({ name });
    const { results } = await fetchTmdb({ path, queryString });
    movies = results;
  }
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }: IProps) {
  return (
    <div>
      <MovieSearchForm />
      <ul>
        {movies.map(({ id, overview, title }: IMovieDetails) => (
          <li className="border mb-4 p-4 rounded" key={id}>
            <h2 className="font-bold text-xl">
              <Link href={`/movie/${id}`}>{title}</Link>
            </h2>
            <div>{overview}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
