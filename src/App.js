import { Box, Button, Grid, makeStyles, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import BillingDetails from "./BillingDetails";
import DeliveryAddress from "./DeliveryAddress";
import GstDetails from "./GstDetails";
import Test from "./Test";
import "./App.css";

const App = () => {
  return (
    <Container sx={{background:'blue'}} maxWidth={"md"}>
      <Grid container spacing={5}>
        <Grid item xs={12}  sx={{background:'white'}} >
          <Test />
        </Grid>
        <Grid item xs={12} >
          <GstDetails />
        </Grid>
        <Grid item xs={12}>
          <BillingDetails />
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default App;
