import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMiviesDB } from "../../../infrastrucre/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesPopularUseCase=async(fetcher:HttpAdapter):Promise<Movie[]>=>{

    try {
        const PupularPlaying= await fetcher.get<PopularMiviesDB>('/popular');
        return PupularPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
        
    } catch (error) {
        throw new Error(`Erro feching movies -popularUseCase`)
    }

}