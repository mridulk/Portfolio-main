import React from 'react'
import NavBar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/core/styles'
const Home = () => {
    const useStyles=makeStyles({
        particleStyle:{
            position:"absolute"
        }
    })
    const classes=useStyles()
    return (
        <div>
            <NavBar/>
            <Header/>
            <Particles
            canvasClassName={classes.particleStyle}
                params={{
                    
                    particles:{
                        number:{
                            value:25                           
                        },
                        shape:{
                            type:"circle",
                            stroke:{
                                width:1,
                                color:"tomato"
                            }
                        },
                        size:{


                            value:8,
                            random:true,
                            anim:{
                                enable:true,
                                speed:10,
                                size_min:0.1,
                                sync:true
                            }
                        }
                    }
                }}
            />
        </div>
    )
}
export default Home
