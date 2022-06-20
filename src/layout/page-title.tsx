import React from "react";
import { Grid, Typography } from "@mui/material";

export default function PageTitle({ title } : { title: string }) {
  return (
    <Grid item xs={12} style={{ marginBottom: "20px" }}>
      <Typography variant="h4">{title}</Typography>
    </Grid>
  );
}
