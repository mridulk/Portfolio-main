import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
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
    Box,
    ListItemIcon
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import avatar from '../avatar1.webp'
import MobileRightSlider from '@material-ui/core/Drawer'
const useStyles=makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"rgb(0,0,0)",
        height:"100%"
    },
    avatar:{
        display:"block",
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}))
const menuItems=[
    {
        listIcon:<Home/>,
        listText:"Home",
        listPath:"/"
    },
    {
        listIcon:<AssignmentInd/>,
        listText:"Resume",
        listPath:"/resume"
    },
    {
        listIcon:<Apps/>,
        listText:"Portfolio"
    },
    {
        listIcon:<ContactMail/>,
        listText:"Contacts"
    }
]
const Navbar = () => {
    const [state, setstate] = useState({right:false},[])
    const toggleSlider=(slider,open)=>()=>{
        setstate({...state,[slider]:open})
    }
    const classes=useStyles()
    const sideList=slider=>(
         <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider("right",false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Mridul Khurana"/>
            <Divider/>
            <List>
                
                    {
                        menuItems.map((lstItem,key)=>(
                            <ListItem button key={key} component={Link} to={lstItem.listPath}>
                                <ListItemIcon className={classes.listItem}>
                                    {lstItem.listIcon}
                                </ListItemIcon>
                                <ListItemText className={classes.listItem} primary={lstItem.listText}/>
                            </ListItem>
                        ))
                    }
               
               
            </List>
        </Box>
    )
    
    return (
        <>
       
        <Box component="nav">
           <AppBar position="static" style={{background:"rgb(0,0,0,0.7)",boxShadow:"2px 2px 5px rgb(226, 79, 10)"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                        <ArrowBack style={{color:"tan"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan",fontWeight:"550"}}>
                        Portfolio
                    </Typography>
                    <MobileRightSlider open={state.right} anchor="right" onClose={toggleSlider("right",false)}>
                        {sideList(state.right)}
                    </MobileRightSlider>
                </Toolbar>
            </AppBar> 
        </Box>
        </>
    )
}
export default Navbar