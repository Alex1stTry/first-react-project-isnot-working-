import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <h2>Movies Database</h2>
            <div className={css.addDiv}>
                <NavLink to={''}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={''}>Search</NavLink>
            </div>
            <h2>Theme</h2>
        </div>
    );
};

export {Header};