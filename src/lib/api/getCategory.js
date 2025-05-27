export const getCategory = async ({ Page = 1, categoryName }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${categoryName}?language=en-US${Page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        },
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
