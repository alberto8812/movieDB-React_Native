import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieDetail } from "../../../infrastrucre/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastrucre/mappers/movie.mapper"
import { FullMovie } from "../../entities"


export const getByIdUsecase = async(fetcher:HttpAdapter,movieId:number):Promise<FullMovie> => {
  try {
    //fecher
    const fullMovie= await fetcher.get<MovieDetail>(`/${movieId}`)
   console.log(fullMovie)
    //mapper
    return  MovieMapper.fromMovieDBToEntity(fullMovie)
  } catch (error) {
    throw new Error (`Cannot get movie by id  ${movieId}`)
  }
}
