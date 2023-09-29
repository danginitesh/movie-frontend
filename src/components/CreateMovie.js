import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"
import axios from "axios";
 
const Login = () => {
    const [movieName, setMovieName] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [realesDate, setRealesDate] = useState('')
    const [rating, setRating] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const movie = {
            movieName : movieName, image : imageLink, releasedDate: realesDate, movieRating: rating
        };
        const response = await axios.post("http://localhost:5000/api/create-movie",  movie );
        if(response.status === 200) {
            console.log("movie created succesfull");
        }else{
            console.log("movie created failed");
        }
        
    }
    
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Movie Create Form</h2>
                <TextField 
                    label="Name"
                    name="movieName"
                    onChange={e => setMovieName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={movieName}
                    // error={emailError}
                 />
                 <TextField 
                    label="Image Link"
                    name="imageLink"
                    onChange={e => setImageLink(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    value={imageLink}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Release Date"
                    name="realesDate"
                    onChange={e => setRealesDate(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={realesDate}
                    // error={emailError}
                 />
                 <TextField 
                    label="Rating"
                    name="rating"
                    onChange={e => setRating(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    fullWidth
                    value={rating}
                    // error={emailError}
                 />
                 
                 <Button variant="outlined" color="secondary" type="submit">Create</Button>
             
        </form>
        </React.Fragment>
     );
}
 
export default Login;