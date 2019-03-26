import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'
import ProductsTable from './ProductsTable'
import logo from '../logo.svg';
import _ from 'lodash'
import { connect } from 'react-redux'
import { openAddProductModal, closeAddProductModal, addProduct } from '../redux/ActionCreators';
import AddModalProduct from './addModalProduct';

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

// class FilterableProductTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };

//     // Example to show bind options
//     // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <React.Fragment>
//         <Card className={classes.card}>
//           <CardContent>
//             <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
//               <img src={logo} className="App-logo" alt="logo" />
//               <Typography component="h4" variant="h4" className={classes.title}>
//                 <i>SEARCHABLE PRODUCT TABLE</i> 
//               </Typography>
//             </div>
//             <SearchBar 
//               filterText={this.state.filterText}
//               inStockOnly={this.state.inStockOnly}
//               onFilterTextChange={this.handleFilterTextChange}
//               onInStockChange={this.handleInStockChange}
//             />
//             <ProductsTable {...this.getProductsTableProps()} />
//           </CardContent>
//           <CardActions>
//             <Button size="small">ADD PRODUCT</Button>
//           </CardActions>
//         </Card>
//       </React.Fragment>
//     )
//   }

//   handleFilterTextChange = (e) => {
//     const filterText = e.target.value
//     this.setState({
//       filterText: filterText
//     });
//   }

//   handleInStockChange () {
//     this.setState({
//       inStockOnly: !this.state.inStockOnly
//     })
//   }

//   getProductsTableProps = () => {
//     return {
//       filterText: this.state.filterText,
//       inStockOnly: this.state.inStockOnly
//     }
//   }
// }

const FilterableProductTable = (props) => {
  const { classes } = props;

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (e) => {
    const filterText = e.target.value
    setFilterText(filterText);
  }

  const handleInStockChange = () => {
    setInStockOnly(!inStockOnly);
  }

  const getProductsTableProps = () => {
    return {
      filterText,
      inStockOnly
    }
  }

  useEffect(() => {
    // Check how the browser tab title is updated accordinglly with the Search Text
    document.title = filterText
  }, [filterText]);


  const handleClickOpen = () => {
    props.openAddProductModal();
  };

  
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography component="h4" variant="h4" className={classes.title}>
              <i>SEARCHABLE PRODUCT TABLE</i> 
            </Typography>
          </div>
          <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={handleFilterTextChange}
            onInStockChange={handleInStockChange}
          />
          <ProductsTable {...getProductsTableProps()} />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>ADD PRODUCT</Button>
        </CardActions>
      </Card>

      <AddModalProduct/>
    </React.Fragment>
  )
} 

const mapDispatchToProps = dispatch => ({
  openAddProductModal: () => dispatch(openAddProductModal())
})

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(FilterableProductTable));
