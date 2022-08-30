import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Feed from "./feed";
import Rightbar from "./rightbar";
import Sidebar from "./sidebar";

export default function Latihan2() {
    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar />
                <Feed />
                <Rightbar />
            </Stack>
        </>
    );
}
