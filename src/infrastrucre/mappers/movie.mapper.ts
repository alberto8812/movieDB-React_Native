import { FullMovie, Movie } from "../../core/entities";
import type { MovieDetail, Result } from "../interfaces/movie-db.responses";

export class MovieMapper{
    static fromMovieDBResultToEntity(result:Result):Movie{

        return {
            id:result.id,
            title:result.title,
            description:result.overview,
            reliseDate:new Date(result.release_date),
            rating:result.vote_average,
            poster:`https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w5004${result.backdrop_path}`,
        }

    }

    static fromMovieDBToEntity (movie:MovieDetail):FullMovie {
        return {
            ... this.fromMovieDBResultToEntity(movie),
            genres:movie.genres,
            duration:movie.runtime,
            budget:movie.budget,
            originalTitle:movie.original_title,
            productionCompanies:movie.production_companies
        }
    }
}