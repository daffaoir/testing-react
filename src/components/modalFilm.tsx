import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function ModalFilm(props: any) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleOpen} variant="contained" color="secondary">
                Details
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <CardMedia component="img" alt="Movies" image={props.film.Poster} />
                            </Grid>
                            <Grid item xs={8}>
                                <ul>
                                    <li>asdasd</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </CardActions>
    );
}
