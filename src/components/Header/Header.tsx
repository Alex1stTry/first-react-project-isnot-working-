import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemSwitcher} from '../Switcher/Switcher';

const Header = () => {
    return (
        <div className={css.Header}>
            <h2>Movies Database</h2>
            <div className={css.addDiv}>
                <NavLink to={''}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'/search'}>Search</NavLink>
            </div>
            <h2><span className={css.theme}>Theme </span>
                <ThemSwitcher/></h2>
        </div>
    );
};

export {Header};