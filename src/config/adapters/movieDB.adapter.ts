import { AxiosAdapter } from "./http/axios.adapter";

 export const movieDBFecher=new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'9d209033f8558b2df6ba8c302325bed6'
    }
 });

