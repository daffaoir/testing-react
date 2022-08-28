import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";

interface Response {
    code: string | number;
    message: string;
    data?: any;
}

const baseURL = "https://cresa-dev-api.asyst.co.id/uaa/user/auth/login";

export default function Login() {
    const [values, setValues] = useState([]);

    

    return (
        <>
            <Stack spacing={2} sx={{ width: "35ch" }}>
                <TextField label="Username" color="secondary" variant="outlined" />
                <TextField label="Password" color="secondary" variant="outlined" />
            </Stack>
            <Button variant="contained" color="secondary" type="submit" sx={{ mt: 1 }}>
                Login
            </Button>
        </>
    );
}
