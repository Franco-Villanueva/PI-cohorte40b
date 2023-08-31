import React from "react";
import OrderFilter from './OrderFilter'
import GenreFilter from "./GenreFilter";
import OriginFilter from "./OriginFilter";
import styles from "./Filters.module.css"


export default function Filters() {


    return (
        <>
             <div className={styles.divMain} >
                <div className={styles.divFilter}>
                    <OrderFilter  />
                </div>
                <div className={styles.divFilter}>
                    <GenreFilter />
                </div>
                <div className={styles.divFilter}>
                    <OriginFilter />
                </div>
            </div>
        </>
    )
}
