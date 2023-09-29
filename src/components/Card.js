import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
    const { movieName = '', image = '', releasedDate = '', movieRating  = ''} = props.movieList;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Name: {movieName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <br />
        <Typography variant="body2" color="text.primary">
          Release Date: {releasedDate}
        </Typography>
        <br />
        <Typography variant="body2" color="text.primary">
          Rating: {movieRating}
        </Typography>
      </CardContent>
    </Card>
  );
}
