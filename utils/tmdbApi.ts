interface MovieDetailsParams {
  id: number;
}

interface SearchMovieParams {
  name: string;
}

const tmdbApi = {
  key: "6f875d4fba2e999f480afa6275a08f75",
  methods: {
    moviesDetails: ({ id }: MovieDetailsParams) => `movie/${id}`,
    searchMovie: ({ name }: SearchMovieParams) => ({
      path: `search/movie`,
      queryString: `&query=${name}`,
    }),
  },
  url: "https://api.themoviedb.org/3/",
};

export default tmdbApi;
