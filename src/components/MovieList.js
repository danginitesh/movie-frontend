import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import axios from "axios";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:5000/api/movies");
            setMovieList(response.data);
        }
        fetchData();
    }, []);
    
    return (
        <>
        {movieList.map((movie) => {
           return (
            <>
           <Card movieList={movie}/>
           <br/>
           </>
           )     
        })}
        </>
    )
}

export default MovieList