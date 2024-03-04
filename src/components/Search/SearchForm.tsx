import {Search} from "./Search";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ISearchWord} from "../../interfaces";


const SearchForm = () => {
    const {handleSubmit, reset, register} = useForm()
    const [word, setWord] = useState<string>('A')

    const search:SubmitHandler<any> = (query: ISearchWord) => {
        setWord(query.word)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input  type="text" placeholder={'Movie'} {...register('word')}/>
                <button >Search</button>
            </form>
            <Search word={word}/>
        </div>
    );
};

export {SearchForm};
