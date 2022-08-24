import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

interface NavItemsProps {
    label: string;
    url: string;
}

const navItems: NavItemsProps[] = [{
    label: "Home",
    url: "/"
}, {
    label: "Profile",
    url: "/profile"
}, {
    label: "Movies",
    url: "/movies"
}]

export default function NavigationComponent() {

    const navigate = useNavigate();
    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Rinyo
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item, index) => (
                        <Button key={index} sx={{ color: '#fff' }} onClick={() => navigate(item.url)}>
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
