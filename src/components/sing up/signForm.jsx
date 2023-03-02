import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EmailIcon from "@mui/icons-material/Email";

const SignForm = () => {
  return (
    <div className="py-5 bg-light">
      <div className="d-flex  ">
        <div>
          <h1>
            <span className="text-danger"> Get</span> started now!
          </h1>
        </div>
        <span
          className="w-50"
          style={{
            display: "inline-block",
            borderBottom: "1px dashed black",
            marginBlock: "auto",
            height: "1px",
          }}
        ></span>
      </div>
      <p>
        You're just 2 Steps away to join your neighbourhoods, please enter the
        following details and Create your account.
      </p>
      <div className="d-flex p-5 ">
        <div>
          <Box
            sx={{ flexGrow: 1, boxShadow: "0px 0px 9px 0px" }}
            className="p-3 rounded-2 w-75 mx-auto"
          >
            <Grid container spacing={2}>
              <h4>Create your account</h4>

              <Grid item xs={12}>
                <Typography>Email ID</Typography>
                <TextField
                  id="standard-basic"
                  label=""
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Password</Typography>
                <TextField
                  id="standard-basic"
                  placeholder="******"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOffIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography>confirm Password</Typography>
                <TextField
                  placeholder="******"
                  id="standard-basic"
                  variant="standard"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOpenIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityOffIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={{ width: "100%" }}
                />
              </Grid>
              <button
                style={{
                  backgroundColor: "#9227ff",

                  border: "none",
                  width: "100%",
                }}
                className="rounded-pill text-white px-5 py-3 my-4"
              >
                Continue to Registration
              </button>
            </Grid>
          </Box>
        </div>
        <div>
          <h3 className="text-center">or continue with</h3>
          <button
            style={{
              backgroundColor: "#fff",
              color: "blue",
              border: "1px solid blue",
              width: "100%",
              textAlign: "center",
            }}
            className="rounded-pill  px-5 py-3 my-4"
          >
            <i class="bi bi-facebook"></i> facebook
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              color: "red",
              border: "1px solid red",
              width: "100%",
              textAlign: "center",
            }}
            className="rounded-pill px-5 py-3 my-4"
          >
            <i class="bi bi-google"></i> Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignForm;
