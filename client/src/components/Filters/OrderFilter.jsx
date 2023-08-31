import React from "react";
import {  useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { filterOrder, filterRating,setPage } from '../../redux/actions/actions';
import styles from './Filters.module.css'

export default function Filters() {



    const dispatch = useDispatch();

    const handleSelect = (event) => {

        const {value} = event.target;


        if (value === "asc" || value === "desc") {
            dispatch(filterOrder(value));
            
        } else {
            dispatch(filterRating(value));
            
        }
        dispatch(setPage(1))
    };

    return (
        <>
        <div className={styles.filtersContainer}>
            <select className={styles.customSelect} onChange={handleSelect} defaultValue={'DEFAULT'}>
                <option className={styles.customOption} value="DEFAULT" disabled> Order by: </option>
                <option className={styles.customOption} value="DEFAULT" disabled> Name </option>
                <option className={styles.customOption} value="asc"> A-Z </option>
                <option className={styles.customOption} value="desc"> Z-A </option>
                <option className={styles.customOption} value="DEFAULT" disabled> Rating </option>
                <option className={styles.customOption} value="rDesc"> Higher to lower </option>
                <option className={styles.customOption} value="rAsc"> Lower to higher </option>
            </select>
        </div>
        </>
    )
}