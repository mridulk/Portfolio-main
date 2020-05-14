import React from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'
const Navbar = () => {
    return (
        <>
        <Box component="div">
            <Avatar src={avatar} alt="Mridul Khurana"/>
        </Box>
        <Box component="nav">
           <AppBar posotion="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar> 
        </Box>
        </>
    )
}
export default Navbar