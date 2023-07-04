import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Grid container direction="column" style={{ minHeight: "90vh" }}>
      <Grid item>
        <AppBar position="static">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Header</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Box p={3}>
          <Typography variant="h4">Content Section</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed
            vel dignissimos magni voluptatum qui asperiores fugit. Ad dolorem
            deleniti, repellat laboriosam illum consectetur sint perspiciatis
            accusantium, reiciendis atque repudiandae. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec at est ut felis ultricies
            mattis a vitae lacus. Sed sed quam neque. Nunc consectetur risus vel
            dolor pellentesque, eu consequat metus sodales. Morbi at diam a
            metus molestie egestas non sed urna. Nam aliquam blandit nunc, id
            sollicitudin nunc gravida sit amet. Donec ut massa elementum,
            eleifend mauris sed, lobortis lorem.
          </Typography>
        </Box>
      </Grid>
      <Grid item marginTop="auto">
        <AppBar position="static">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Footer</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Content;
