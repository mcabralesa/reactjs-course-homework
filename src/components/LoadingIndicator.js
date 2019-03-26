
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    loading: {
        padding: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
};

const Loading = (props) => {
    const { classes } = props;

    return(
        <div className={classes.loading}>
          <CircularProgress />
        </div>
    );
}

export default withStyles(styles)(Loading)