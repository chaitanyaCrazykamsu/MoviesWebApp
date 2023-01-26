export interface Movies{
    adult: boolean;
    backdrop_path: String;
    genre_ids: number[];
    id: number;
    original_language: String;
    original_title: String;
    overview: String;
    popularity: number;
    poster_path: String;
    release_date: String;
    title: String;
    video: boolean;
    vote_average: number;
    vote_count: boolean;
    genres: genres[];
    status: String;
    runtime: String;
    revenue: number;
   
}

export interface moviesDto{
    page: number,
    results: Movies[],
    total_results: number,
    total_pages: number

}

export interface genres{
    id:number;
    name:String;
}