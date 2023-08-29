import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <div>
            <button></button>
            <img src={videoGame.image} alt={videoGame.name} width='1000px' height='700px' />
            <h1>{videoGame.name}</h1>
            <h2>release:{videoGame.release}</h2>
            <h2>rating: {videoGame.rating}</h2>
            <div dangerouslySetInnerHTML={{ __html: videoGame.description }} />
            {videoGame.genres?.length > 0 && (
                <div>
                    <h3>Genres:</h3>
                    {videoGame.genres.map((element, index) => (
                        <div key={index}>
                            <h4>{element}</h4>
                        </div>
                    ))}
                </div>
            )}
            {videoGame.platforms?.length > 0 && (
                <div>
                    <h3>Platforms:</h3>
                    {videoGame.platforms.map((element, index) => (
                        <div key={index}>
                            <h4>{element}</h4>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleGoBack}>
                Go Back
            </button>
        </div>
        </>
    )
}
