import React, {useEffect, useState} from 'react';
import {getByIdUsecase} from '../../core/use-cases/movie/get-by-id.use-case';
import {movieDBFecher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities';
import {Cast} from '../../core/entities/cast.entity';
import {getCaseUseCase} from '../../core/use-cases/movie/get-case.use-case';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState<FullMovie>();
  const [castDetail, setCastDetail] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
    setIsLoading(true);
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getByIdUsecase(movieDBFecher, movieId);
    const CastlMoviePromise = getCaseUseCase(movieDBFecher, movieId);
    const [movie,cast]=await Promise.all([fullMoviePromise,CastlMoviePromise])
    setMovieDetail(movie);
    setCastDetail(cast);
  };

  return {
    isLoading,
    movieDetail,
    castDetail
  };
};
