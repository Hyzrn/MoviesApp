import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '7ccf955d40482e814b9dc01e841b369f';

export const getPopularMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/movie/upcoming?api_key=${apiKey}`,
  );
  return response.data.results;
};

export const getPopularTv = async () => {
  const response = await axios.get(`${apiUrl}/tv/popular?api_key=${apiKey}`);
  return response.data.results;
};

export const getFamilyMovies = async () => {
  const response = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  return response.data.results;
};

export const getMovie = async id => {
  const response = await axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}`);
  return response.data;
};
