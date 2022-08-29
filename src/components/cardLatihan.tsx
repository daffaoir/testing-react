import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Children } from "react";

interface CardListComponentProps {
    title: string;
    img: string;
    url: string;
}

const cardItems: CardListComponentProps[] = [
    {
        title: "Movies",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg",
        url: "/movies",
    },
    {
        title: "Latihan 2",
        img: "#",
        url: "/latihan2",
    },
];

export default function CardLatihan() {
    const navigate = useNavigate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg" alt="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Movies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Using OMDB API to search Movies
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate("/movies")} size="small" variant="outlined">More</Button>
            </CardActions>
        </Card>
    );
}
