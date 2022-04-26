import React from "react";
import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
import logo from "../Imagenes/logo192.png";

function GifExpertApp(){

    const [categories, setCategories] = useState(["The last of us"]);

    return(
        <>
            <h2 className="animate__animated animate__bounce" > <img className="reactImagen" src={ logo } alt="ReactJS" /> Aplicación generadora de Gifs con ReactJS <img className="reactImagen" src={ logo } alt="ReactJS" /> </h2>

            <AddCategory setCategories={ setCategories } />
            <hr />
            
            <ol>
            {
                categories.map( (category) => ( <GifGrid key={ category } category={ category } /> ))

            }
            </ol>
            
        </>
    );

};

export default GifExpertApp;