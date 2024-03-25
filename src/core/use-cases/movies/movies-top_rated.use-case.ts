import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse as topRatedResponse } from "../../../infrastrucre/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesTopRatedUsecase = async(fetcher:HttpAdapter):Promise<Movie[]> => {
    try {
        const topRatePlaying= await fetcher.get<topRatedResponse>('/top_rated');
        return topRatePlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
        
    } catch (error) {
        throw new Error(`Erro feching movies -NowPlaaying`)
    }
}