import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities';

import * as UseCases from '../../core/use-cases';
import {movieDBFecher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [upComming, setUpComming] = useState<Movie[]>([]);
  const [topRate, setTopRate] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [nowPlayingMovies, upcommingMovies, topRateMovies, popularMovies] =
      await Promise.all([
        UseCases.moviesNowPlayinUseCase(movieDBFecher),
        UseCases.moviesUpcommingUsecase(movieDBFecher),
        UseCases.moviesTopRatedUsecase(movieDBFecher),
        UseCases.moviesPopularUseCase(movieDBFecher),
      ]);
    setnowPlaying(nowPlayingMovies);
    setUpComming(upcommingMovies);
    setTopRate(topRateMovies);
    setPopular(popularMovies);
  };

  return {
    isLoading,
    upComming,
    topRate,
    popular,
    nowPlaying,
  };
};
