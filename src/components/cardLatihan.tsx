import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface CardListComponentProps {
    title: string;
    img: string;
    desc: string;
    url: string;
}

const cardItems: CardListComponentProps[] = [
    {
        title: "Movies",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg",
        desc: "Using OMDB API to search Movies",
        url: "/movies",
    },
    {
        title: "Latihan 2",
        img: "#",
        desc: "asd",
        url: "/latihan2",
    },
];

export default function CardLatihan(props: any) {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={props.img} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate(props.url)} size="small" variant="outlined">
                    More
                </Button>
            </CardActions>
        </Card>
    );
}
