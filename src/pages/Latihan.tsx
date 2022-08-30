import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CardLatihan from "../components/cardLatihan";

export default function Latihan() {
    return (
        <>
            <Typography variant="h3" textAlign="center">
                Hasil Latihan
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} mt={2}>
                    <Grid item md={4}>
                        <CardLatihan title="Movies" desc="Using OMDB API to search Movies" url="/movies" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg" />
                    </Grid>
                    <Grid item md={4}>
                        <CardLatihan title="Latihan 2" desc="Buat Latihan 2" url="/latihan-2" />
                    </Grid>
                    <Grid item md={4}>
                        <CardLatihan title="Latihan 3" desc="Buat Latihan 3" url="/movies" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
