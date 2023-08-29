import React from "react";
import styles from './LandingPage.module.css'
import { Link } from "react-router-dom";
import logo from '../../assets/start.png'
import { useDispatch,useSelector } from "react-redux";
import { getAllVideoGames,getAllGenres } from "../../redux/actions/actions";

export default function LandingPage() {

    const allGenres = useSelector(state=>state.allGenres)
    
    const dispatch = useDispatch(); 

    React.useEffect(() => {
        dispatch(getAllVideoGames());
        dispatch(getAllGenres());
    }, [dispatch]);

    const handleStartClick = () => {
        console.log(allGenres);
    };

    return (
        <>
        <div className={styles.divContainer}>
            <div>
            <img src={logo} alt="logo" width='200px' height='200px' />
            <h1 className={styles.title}>Game Over</h1>
            </div>
        <Link className={styles.links} to='/home'>
            <p className={styles.glitch} onClick={handleStartClick}>
                <span className={styles.glitch} aria-hidden="true">Press Start</span>
                Press Start
                <span className={styles.glitch} aria-hidden="true">Press Start</span>
            </p>
        </Link>
        <ul className={styles.divList}>
            <ul><a href="https://www.linkedin.com/in/franco-villanueva-b72b95237/" target="_blank" rel="noopener noreferrer">Facebook</a></ul>
            <ul><a href="https://www.linkedin.com/in/franco-villanueva-b72b95237/" target="_blank" rel="noopener noreferrer">Instagram</a></ul>
            <ul><a href="https://www.linkedin.com/in/franco-villanueva-b72b95237/" target="_blank" rel="noopener noreferrer">Twitter</a></ul>
            <ul><a href="https://www.linkedin.com/in/franco-villanueva-b72b95237/" target="_blank" rel="noopener noreferrer">LinkedIn</a></ul>
        </ul>
        </div>

        </>
    )
}
