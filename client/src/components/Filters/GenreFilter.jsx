import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllGenres, filterGenre, setPage } from '../../redux/actions/actions'
import styles from './Filters.module.css'

function GenreFilter() {
    const dispatch = useDispatch();
    const allGenres = useSelector( state => state.allGenres )
    
    useEffect(() => {
        dispatch( getAllGenres() )
    },[ dispatch ]);
    
    const handleSelect =  ( evento ) => {
        const value = evento.target.value;
        dispatch(setPage( 1 ));
        dispatch( filterGenre( value ));
    };
    
    return (
        <div className={styles.filtersContainer}>
            <select className={styles.customSelect} onChange={ handleSelect } defaultValue={'DEFAULT'}>
                <option  value="DEFAULT" disabled> Genre </option>
                <option  value="All" > All </option>
                {
                    allGenres.map(( genre, index ) => {
                        return(
                            <option className={styles.customOption}  value={ genre } key={ index } > { genre } </option>
                        )
                    })    
                }
            </select>
        </div>

    )
}

export default GenreFilter