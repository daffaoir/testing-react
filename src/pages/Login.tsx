import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { BgsForm, FormModel } from "@andrydharmawan/bgs-component"
import Swal from "sweetalert2";

interface Response {
    code: string | number;
    message: string;
    data?: any;
}

export default function Login() {
    const form: FormModel = {
        onSubmit: async (values, { loading }) => {
            loading(true);
            let response: Response;

            try {
                const { data } = await axios.post("https://cresa-dev-api.asyst.co.id/uaa/user/auth/login", {
                    parameter: {
                        data: values,
                    },
                });
                const { responseDesc: message, responseCode: code } = data.status || {};
                response = {
                    code,
                    message,
                    data: data.result,
                };
            } catch (error: any) {
                const { responseDesc: message, responseCode: code } = error?.response.data.status || {};
                response = {
                    code,
                    message,
                };
            }

            loading(false);
            const status: boolean = response.code === "200";

            Swal.fire({
                icon: status ? "success" : "error",
                title: status ? "Success" : "Error",
                text: response.message,
                showConfirmButton: false,
                toast: true,
                timer: 3000,
                position: "top-end",
            });
        },
        items: [
            "username",
            {
                dataField: "password",
                editorOptions: {
                    type: "password",
                },
            },
            {
                editorType: "button",
                editorOptions: {
                    type: "submit",
                    text: "Login",
                },
            },
        ],
    };

    return (
        <>
            {/* <Stack spacing={2} sx={{ width: "35ch" }}>
                <TextField label="Username" color="secondary" variant="outlined" />
                <TextField label="Password" color="secondary" variant="outlined" />
            </Stack>
            <Button variant="contained" color="secondary" type="submit" sx={{ mt: 1 }}>
                Login
            </Button> */}
            <BgsForm {...form} />
        </>
    );
}
