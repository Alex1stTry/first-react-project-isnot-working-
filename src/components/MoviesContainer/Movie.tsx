import {FC} from "react";
import {IMovie} from "../../interfaces/MoviesInterface";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {popularity, title} = movie
    return (
        <div>
<h2>{popularity}</h2>
<h2>{title}</h2>
        </div>
    );
};
export {Movie}