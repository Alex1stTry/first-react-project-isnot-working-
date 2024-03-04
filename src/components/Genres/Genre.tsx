import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMovieGenres} from "../../interfaces";
import css from './Buttons.module.css'
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
        <div className={css.Buttons}>
            <button onClick={nav}>{name}</button>
        </div>
    );
};
export {Genre}