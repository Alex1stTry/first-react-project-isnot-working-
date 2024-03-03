import {FC} from "react";
import {IMovieGenres} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IMovieGenres
}

const Genre: FC<IProps> = ({genre}) => {
    const navigator = useNavigate()
    const {name, id} = genre
    const nav = () => {
        navigator(`${id}`)
    }
    return (
        <div>
            <button onClick={nav}>{name}</button>
        </div>
    );
};
export {Genre}