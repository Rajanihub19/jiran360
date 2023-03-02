import React from "react";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
const HomeForm=()=>{
    return(
        <div >        
        <Box sx={{ flexGrow: 1,  boxShadow: "0px 0px 9px 0px" }} className="p-3 rounded-2">
        <Grid container spacing={2}>
          <Grid  item xs={12}>
          <TextField  placeholder="" id="standard-basic" label="Enter the details and Create your Account" variant="standard" style={{width:"100%"}}/>
          </Grid>
          <Grid item xs={8}>
          <Typography >Street Address</Typography>
          <TextField  placeholder="jalan SS21/1a,Petaling jaya" id="standard-basic"  variant="standard" style={{width:"80%"}}/>
          </Grid>
          <Grid item xs={4}>
          <Typography >Postcode</Typography>
          <TextField  placeholder="Postcode" id="standard-basic"  variant="standard" />
          </Grid>
          <Grid item xs={12}>
          <Typography >State</Typography>
          <TextField  placeholder="State" id="standard-basic" variant="standard"  style={{width:"100%"}}/> 
          </Grid>
          <button style={{backgroundColor:"#9227ff",marginLeft:"150px",border:"none"}} className="rounded-pill text-white px-5 py-3 my-4">join your Neighborhood</button>
        </Grid>
      </Box>
      </div>

    )
}
export default HomeForm;