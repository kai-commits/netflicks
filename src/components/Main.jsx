import axios from 'axios';
import { useEffect, useState } from 'react';
import { requests } from '../Requests';

export const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  console.log(movies);

  return <div>Main</div>;
};
