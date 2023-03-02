import React from "react";
import Container from "@mui/material/Container"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import HomeForm from "./form";
const HomeBanner=()=>{
    return(
        <Container>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
         <h1>Your <span className="text-danger">Community</span><br/> knowns Best </h1> 
        </Grid>
        <Grid item xs={6}>
          <p className="fw-bold">New to your neighborhood?Register to jiran360 to keep yourself up-to-date with the latest news,events and get to know your neighborhood more!</p>
        </Grid>
        <Grid item xs={6}>
          <HomeForm/>
        </Grid>
        <Grid item xs={6}>
         
        </Grid>
      </Grid>
    </Box>
        </Container>
    )
}
export default HomeBanner;