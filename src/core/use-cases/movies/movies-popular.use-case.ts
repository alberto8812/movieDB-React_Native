import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMiviesDB } from "../../../infrastrucre/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options   {
    page?:number,
    limit?:number
}


export const moviesPopularUseCase=async(fetcher:HttpAdapter,options?:Options):Promise<Movie[]>=>{

    try {
        const PupularPlaying= await fetcher.get<PopularMiviesDB>('/popular',{
            params:{
                page:options?.page ?? 1,
              
            }
        });
        return PupularPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
        
    } catch (error) {
        throw new Error(`Erro feching movies -popularUseCase`)
    }

}