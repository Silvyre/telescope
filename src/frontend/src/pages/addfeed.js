import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AccountCircle, RssFeed, HelpOutline } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

import './index.css';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function AddFeed() {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Container maxWidth="lg" bgcolor="primary.main">
        <Box my={4} bgcolor="primary.main">
          <Typography variant="h2" component="h1" gutterBottom>
            Add Feed page
          </Typography>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField disabled label="(Username)" />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <RssFeed />
            </Grid>
            <Grid item>
              <TextField label="Add a URL to your blog feed here" />
              <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <HelpOutline />
                </IconButton>
              </label>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
