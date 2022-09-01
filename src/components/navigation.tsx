import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

interface NavItemsProps {
    label: string;
    url: string;
}

const navItems: NavItemsProps[] = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Profile",
        url: "/profile",
    },
    {
        label: "Latihan",
        url: "/latihan",
    },
    {
        label: "Login",
        url: "/login",
    },
];

export default function NavigationComponent() {
    const navigate = useNavigate();
    return (
        <AppBar component="nav" color="secondary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { sm: "block" } }}>
                    <PetsIcon />
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item, index) => (
                        <Button key={index} sx={{ color: "#fff" }} onClick={() => navigate(item.url)}>
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
