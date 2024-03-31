import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrastrucre/interfaces/movie-db.responses';
import { CastMapper } from '../../../infrastrucre/mappers/cast.mapper';
import { Cast } from '../../entities/cast.entity';

export const getCaseUseCase = async (fetcher: HttpAdapter, moviId: number):Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(`/${moviId}/credits`);
    const actor=cast.map(CastMapper.fromMovieDBCastToEntity);
    return actor
  } catch (error) {
    throw new Error(`El codigo de la pelicula ${moviId} no se encuentra`);
  }
};
