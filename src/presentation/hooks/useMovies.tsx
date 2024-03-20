import { useEffect, useState } from "react"
import { Movie } from "../../core/entities";

import * as UseCases from '../../core/use-cases'
import { movieDBFecher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {

    const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        initialLoad();
    }, [])
    
    const initialLoad=async()=>{
        const nowPlayingMovies= await UseCases.moviesNowPlayinUseCase(movieDBFecher)
    }


  return {
    

  }
}
