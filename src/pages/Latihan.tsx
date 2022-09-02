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
                        <CardLatihan title="Kalkulator" desc="Make React Calculator" img="https://help.apple.com/assets/6222428998C2CE34C75A5252/6222428B98C2CE34C75A5267/en_US/444e9701b92783985608b59943f635be.png" url="/kalkulator" />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
