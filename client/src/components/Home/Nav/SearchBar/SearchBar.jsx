import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(){
    const navigate = useNavigate();

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
            
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                onChange={handleInputChange}
                value={name}
                type= 'text'
                placeholder="Search..."
                />

                <button type="submit">
                    Search
                </button>

            </form>
        </div>
    )
}