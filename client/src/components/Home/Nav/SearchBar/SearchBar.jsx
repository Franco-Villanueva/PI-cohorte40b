import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPage } from "../../../../redux/actions/actions";
import styles from './SearchBar.module.css';

export default function SearchBar(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("")

    function handleInputChange(event){
        event.preventDefault()
        setName(event.target.value)   
    }

    function handleSubmit(event){
        event.preventDefault()
        if (name.trim() !== "") {
            navigate(`/onsearch/${name}`)
            setName("");
            dispatch(setPage(1))
            
        }
    }

    return (
        <div className={styles.searchBarContainer}>
            <form onSubmit={handleSubmit}>

                <input
                className={styles.searchInput}
                onChange={handleInputChange}
                value={name}
                type= 'text'
                placeholder="Search..."
                />

                <button className={styles.searchButton} type="submit">
                    Search
                </button>

            </form>
        </div>
    )
}