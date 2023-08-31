import React from "react";
import styles from './Card.module.css'
import defaultImage from '../../../../assets/imgdefault.jpeg';

export default function Card({name,image,genres}) {
    const imageSource = image || defaultImage;

    return (
        <>
         <div className={styles.cardContainer}>
            <img src={imageSource} alt="game" width="270px" height="170px" />
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
