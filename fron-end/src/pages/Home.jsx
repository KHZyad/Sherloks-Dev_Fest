import { Box } from "@mui/material"
import { Hero } from "../components/HOME/Hero"
import '../CSS/hero-bg.css'
import { Features } from "../components/HOME/Features"
import { Explore } from "../components/HOME/Explore"
import { ReadyToJoin } from "../components/HOME/ReadyToJoin"
import { Footer } from "../layouts/Footer"



export const Home = ()=>{

 return (
 <Box 
 >
    <div id="gradient-bg"></div>
    <Hero/>
    <Features/>
    <Explore/>
    <ReadyToJoin/>
    <Footer/>
 </Box>
    
 )
}