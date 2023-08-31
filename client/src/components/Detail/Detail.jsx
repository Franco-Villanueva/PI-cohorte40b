import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css'
import imgLoading from '../../assets/loading.gif'

export default function Card() {

    const [videoGame,setVideoGame]= useState({})

    const {id} = useParams()    

    useEffect(() => {
        axios(`http://localhost:3001/games/videogames/${id}`).then(({ data }) => {
           if (data.name) {
              setVideoGame(data);
           } 
        }).catch((err)=>alert(err))
        return ()=> setVideoGame({});
     }, [id]);

    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <>

         
            <div className={styles.divMain}>
                {Object.keys(videoGame).length === 0 ?( 
                <div >
                    <img  src={imgLoading} alt="Loading" />
                </div>
                ):(
                    <>
                <div>
                        <img className={styles.img} src={videoGame.image} alt={videoGame.name} width='900px' height='700px' />
                </div>
                    <div>
                        <h1>{videoGame.name}</h1>
                        <div className={styles.divDeco}></div>
                        <h2>release:{videoGame.release}</h2>
                        <div className={styles.divDeco}></div>
                        <h2>rating: {videoGame.rating}✨</h2>
                        <div className={styles.divDeco}></div>
                        <div className={styles.divDes}>
                        <div dangerouslySetInnerHTML={{ __html: videoGame.description }} />
                        </div>
                        <div className={styles.divDeco}></div>
                        <h2>Genres</h2>
                        
                            {videoGame.genres?.length > 0 && (
                                <div className={styles.divElemt}>
                                    
                                    {videoGame.genres.map((element, index) => (
                                        <div key={index}>
                                            <h4>-{element}-</h4>
                                        </div>
                                    ))}
                                </div>
                            )}
                        <div className={styles.divDeco}></div>
                        <h2>Platforms</h2>

                            {videoGame.platforms?.length > 0 && (
                                <div className={styles.divElemt}>
                                    
                                    {videoGame.platforms.map((element, index) => (
                                        <div key={index}>
                                            <h4>-{element}-</h4>
                                        </div>
                                    ))}
                                </div>
                            )}
                    <button className={styles.buttonBack} onClick={handleGoBack}>
                        Go Back
                    </button>
                    
                </div>
                </>
                )}
                
            </div>
    
        </>
    )
}
