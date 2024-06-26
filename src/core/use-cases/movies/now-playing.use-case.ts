import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastrucre/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesNowPlayinUseCase=async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
        const nowPlaying= await fetcher.get<NowPlayingResponse>('/now_playing');
        return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
        
    } catch (error) {
        throw new Error(`Erro feching movies -NowPlaaying`)
    }

}