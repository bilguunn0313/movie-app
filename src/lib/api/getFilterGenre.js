export const getFilterGenre = async (genreIds, page = 1) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log("filter", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
