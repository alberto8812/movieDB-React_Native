import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { Movie } from "../../entities"
import { NowPlayingResponse as upcomingResponse } from "../../../infrastrucre/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper";


export const moviesUpcommingUsecase =async (fetcher:HttpAdapter):Promise<Movie[]> => {
   try {
    
        const upcoming= await fetcher.get<upcomingResponse>('/upcoming');
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)


   } catch (error) {
    throw new Error(`Erro feching movies - upcoming`)
   }
}
