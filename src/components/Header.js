import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'

const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#18161B'
  },
  toolbarTitle: {
    flex: 1,
    color: '#61DBFB !important'
  },
  cart: {
    backgroundColor: '#fefefe !important'
  },
  counter: {
    marginRight: 15,
    fontSize: 20
  }
})

const Header = ({ classes, selectedProducts }) => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="primary" noWrap className={classes.toolbarTitle}>
        <b >React</b>  Products Store
        </Typography>
        <Button disabled={selectedProducts.length === 0} variant="outlined" className={classes.cart} >
          <b className={classes.counter}>{selectedProducts.length}</b> products in the cart
        </Button>
      </Toolbar>
    </AppBar>
  </React.Fragment>
)

const mapStateToProps = state => ({
  selectedProducts: state.products.selectedProducts
})

export default connect(mapStateToProps)(withStyles(styles)(Header))
