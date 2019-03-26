import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appBar: {
    backgroundColor: '#c2b4ff',
    padding: 20,
    marginTop: 30,
    borderRadius: 10
  }
}

function SearchBar (props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.appBar}>
      <form noValidate autoComplete="off">
        <TextField
          onChange={props.onFilterTextChange}
          id="search-input"
          label="Search Text"
          margin="normal"
          fullWidth
          />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.inStockOnly}
              onChange={props.onInStockChange}
              value="in_stock"
              color="primary"
            />
          }
          label="Only show products in stock"
        />
      </form>
    </AppBar>
  )
}

export default withStyles(styles)(SearchBar);
