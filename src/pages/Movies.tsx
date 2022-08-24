import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// http://www.omdbapi.com/?apikey=8b93e3f3&s=avengers

interface FilmProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export default function Movies() {
  const [film, setFilm] = useState<FilmProps[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("http://www.omdbapi.com/?apikey=8b93e3f3&s=avengers")
      .then((response) => {
        setFilm(response.data.Search);
        setisLoading(false);
      })
      .catch((err) => {
        setisError(true);
        setisLoading(false);
      });
  }, []);

  console.log(film);

  if (isLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  else if (film && !isError)
    return (
      <Container>
        <Typography variant="h3" marginTop={5}>
          Movies
        </Typography>
        {film.map(({ Title, Year, imdbID, Type, Poster }, index) => {
          return (
            <Container>
              <Card sx={{ maxWidth: 300, marginTop: 5 }}>
                <CardMedia component="img" alt="Movies" height="500" image={Poster} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {Title} - {Year}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Details</Button>
                </CardActions>
              </Card>
            </Container>
          );
        })}
      </Container>
    );
  else {
    return <h1>Something Went Wrong</h1>;
  }
}
