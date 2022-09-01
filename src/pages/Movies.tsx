import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ModalFilm from "../components/modalFilm";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));
interface FilmProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const baseURL = "http://www.omdbapi.com/?apikey=8b93e3f3";

export default function Movies() {
    const [film, setFilm] = useState<FilmProps[]>([]);
    const [isLoading, setisLoading] = useState<Boolean>(false);
    const [isError, setisError] = useState<Boolean>(false);
    const [hasilSearch, setHasilSearch] = useState<String>("");

    useEffect(() => {
        setisLoading(true);
        axios
            .get(`${baseURL}&s=${hasilSearch}`)
            .then((response) => {
                setFilm(response.data.Search || []);
                setisLoading(false);
            })
            .catch((err) => {
                setisError(true);
                setFilm([]);
                setisLoading(false);
            });
    }, [hasilSearch]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3" marginTop={5} textAlign="center">
                    Movies
                </Typography>
                <Search sx={{ marginTop: 3 }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search Movie..." inputProps={{ "aria-label": "search" }} onChange={(e) => setHasilSearch(e.target.value)} />
                    <Button variant="contained" color="secondary">
                        Search
                    </Button>
                </Search>
            </Grid>

            {isLoading && (
                <Box sx={{ display: "flex" }}>
                    <CircularProgress color="secondary" />
                </Box>
            )}

            {isError && film.length === 0 && <h1>Something Went Wrong</h1>}

            {film.map(({ Title, Year, imdbID, Type, Poster }) => {
                return (
                    <Grid item xs={3}>
                        <Card key={imdbID} sx={{ maxWidth: 300, marginTop: 5 }}>
                            <CardMedia component="img" alt="Movies" height="450" image={Poster} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography variant="h5" component="div">
                                    {Title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {Type}
                                </Typography>
                            </CardContent>
                            <ModalFilm film={{ Title, Year, imdbID, Type, Poster }} />
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
}
