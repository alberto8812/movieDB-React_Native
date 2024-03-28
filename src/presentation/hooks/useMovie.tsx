import React, { useEffect, useState } from 'react'
import { getByIdUsecase } from '../../core/use-cases/movie/get-by-id.use-case';
import { movieDBFecher } from '../../config/adapters/movieDB.adapter';
import { FullMovie } from '../../core/entities';

export const useMovie = (movieId:number) => {
        const [isLoading, setIsLoading] = useState(true);
        const [movieDetail, setMovieDetail] = useState<FullMovie>()


        useEffect(() => {
            loadMovie();
            setIsLoading(true);
        }, [movieId]);

        const loadMovie=async()=>{
          setIsLoading(false);
           const movie=await getByIdUsecase(movieDBFecher,movieId)
           setMovieDetail(movie);
  
            }
        
  return {
    isLoading,
    movieDetail
  }
}
