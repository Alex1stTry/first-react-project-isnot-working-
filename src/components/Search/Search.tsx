import React, {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {searchService} from "../../services/searchService";
import {Movies} from "../MoviesContainer";


interface IProps {
    word:string
}

const Search:FC<IProps> = ({word}) => {


    const [movie, setMovie] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');


    useEffect(() => {
        searchService.getBySearch(word, page).then(({data})=>setMovie(data))
    }, [word, page]);




    return (
        <div>
            <Movies page={page} movies={movie} setQuery={setQuery} />
        </div>
    );
};

export {Search};