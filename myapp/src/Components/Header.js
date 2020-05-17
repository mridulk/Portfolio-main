import React from 'react'
import { Typography,Avatar,Grid,Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../Mridul.jpg'
import Typed from 'react-typed'
const Header = () => {
    const useStyles=makeStyles((theme)=>({
        avatar:{
            width:theme.spacing(20),
            height:theme.spacing(20),
            margin:theme.spacing(1)
        },
        title:{
            color:"tan",
            fontSize:"1.9rem",
            fontWeight:"500"
        },
        subtitle:{
            color:"white",
            marginBottom:"3rem",
            fontSize:"1.0rem"
        },
        typedContainer:{
            textAlign:"center",
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)",
            zIndex:1,
            width:"100vw"
            
        }
    }))
    const classes=useStyles()
    return (
        
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Mridul Khurana"/>
            </Grid>
            
            <Typography className={classes.title} varient="h4">
                <Typed strings={["Mridul Khurana"]} typeSpeed={30}/>
            </Typography>
            <Typography className={classes.subtitle} varient="h4">
                <Typed strings={["Web Design","Web Developer","MERN Stack"]} typeSpeed={30} backSpeed={30} loop/>
            </Typography>
        </Box>
    
    )
}

export default Header
