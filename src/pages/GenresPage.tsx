import React, {useEffect, useState} from 'react';
import {Genres} from "../components/Genres/Genres";
import {IGenre} from "../interfaces";
import {genresService} from "../services/genresService";
import {Outlet} from "react-router-dom";

const GenresPage = () => {
    const [genres, setGenres] = useState<IGenre>(null)
    useEffect(() => {
        genresService.getAll().then(({data}) => setGenres(data))
    }, []);
    console.log(genres)
    return (

        <div>
            {genres && <Genres genres={genres}/>}
            <Outlet/>
        </div>
    );
};

export {GenresPage};