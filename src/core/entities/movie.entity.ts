/*como va a lucir nuestro modelo de peliculas */

export interface Movie{
    id:number;
    title:string;
    description:string;
    reliseDate:Date;
    rating:number;
    poster:string;
    backdrop:string
}


export interface FullMovie extends Movie {
    genres:Genre[],
    duration:number,
    budget:number,
    originalTitle:string,
    productionCompanies:ProductionCompany[],

}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

