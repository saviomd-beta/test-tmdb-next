import Head from "next/head";
import styles from "../styles/Home.module.css";

import type { IMovieDetails } from "../../types";
import { fetchTmdb, tmdbApi } from "../../utils";

interface IProps {
  movie: IMovieDetails;
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { moviesDetails } = tmdbApi.methods;
  const movie = await fetchTmdb({ path: moviesDetails({ id }) });
  return {
    props: {
      movie: {
        budget: movie.budget,
        overview: movie.overview,
        release_date: movie.release_date,
        revenue: movie.revenue,
        runtime: movie.runtime,
        title: movie.title,
      },
    },
  };
}

export default function Home({ movie }: IProps) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <div>
        <h1 className="font-bold text-2xl">{movie.title}</h1>
        <p className="mb-4">
          <span className="font-bold">release_date:</span> {movie.release_date}
        </p>
        <p className="mb-4">
          <span className="font-bold">runtime:</span> {movie.runtime}
        </p>
        <p className="mb-4">
          <span className="font-bold">overview:</span> {movie.overview}
        </p>
        <p className="mb-4">
          <span className="font-bold">budget:</span> {movie.budget}
        </p>
        <p className="mb-4">
          <span className="font-bold">revenue:</span> {movie.revenue}
        </p>
      </div>
    </>
  );
}
