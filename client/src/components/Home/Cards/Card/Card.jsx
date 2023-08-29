import React from "react";
import styles from './Card.module.css'

export default function Card({name,image,genres}) {

    return (
        <>
         <div className={styles.cardContainer}>
            <img src={image} alt="game" width="270px" height="170px" />
            <h2>{name}</h2>
            <div className={styles.genres}>
                {genres.map((element) => (
                    <div key={element}>
                        <h5>{element}</h5>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
