import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import styles from './Nav.module.css';
import logo from '../../../assets/start.png';
export default function Nav() {

    return (
        <>
        <div className={`${styles.divNavigate} ${styles.fixedNav}`}>
            
                <div className={styles.divLogo}>
                    <img className={styles.img} src={logo} alt="logo" width='210px' height='200px' />
                    <p className={styles.glitch}>
                        <span className={styles.glitch} aria-hidden="true">GAME OVER</span>
                        GAME OVER
                        <span className={styles.glitch} aria-hidden="true">GAME OVER</span>
                    </p>
                </div>


            <div className={styles.divButtons}>

            <Link className={styles.Buttons} to='/create'><span>CREATE GAME</span></Link>

            
            </div>
            <SearchBar />
        </div>
        </>
    )
}
