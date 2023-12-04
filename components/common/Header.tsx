import {AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography} from "@mui/material"

export default function Header() {
    return (
        <Box sx={{marginBottom: "100px"}}>
            <AppBar>
                <Typography variant={"h3"}>Faryne 的實驗室</Typography>
            </AppBar>
        </Box>
    )
}