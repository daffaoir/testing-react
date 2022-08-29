import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
                    <Grid item xs={3}>
                        <CardLatihan />
                    </Grid>
                    {/* <Grid item xs={3}>
                        <CardLatihan />
                    </Grid>
                    <Grid item xs={3}>
                        <CardLatihan />
                    </Grid>
                    <Grid item xs={3}>
                        <CardLatihan />
                    </Grid> */}
                </Grid>
            </Box>
        </>
    );
}
