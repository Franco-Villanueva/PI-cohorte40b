import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useState } from "react";
import styles from './Form.module.css'
import imgDefault from '../../assets/imgdefault.jpeg'


const regexRating = /^[0-5](\.[0-9]{1,2})?$/;

export default function Form() {

    const allGenres = useSelector(state => state.allGenres);

    const [formData, setFormData] = useState({
        name: "",
        image: `${imgDefault}`,
        description: "",
        platforms: [],
        release: "",
        rating: 0,
        genres: [],
    })

    const [platformInput, setPlatformInput] = useState("");

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePlatformInputChange = (event) => {
        setPlatformInput(event.target.value);
    };

    const handleAddPlatform = () => {
        if (platformInput && !formData.platforms.includes(platformInput)) {
            setFormData((prevData) => ({
                ...prevData,
                platforms: [...prevData.platforms, platformInput],
            }));
            setPlatformInput("");
        }
    };

    const handleRemovePlatform = (platform) => {
        setFormData((prevData) => ({
            ...prevData,
            platforms: prevData.platforms.filter(item => item !== platform),
        }));
    };

    const handleGenreChange = (event) => {
        const { value, checked } = event.target;
        setFormData((prevData) => {
            if (checked) {
                return {
                    ...prevData,
                    genres: [...prevData.genres, value],
                };
            } else {
                return {
                    ...prevData,
                    genres: prevData.genres.filter((genre) => genre !== value),
                };
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateFormData();

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post("http://localhost:3001/games/videogames/create", formData);
                console.log("Response from backend:", response.data);

                setFormData({
                    name: "",
                    image: "",
                    description: "",
                    platforms: [],
                    releaseDate: "",
                    rating: 0,
                    genres: [],
                });
            } catch (error) {
                console.error("Error sending data:", error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateFormData = () => {

        const errors = {};

        if (!formData.name) {
            errors.name = "El nombre es obligatorio";
        }

        if (!formData.description) {
            errors.description = "La descripción es obligatoria";
        } else if (formData.description.length < 20 || formData.description.length > 500) {
            errors.description = "La descripción debe tener entre 20 y 500 caracteres";
        }

        if (!formData.image) {
            errors.image = "La imagen es obligatoria";}
        // } else if (!formData.image.match(imageUrlRegex)) {
        //     errors.image = "La URL de la imagen no es válida";
        // }
        
        if (formData.platforms.length === 0) {
            errors.platforms = "Debes agregar al menos una plataforma";
        }

        if (!formData.release) {
            errors.release = "La fecha de lanzamiento es obligatoria";
        } else {
            const currentDate = new Date();
            const selectedDate = new Date(formData.release);
            if (selectedDate > currentDate) {
                errors.release = "La fecha de lanzamiento debe ser una fecha pasada o igual a la fecha actual";
            }
        }
        
        if(!regexRating.test(formData.rating)){
            errors.rating = 'debe tener un valor entre 0 y 5'
        }

        if (formData.genres.length === 0) {
            errors.genres = "Debes seleccionar al menos un género";
        }

        return errors;
    };


    return (
        <>
            <div className={styles.divMain}>
                <Link to='/home'>
                    <button >Volver</button>
                </Link>
                <h1>Create Game</h1>
                <div className={styles.divForm}>
                <form onSubmit={handleSubmit}>
                    
                    <label className={styles.labels}>Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} />

                    <p >{errors.name}</p>

                    
                    <label className={styles.labels}>Description:</label>
                    <input 
                    type="text" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleInputChange} />

                    <p>{errors.description}</p>


                    <label className={styles.labels}>Image:</label>
                    <input 
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange} />

                    <p>{errors.image}</p>


                    
                    <label className={styles.labels}>Platforms:</label>
                    <div>
                        <input
                            type="text"
                            name="platforms"
                            value={platformInput}
                            onChange={handlePlatformInputChange}
                            placeholder="Agregar plataforma"
                        />
                        <button type="button" onClick={handleAddPlatform}>Agregar</button>
                    </div>
                    <ul>
                        {formData.platforms?.map((platform) => (
                            <li key={platform}>
                                {platform} <button type="button" onClick={() => handleRemovePlatform(platform)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    {<p>{errors.platforms}</p>}

                    <label className={styles.labels}>Release Date:</label>
                    <input 
                    type="date" 
                    name="release" 
                    value={formData.release} 
                    onChange={handleInputChange} />

                    {errors.release && <p >{errors.release}</p>}


                    <label className={styles.labels}>Rating:</label>
                    <input 
                    type="range" 
                    name="rating"
                    min={0}
                    max={5}
                    step={0.01}
                    value={formData.rating} 
                    onChange={handleInputChange} />

                    <p>{formData.rating}</p>

                    <p>{errors.rating}</p>
                    
                    <label className={styles.labels}>Genres:</label>
                    {allGenres?.map((element) => (
                        <label key={element}>
                            <input
                                type="checkbox"
                                name="genres"
                                value={element}
                                checked={formData.genres.includes(element)}
                                onChange={handleGenreChange}
                            />
                            {element}
                        </label>
                    ))}

                    <p >{errors.genres}</p>


                    <div>             
                    <button type="submit">Crear Videojuego</button>
                    </div>   
                </form>
                </div>
            </div>
        </>
    )
}
