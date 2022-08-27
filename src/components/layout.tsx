import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavigationComponent from "./navigation";
import { PropsWithChildren } from "react";

export default function LayoutComponent({ children }: PropsWithChildren) {

    return (
        <Box>
            <NavigationComponent />
            <Box component="main" sx={{ p: 3, overflowX: "auto" }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}