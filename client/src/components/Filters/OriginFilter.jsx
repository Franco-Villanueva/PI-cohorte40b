import React from "react";
import {  useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { filterPlace, setPage } from "../../redux/actions/actions";
import styles from './Filters.module.css'


export default function OriginFilter() {

    const dispatch = useDispatch();

    const handleSelect = ( event ) => {
        const value = event.target.value;
        dispatch(setPage( 1 ))
        dispatch( filterPlace( value ))
    }

    return (
        <>
        <div className={styles.filtersContainer}>
            <select className={styles.customSelect} onChange={ handleSelect } defaultValue={'DEFAULT'}>
                    <option className={styles.customOption}  value="DEFAULT" disabled> Origin </option>
                    <option className={styles.customOption} value="All">All</option>
                    <option className={styles.customOption} value="Api"> API </option>
                    <option className={styles.customOption} value="Created"> Database </option>
            </select>
        </div>
        </>
    )
}