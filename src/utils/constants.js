export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_movie_api}`
  }
};

export const img_cdn_uri = "https://image.tmdb.org/t/p/w500/"

export const openai_key = import.meta.env.VITE_openApi_key