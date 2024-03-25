import { Movie } from "../../core/entities";
import type { Result } from "../interfaces/movie-db.responses";

export class MovieMapper{
    static fromMovieDBResultToEntity(result:Result):Movie{

        return {
            id:result.id,
            title:result.title,
            description:result.overview,
            reliseDate:new Date(result.release_date),
            rating:result.vote_average,
            poster:`https://image.tmbs.org/t/p/w5004${result.poster_path}`,
            backdrop:`https://image.tmbs.org/t/p/w5004${result.backdrop_path}`,
        }

    }
}